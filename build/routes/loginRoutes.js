"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
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
const router = (0, express_1.Router)();
exports.router = router;
// req - request, res - response:
router.get('/login', (req, res) => {
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
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        // mark this person as logged in
        req.session = { loggedIn: true };
        // redirect them to the root route
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', (req, res) => {
    // req session
    if (req.session && req.session.loggedIn) {
        res.send(`
      <div>You are logged in</div>
      <a href='/logout'>Logout</a>
    `);
    }
    else {
        res.send(`
    <div>You are NOT logged in</div>
    <a href='/login'>Login</a>
  `);
    }
});
router.get('/logout', (req, res) => {
    // req session
    if (req.session && req.session.loggedIn) {
        //reset session:
        req.session = undefined;
        res.redirect('/');
    }
});
router.get('/protected', requireAuth, (req, res) => {
    res.send(`<h1>Welcome to protected route, logged in user</h1>`);
});
