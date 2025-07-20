const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // Allow only 100 requests per minute per IP
  message: "Too many requests, please try again later.",
});

module.exports = limiter;
