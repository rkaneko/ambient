ambient
===

A light weblog kit.

### Development

- Prerequisistes

```bash
$ alias | grep fig
fig=docker-compose

$ fig --version
docker-compose version 1.17.0
```

- run develop server

```bash
# install dependencies
$ ./npm.sh i

# watch src files and build
$ ./npm.sh run watch:build

# run nginx
$ fig -f tools/docker/docker-compose.yml up --force-recreate nginx
```
