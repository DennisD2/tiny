import * as winston from 'winston';
import app from './App';

const port = 8080; // 3000;

const me = app.listen(port, (err) => {
  if (err) {
    return winston.log('error', err);
  }
  return winston.log('info', `Server is listening on port ${port}.`);
});
