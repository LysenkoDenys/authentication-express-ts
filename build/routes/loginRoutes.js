"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
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
    res.send(email.toUpperCase());
});
