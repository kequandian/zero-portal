## zero-portal 开源官网部署文档
> 以下介绍如何通地容器技术 `docker` 进行部署

#### 首先在Linux系统准备好 `docker` 以及 `docker-compose`环境
- [安装docker容器环境指引](https://github.com/kequandian/dev_docs/blob/master/ops/Linux%E7%B3%BB%E7%BB%9F%E5%AE%89%E8%A3%85%20docker%E5%92%8Cocker-compose.md)

### 获取源代码（其中包含已配置好的容器环境 `docker目录`）
```shell
# 在本地获取源代码
$ git clone git@github.com:kequandian/zero-portal.git
$ cd zero-portal
$ ls -l
total 33
drwxr-xr-x 1 vincent 197121   0  8月  7 17:38 docker/
drwxr-xr-x 1 vincent 197121   0  9月 23  2019 muaskin-portal/
drwxr-xr-x 1 vincent 197121   0  8月  6 18:07 muaskin-portal-api/
drwxr-xr-x 1 vincent 197121   0  7月 30 09:17 portal/
drwxr-xr-x 1 vincent 197121   0  8月  6 18:07 portal-api/
drwxr-xr-x 1 vincent 197121   0  7月 30 09:14 portal-gateway/
drwxr-xr-x 1 vincent 197121   0  8月  7 17:38 portal-management/
-rw-r--r-- 1 vincent 197121 305  8月  6 18:14 README.md
$ find docker/
docker/
docker/deployless.sh
docker/docker-compose.yml
docker/muaskin-portal-api
docker/muaskin-portal-api/config
docker/muaskin-portal-api/config/application.yml
docker/nginx
docker/nginx/cert
docker/nginx/cert/application_cert.key
docker/nginx/cert/application_cert.pem
docker/nginx/conf.d
docker/nginx/conf.d/443.conf
docker/nginx/conf.d/80.conf
docker/nginx/conf.d/default.conf
docker/nginx/logs
docker/portal-mysql
docker/portal-mysql/sql_mode.cnf
docker/README.md
```

### 部署到服务器

#### 通过root登录，创建一个部署目录（比如 /webapps/portal) 
> 或创建用户（如portal），然后通过用户名登录，在用户home目录下直接进行部署（/home/portal) 

#### 先将 docker下面的所有部署配置文件通过ftp工具（如 WinScp）拷贝至服务器上的部署目录 (/webapps/portal)
> 或先准备好所有安装包，再一次性上传至服务吕
```bash
$ find /webapps/portal
/webapps/portal/
/webapps/portal/deployless.sh
/webapps/portal/docker-compose.yml
/webapps/portal/muaskin-portal-api
/webapps/portal/muaskin-portal-api/config
/webapps/portal/muaskin-portal-api/config/application.yml
/webapps/portal/nginx
/webapps/portal/nginx/cert
/webapps/portal/nginx/cert/application_cert.key
/webapps/portal/nginx/cert/application_cert.pem
/webapps/portal/nginx/conf.d
/webapps/portal/nginx/conf.d/443.conf
/webapps/portal/nginx/conf.d/80.conf
/webapps/portal/nginx/conf.d/default.conf
/webapps/portal/nginx/logs
/webapps/portal/portal-mysql
/webapps/portal/portal-mysql/sql_mode.cnf
/webapps/portal/README.md
```

#### 同时上传相应的由源代码生成的安装包也拷贝至部署目录 (/webapps/portal)
* 官网html原生文件 (所有文件直接复制)
```bash
$ ls /webapps/portal/portal
...
/webapps/portal/portal/index.html
...
``````

* api安装包 （通过mvn package生成）
```bash
$ ls /webapps/portal/muaskin-portal-api
/webapps/portal/muaskin-portal-api/muaskin-portal-api-1.0.0-standalone.jar
```

* nodejs api
> 在本地进入portal-gateway目录，执行npm install命令
```bash
# 本地安装
$ cd ./portal-gateway
$ npm install
```

> 复制至远程部署服务器
```bash
$ ls /webapps/portal/portal-gateway
...
/webapps/portal/portal-gateway/index.js
...
```

* 内容管理后台 portal-management
> 先在portal-management，执行npm install命令
> 再执行npm run build命令，生成dist
```bash
# 本地安装
$ cd ./portal-management
$ npm install
$ npm run build
```

> 生成的dist复制至远程部署服务器
$ ls /webapps/portal/portal-management
```bash
...
/webapps/portal/portal-management/dist
...
```

#### 如何配置域名

> * 将已备案域名(www.sample.com) 替换 localhost
```shell
$ cat /webapps/portal/nginx/conf.d/80.conf
server{
     listen 80;
     #server_name localhost;
     server_name www.sample.com;
  ...
}

## 申请免费或付费 SSL 授权，覆盖以下两个授权文件
# /webapps/portal/nginx/cert/application_cert.key
# /webapps/portal/nginx/cert/application_cert.pem

$ cat /webapps/portal/nginx/conf.d/443.conf
server{
    listen 443;
    #server_name localhost;
    server_name www.sample.com;
     
    ssl_certificate /cert/application_cert.pem;
    ssl_certificate_key /cert/application_cert.key;
  ...
 }
 ```
 
 ### 最后执行一键部署命令 docker-compose up -d 
```shell
$ docker-compose up -d 
```

