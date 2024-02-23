import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

// initialize our router:
const router = Router();

export { router };

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
