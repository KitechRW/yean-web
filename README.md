# Getting Started with YeanAgro

# How to Run

Clone the project and launch your command line interface in the project root folder. Execute the following commands based on your environment.

## yarn installed

`yarn install`

## Setup environment

Copy `.env_example` file and rename to `.env`
Assign host url to `DEFAULT_API` and `HOST` ex: `https://yeanagro.org` in production and `http://localhost:[PORT]` in development.
Fill other keys with appropriate values.

## Setup database

Create database according to the `DATABASE_URL` value, you can run `yarn db:create` to create database.
Import `yeandb.sql`, you can find the file into the project root folder.

## Add static files
Add images and books into the `public/uploads` folder

## Start Application

`yarn start`

You can press `Ctrl + c` to stop application.

