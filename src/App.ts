import * as express from 'express';
import * as winston from 'winston';
class App {
  public express;
  private localWebStore = __dirname;
  constructor () {
    this.express = express();
    this.mountRoutes();
    winston.log('info', `Base directory: ${this.localWebStore}`);
  }

  private mountRoutes (): void {
    const router = express.Router();
    this.express.use(express.static(this.localWebStore));
    router.get('/', (req, res) => {
      res.sendFile(this.localWebStore + '/static/'+ 'index.html');
    });
    this.express.use('/', router);
  }
}

export default new App().express;
