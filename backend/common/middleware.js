var jwt = require("jsonwebtoken");
const jwtSecret = "ghdsjvbiuy43870yoh22#$hoihnAkpvbjhTN)3&_N";

//check login
function checkLogin(req, res, next) {
  //check header
  console.log("TOKEN is", req.cookies.nToken);
  let token = req.cookies.nToken;

  //verify the token
  jwt.verify(token, jwtSecret, function (err, decoded) {
    if (err) {
      console.log("ERROR is:", err.message);
      return res
        .status(401)
        .send({ message: "You are logged out. Please login again." });
    }
    console.log("decoded data with customerID", decoded.isAvailable);
    req.body.userData = decoded.isAvailable;
    console.log("Request Body is", req.body);
    next();
  });
}
module.exports = { checkLogin };
