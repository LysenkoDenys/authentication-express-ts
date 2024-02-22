import { Router, Request, Response, NextFunction } from 'express';
import { get } from './decorators/routes';
import { controller } from './decorators/controller';

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
}
