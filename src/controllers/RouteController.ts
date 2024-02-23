import { Router, Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

//create new middleware:
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Not permitted');
}

@controller('') // to avoid end of the route '//' we should leave empty string ('')
class RouteController {
  @get('/')
  getRoot(req: Request, res: Response) {
    // req session
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>You are logged in</div>
        <a href='/auth/logout'>Logout</a>
      `);
    } else {
      res.send(`
      <div>You are NOT logged in</div>
      <a href='/auth/login'>Login</a>
    `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send(`<h1>Welcome to protected route, logged in user</h1>`);
  }
}
