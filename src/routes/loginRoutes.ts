import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

//create new middleware:
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Not permitted');
}

// initialize our router:
const router = Router();

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'hi@hi.com' && password === 'password') {
    // mark this person as logged in
    req.session = { loggedIn: true };
    // redirect them to the root route
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  // req session
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>You are logged in</div>
      <a href='/logout'>Logout</a>
    `);
  } else {
    res.send(`
    <div>You are NOT logged in</div>
    <a href='/login'>Login</a>
  `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  // req session
  if (req.session && req.session.loggedIn) {
    //reset session:
    req.session = undefined;
    res.redirect('/');
  }
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send(`<h1>Welcome to protected route, logged in user</h1>`);
});
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
