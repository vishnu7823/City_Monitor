// const express = require('express');
// const router = express.Router();

// // HARD-CODED admin credentials
// const ADMIN_CREDENTIALS = {
//   username: 'admin',
//   password: 'admin123',
// };

// router.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
//     return res.json({ message: 'Admin login successful' });
//   } else {
//     return res.status(401).json({ message: 'Invalid admin credentials' });
//   }
// });

// module.exports = router;
