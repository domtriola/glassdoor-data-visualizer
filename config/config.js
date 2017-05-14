let GD_ID;
let GD_KEY;

if (process.env.NODE_ENV === "production") {
  GD_ID = process.env.GD_ID;
  GD_KEY = process.env.GD_KEY;
} else {
  const creds = require('./dev.secret.js');
  GD_ID = creds.GD_ID;
  GD_KEY = creds.GD_KEY;
}

module.exports = {
  GD_ID: GD_ID,
  GD_KEY: GD_KEY
};
