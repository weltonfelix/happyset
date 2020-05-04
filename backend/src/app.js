import express from 'express';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
  }

  middlewares() {
    this.server.use((_req, res) => {
      res.send('Hello World');
    });
  }
}

export default new App().server;
