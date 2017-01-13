FROM mhart/alpine-node

MAINTAINER jeeinn thinkwei2012@gmail.com

# 安装依赖
# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python

#创建内部工作目录
RUN mkdir /myapp
WORKDIR /myapp
ADD package.json /myapp/package.json

#拷贝数据
#COPY ../myapp /myapp

#安装
RUN npm install

# 移除依赖
#RUN apk del make gcc g++ python && \
#  rm -rf /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp

RUN rm -rf /var/cache/apk/*

#CMD ["npm", "start"]