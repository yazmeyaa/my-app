#!/bin/bash
pm2 stop "yazmeyaa_website"
npm cache clear --force
git pull
npm install
npm run build
rm -r node_modules
pm2 reload "yazmeyaa_website"