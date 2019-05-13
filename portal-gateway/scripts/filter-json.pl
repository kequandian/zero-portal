#!/usr/bin/perl
use lib 'local';
use JSON;
use Data::Dumper;

sub usage {
   print "Usage:  filter-json.pl <input> <output> --filter <.json>\n";
   exit(0);
}
my $filter=undef;
my $input=undef;
my $output=undef;

my @args;
my $filter_ok=undef;
foreach (@ARGV){
   if(/--filter/){
      $filter_ok = 1;
      next;
   }
   if($filter_ok){
      $filter = $_;
      $filter_ok=undef;
      next;
   }

   push(@args, $_);
}

$input = shift @args;
$output = shift @args;

if(!($filter)){
   usage();
   exit(0);
}

if( (!($input)) || (!(-e $input))){
   print "$input not exists\n";
   exit(0);
}


## decode json
my $json_string = get_file_content($filter);
#print $json_string;

my $json = JSON->new->utf8->decode($json_string);
#print Dumper($json);

my $lines_ref = get_file_lines($input);
my @lines = @{$lines_ref};

## open ouput file for write
open my $fh, ">", "$output";
   foreach(@lines){
       if(/^[\s\n\r]+$/){
          next;
       }

       if(/^\s*\<img\s+/){
           # fix src='./ with src='
           if(/\ssrc\=[\'\"]\./){
              s/\ssrc\=\'\.\// src\=\'/;
           }
           # fix src=" with src='
           if(/\ssrc\=\"[\w\/\.\_]+\"/){
              s/\ssrc\=\"([\w\/\.\_]+)\"/ src\=\'$1\'/;
           }
           
           ## for debug
           s/^\s+//;

           # skip http:// and https:// 
           if( (/src\=\'http\:\/\//) || ((/src\=\'https\:\/\//)) ){
               ## do nothing
           }else{
               ## handle image 
               ##filter_line ($_, $json);
               
               ## get image src first
               my $line=$_;
               $line=~/src=\'([\w\/\.\_]+)\'/;
               my $src_key = $1;
               #print $src_key."\n";

               ## get replacement from json
               if(exists $json->{$src_key}){
                   my $src_http = $json->{$src_key};
                   if($src_http){
                       s/\ssrc\=\'$src_key/ src\=\'$src_http/;
                   }
               }

               #print $_;
           }
       }
       print $fh $_;
   }
close $fh;


## get input lines
sub get_file_lines{
  my ($in) = @_;

  my @lines;

  open my $fh, "<", "$in";
  @lines = <$fh>;
  close $fh;

  return \@lines;
}

## get json file
sub get_file_content{
  my ($in) = @_;

  my $data;
  local $/; #Enable 'slurp' mode

  open my $fh, "<", "$in";
  $data = <$fh>;
  close $fh;

  return $data;
}
