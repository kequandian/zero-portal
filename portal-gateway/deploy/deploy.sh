#!/bin/sh

file="muaskin-portal-gateway.zip"
url="http://120.79.49.72:8000/link/muaskin-portal-gateway"

mv $file $file.rollback_$(date "+%m-%d")
wget "${url}/${file}"

#cp dist/config.js config.js.bak

mv dist dist.rollback_$(date "+%m-%d")
unzip $file -d dist

docker restart muaskin-portal-gateway
