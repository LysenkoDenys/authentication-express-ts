import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

// initialize our application:
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['any string'] }));
app.use(router);

app.listen(3000, () => {
  console.log('listening on port 3000'); //
});
