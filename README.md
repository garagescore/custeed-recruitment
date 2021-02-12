# Custeed technical test

## Code architecture

This project is split in 3 main folders

- client : A simple Vue.Js app that will display the requested output
- server : A simple server built around ExpressJs and Apollo GraphQL, to perform the queries
- scripts : Some useful scripts

## Getting started

#### Prerequisites

1 - NodeJs
We'd preferably use the LTS version (12.19.0) which can be found here: https://nodejs.org/en/
2 - MongoDB Community server
In order to store the data provided by the API I am using MongoDB which can be found here: https://www.mongodb.com/try/download/community

#### Building the server

1 - Copy env-example into .env
`cp env-example .env`
If you are running a local MongoDB server this file is just fine
However if you'd like to use a remote server please change the value of `MONGODB_URI` accordingly

2 - Make build.sh script executable
`chmod +x ./build.sh`

3 - Launch build.sh to install the dependencies and populate the database
`./build.sh --build-db`

4 - Launch the server
`cd server && npm run serve`

5 - Launch the client
`cd client && npm run serve`

## Scripts

- database-builder.js : This script puts data into a mongoDB database.

## Client

// Coming soon

## Server

The server is a simple Apollo GraphQL server which exposes the queries we would be making to answer the assignments
