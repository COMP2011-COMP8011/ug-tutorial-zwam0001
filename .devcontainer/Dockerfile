FROM mcr.microsoft.com/devcontainers/javascript-node:20

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        ca-certificates curl default-mysql-client git gnupg lsb-release procps redis-tools wget

RUN wget https://downloads.mongodb.com/compass/mongosh-2.1.1-linux-x64.tgz && \
    tar -zxvf mongosh-2.1.1-linux-x64.tgz && \
    cp -R mongosh-2.1.1-linux-x64/bin/* /usr/local/bin/ && \
    rm -rf mongosh-2.1.1-linux-x64.tgz mongosh-2.1.1-linux-x64

RUN wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu2204-x86_64-100.9.4.tgz && \
    tar -zxvf mongodb-database-tools-ubuntu2204-x86_64-100.9.4.tgz && \
    cp -R mongodb-database-tools-ubuntu2204-x86_64-100.9.4/bin/* /usr/local/bin/ && \
    rm -rf mongodb-database-tools-ubuntu2204-x86_64-100.9.4.tgz mongodb-database-tools-ubuntu2204-x86_64-100.9.4

ENV SHELL=/bin/bash
WORKDIR /workspace
