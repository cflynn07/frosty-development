FROM mysql/mysql-server:latest
COPY 1-frosty-schema.sql /docker-entrypoint-initdb.d/1-frosty-schema.sql
COPY 2-frosty-data.sql /docker-entrypoint-initdb.d/2-frosty-data.sql
COPY config.sql /docker-entrypoint-initdb.d/config.sql
