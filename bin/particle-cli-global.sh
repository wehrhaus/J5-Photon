#!/usr/bin/env bash

printf "\n\n\n$(tput setaf 6)$0 is attempting to install the node module particle-cli globally.$(tput sgr0)\n"
read -r -p "Would you like to continue? [Y/n] " response

if [[ $response =~ ^([yY][eE][sS]|[yY])$ ]]
    then
        npm i -g particle-cli

        exit 0
    else
        printf "$(tput setaf 3)To use the particle cli you will need to install manually by running: npm i -g particle-cli.$(tput sgr0)"

        exit 0
    fi
