import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

//create new middleware:
function requireAuth(req: Request, res: Response, next) {}

// initialize our router:
const router = Router();

// req - request, res - response:
router.get('/login', (req: Request, res: Response) => {
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
});

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

export { router };
