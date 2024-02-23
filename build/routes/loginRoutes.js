"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
//create new middleware:
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
// initialize our router:
var router = (0, express_1.Router)();
exports.router = router;
router.get('/', function (req, res) {
    // req session
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>You are logged in</div>\n      <a href='/logout'>Logout</a>\n    ");
    }
    else {
        res.send("\n    <div>You are NOT logged in</div>\n    <a href='/login'>Login</a>\n  ");
    }
});
router.get('/logout', function (req, res) {
    // req session
    if (req.session && req.session.loggedIn) {
        //reset session:
        req.session = undefined;
        res.redirect('/');
    }
});
router.get('/protected', requireAuth, function (req, res) {
    res.send("<h1>Welcome to protected route, logged in user</h1>");
});
// // EXAMPLE:
// @controller('/auth')
// class LoginController {
//   @get('/login')
//   getLogin(req: Request, res: Response): void {
//     res.send('form');
//   }
//   @get('/login')
//   @validateBody('email', 'password')
//   @use(requireAuth)
//   postLogin  getLogin(req: Request, res: Response): void {
//     const { email, password } = req.body;
//     if (email && password && email === 'hi@hi.com' && password === 'password') {
//       req.session = { loggedIn: true };
//       res.redirect('/');
//     } else {
//       res.send('Invalid email or password');
//     }
//   }
// }
// //decorator factory:
// function post(routeName:string) {
//   return function (target:any, key:string, desc:PropertyDescriptor) {
//     router.post(routeName, target[key])
//   }
// }
// //decorator factory:
// function ude(middleware:any) {
//   return function (target:any, key:string, desc:PropertyDescriptor) {
//     router.addMiddlewareToHandlerWeJustRegistered(middleware)
//   }
// }
