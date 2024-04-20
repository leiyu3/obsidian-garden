#!/bin/sh
USER=root
HOST=leiyu.ca
DIR=/var/www/leiyu

npx quartz build
rsync -avz --delete public/ ${USER}@${HOST}:${DIR}

exit 0
