#!/bin/bash
# Install NODE ASAP
# Type: "sudo n" To select the node Version that work for you.
# Source: https://www.npmjs.com/package/n
sudo npm cache clean -f
sudo npm install -g n@latest
sudo n latest  # Latest Features
sudo n 10.13.0 # 10.13.0 LTS [Dubnium] Recommended For Most Users
sudo n 8.12.0  # 8.12.0 LTS [Carbon]
sudo n 6.14.4  # 6.14.4 LTS [Boron]

if [[ ! -d "$NODE_PATH" ]]; then
    export NODE_PATH=/usr/local/lib/node_modules
    echo 'export NODE_PATH=/usr/local/lib/node_modules' >> ~/.bashrc
fi
