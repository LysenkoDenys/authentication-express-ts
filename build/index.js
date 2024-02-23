"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import { router } from './routes/loginRoutes';
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
require("./controllers/RouteController");
// initialize our application:
var app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ['any string'] }));
// app.use(router);
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function () {
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
