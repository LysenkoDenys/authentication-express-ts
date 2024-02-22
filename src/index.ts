import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router as controllerRouter } from './controllers/decorators/controller';
import './controllers/LoginController';

// initialize our application:
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['any string'] }));
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
  console.log('listening on port 3000'); //
});

// // Example
// class Server {
//   app: express.Express = express();

//   constructor() {
//     this.app.use(bodyParser.urlencoded({ extended: true }));
//     this.app.use(cookieSession({ keys: ['any string'] }));
//     this.app.use(router);
//   }
//   start(): void {
//     this.app.listen(3000, () => {
//       console.log('listening on port 3000'); //
//     });
//   }
// }

// new Server().start();
