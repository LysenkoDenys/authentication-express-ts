import { Router, Request, Response } from 'express';

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

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.send(email.toUpperCase());
});

export { router };
