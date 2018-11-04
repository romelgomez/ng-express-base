#!/bin/bash
# Install NODE ASAP
sudo npm cache clean -f
sudo npm install -g n
sudo n stable

if [[ ! -d "$NODE_PATH" ]]; then 
    export NODE_PATH=/usr/local/lib/node_modules
    echo 'export NODE_PATH=/usr/local/lib/node_modules' >> ~/.bashrc
fi
