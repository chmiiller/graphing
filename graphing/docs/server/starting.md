---
title: Starting the server
---

This page will help you on how to run the backend of this repo

## Requirements

You will need to have NodeJS on your machine and an account and cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). With that setup, `cd` to `graphing/server` and run:
```
npm install
```

for this project I'm running the NodeJS server with [nodemon](https://github.com/remy/nodemon). To do so you can type:
```
nodemon app
```

The only thing last is to add the URL of your MongoDB Atlas cluster to mongoose.connect on `app.js`. Mine looks something like this:
```
'mongodb+srv://USER_NAME:USER_PASS@cluster0.xyz.mongodb.net/'
```
So you're ready to go and the server is listening for requests on port `4000`
