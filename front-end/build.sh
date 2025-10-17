#!/bin/bash

sudo rm -rf /var/www/dashboard && sudo mkdir /var/www/dashboard && npm run build && sudo cp -r ~/dashboard/front-end/build/* /var/www/dashboard
