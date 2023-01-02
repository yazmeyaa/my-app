#!/bin/bash
pm2 stop "yazmeyaa_website"
git pull >> output.txt
npm install >> output.txt
npm run build >> output.txt
rm -r node_modules
pm2 start "yazmeyaa_website"