#!/usr/bin/env bash

# Capture Device ID
get_device_id() {
    read -r -p "What is your Device ID: " deviceId
    if [[ -z $deviceId ]]
        then
            printf "$(tput setaf 3)No Device ID supplied$(tput sgr0)\n"
            get_device_id
        fi
}

# Capture Access Token
get_access_token() {
    read -r -p "What is your Access Token: " accessToken
    if [[ -z $accessToken ]]
        then
            printf "$(tput setaf 3)No Access Token supplied$(tput sgr0)\n"
            get_access_token
        fi
}

# Add any additional var creation methods here
do_configs () {
    get_device_id
    get_access_token
}

# Write Vars to File
# Add any additionally created vars here
# > overwrites all data in existing file
# >> appends data to existing file
write_vars_to_file() {
    echo "PARTICLE_DEVICE_ID=$deviceId" > "bin/.particlerc"
    echo "PARTICLE_ACCESS_TOKEN=$accessToken" >> "bin/.particlerc"
}


do_success () {
    printf "$(tput setaf 2)SUCCESS: bin/.particlerc has been created.$(tput sgr0)\n\n\n"
    exit 0
}


do_init () {
    printf "\n\n\n$(tput setaf 6)Configuring .particlerc file.$(tput sgr0)\n$(tput setaf 5)npm run particle_config_env$(tput sgr0) $(tput setaf 6)anytime you need to update.$(tput sgr0)\n\n"
    do_configs
    write_vars_to_file
    do_success
}

do_init
