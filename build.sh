#!/bin/bash
# This script builds the client, and the server and start them
# When the option --build-db is specified it will also populate a MongoDB database whose address is specified in the .env file

build_and_start_client() {
  echo "Building and starting client"
  cd client
  npm install
  npm run build
  cd ..
  echo "Successfully built client"
  echo
  echo
}

build_and_start_server() {
  echo "Building and starting server"
  cd server
  npm install
  cd ..
  echo "Successfully built server"
  echo
  echo
}

populate_db() {
  echo "Populating database"
  cd scripts
  npm install
  node scripts/database-builder.js
  if [[ $? == 0 ]]; then
    echo "Successfully populated the database"
  else
    echo "Something went wrong while populating the database"
  fi
  cd ..
}

echo "Starting Custeed Recruitment Challenge project"

if [[ $1 == "--build-db" ]]; then
  echo "--build-db argument specified, will populate the database before continuing"
  populate_db
  echo
  echo
fi


build_server
build_client
