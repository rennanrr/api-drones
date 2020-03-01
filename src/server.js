/*var http = require('http'),
    app = require('./config/express'),
    config = require('./config/config.js');

http.createServer(app).listen(config.apiPort, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
}); */

//const express = require('express');
import express from 'express';
import config from './config/config';
import expressConfig from './config/express';
import routesConfig from './config/routes';
import db from './config/db_connection';

class Server {
  constructor() {
    this.app = express();
    this.config = config;

    this.init();
  }

  init() {
    expressConfig(this.app);

    db
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');

        routesConfig(this.app);

        this.app.listen(this.config.apiPort, () => {
          console.log(`Server listening on port ${this.config.apiPort}`);
        });
      })
      .catch(err => {
        console.error('Unable to connect to the database: ', err);
      });
  }
}

export default new Server().app;

