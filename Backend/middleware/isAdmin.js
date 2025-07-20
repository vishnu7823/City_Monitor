const User = require('../models/user');

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
    next();
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = isAdmin;
