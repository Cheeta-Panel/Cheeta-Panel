#!/bin/bash

if [ "$EUID" -ne 0 ]
  then echo "This setup script needs to run as sudo"
  exit
fi
npm install express
npm install react
cd ~
wget https://api.github.com/repos/Cheeta-Panel/Cheeta-Panel/Releases/Panel Panel.zip
wget https://api.github.com/repos/Cheeta-Panel/Cheeta-Panel/Releases/Wings Wings.zip

sudo mkdir /etc/Cheeta-Panel 
sudo mkdir /etc/Cheeta-Panel/Panel
sudo mkdir /etc/Cheeta-Panel/Wings
sudo unzip Panel.zip /etc/Cheeta-Panel/Panel
sudo unzip Wings.zip /etc/Cheeta-Panel/Wings

echo 'Please follow the documentation on how to setup the user database'
exit
