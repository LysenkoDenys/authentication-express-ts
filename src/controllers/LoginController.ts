import { NextFunction, Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  // req - request, res - response:
  getLogin(req: Request, res: Response): void {
    res.send(`
  <form method='POST'>
    <div>
      <label for='mail'>Email</label>
      <input name='email' id='pass'/>
    </div>
    <div>
      <label for='pass'>Password</label>
      <input name='password' type='password' id='pass'/>
    </div>
    <button>Submit</button>
  </form>
  `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'hi@hi.com' && password === 'password') {
      // mark this person as logged in
      req.session = { loggedIn: true };
      // redirect them to the root route
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    // req session
    if (req.session && req.session.loggedIn) {
      //reset session:
      req.session = undefined;
      res.redirect('/');
    }
  }
}
