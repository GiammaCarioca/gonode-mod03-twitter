const app = require('express')();
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const dbConfig = require('./config/database');

mongoose.connect(dbConfig.url);
requireDir(dbConfig.modelsPath);

const User = mongoose.model('User');
User.create(
  {
    name: 'Diego',
    username: 'diego3g',
    email: 'diego@rocketseat.com.br',
    password: '123456',
  },
  () => {
    console.log('Ok!');
  },
);

app.listen(3000);
