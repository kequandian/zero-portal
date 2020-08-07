## zero-portal部署文档
> 本系统基于容器技术 `docker` 进行部署

#### 首先在Linux系统安装 `docker`, `docker-compose`
- [安装docker容器环境指引](https://github.com/kequandian/dev_docs/blob/master/ops/Linux%E7%B3%BB%E7%BB%9F%E5%AE%89%E8%A3%85%20docker%E5%92%8Cocker-compose.md)

#### 下载配置好的容器环境（将会作为代码交付）
> 或直接从github的公共地址获取
```shell
$ git clone git@github.com:kequandian/zero-portal.git
```

#### 通过root登录，创建一个部署目录（比如 /webapps/zero-portal) 
> 或创建用户（如 mall），然后通过用户名登录，在用户home目录下创建部署目录（/home/mall/zero-portal) 


#### 将相应jar包放置到对应的映射路径
* ./muaskin-portal-api 路径下放置以下jar包
* ./muaskin-portal-api/muaskin-portal-api-1.0.0-standalone.jar

#### 将相应前端文件放置到对应的映射路径./portal下
* 将portal文件夹里面的文件复制到映射路径./portal下

#### 将portal-gateway文件夹的文件复制到映射路径./portal-gateway下
> 先在portal-gateway目录下，执行npm install命令，生成mode_modules目录
```shell
$ cd ./portal-gateway
$ npm install
```
> 然后将portal-gateway目录下的文件复制到映射路径./portal-gateway下

#### 将portal-manage文件夹下的dist目录复制到映射路径./portal-manage下
> 先在portal-manage目录下，执行npm install命令，生成mode_modules目录
> 再执行npm run build命令
```shell
$ cd ./portal-manage
$ npm install
$ npm run build
```
> 然后将portal-manage文件夹下的dist目录复制到映射路径./portal-manage下

#### 然后执行命令 docker-compose up -d 
```shell
$ docker-compose up -d 
```

#### 如何配置域名

> * 配置 将 `cloud.zero.com` 替换为已备案的域名

```shell
$ cat ./nginx-gateway/80.conf
server{
     listen 80;
     server_name cloud.zero.com;
    
     location /images {
          root /;
          index index.html index.htm;
        }
  ...
 }
```




