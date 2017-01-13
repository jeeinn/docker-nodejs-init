##配置要求
* Docker (>1.9.1)
* Docker-compose (>1.6.0)

##容器
* redis (redis:alpine)
* mongodb (mvertes/alpine-mongo)
* myapp (express + npm)

##使用方法
下载
```
git clone https://github.com/jeeinn/docker-nodejs-init.git
cd docker-nodejs-init
```
构建并开启
```
docker-compose up -d
```
访问
```
http://127.0.0.1:3000
```
关闭
```
docker-compose down
```
## 更多常用命令:
* 使用`docker-compose`暂停
```
docker-compose stop
```
* 使用`docker-compose`开启
```
docker-compose start
```
* 将所有容器停止
```
docker kill $(docker ps -q)
```
* 将所有容器停止并删除
```
docker kill $(docker ps -q) ; docker rm $(docker ps -a -q)
```
* 将所有容器停止并删除，然后清除Docker中所有已下载的镜像（慎用）
```
docker kill $(docker ps -q) ; docker rm $(docker ps -a -q) ; docker rmi $(docker images -q -a) 
```
[点此查看更多常用命令](https://docs.docker.com/compose/reference/)

##文件结构
* deploy（存储持久化数据、配置文件）
* myapp （存储开发所使用的网站程序数据）

## 更新
* 2017-01-13 初始化