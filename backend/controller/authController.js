const formidable = require("formidable");
const validator = require("validator");

module.exports.userRegister = (req, res) => {
  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    const { userName, email, password, confirmPassword } = fields;
    const { image } = files;
    const error = [];

    if (!userName) {
      error.push("Please provide your user name");
    }
    if (!email) {
      error.push("Please provide your email");
    }
    if (email && !validator.isEmail(email)) {
      error.push("Please provide a valid email");
    }
    if (!password) {
      error.push("Please provide your password");
    }
    if (!confirmPassword) {
      error.push("Please confirm your password");
    }
    if (password && confirmPassword && password !== confirmPassword) {
      error.push("Passwords do not match");
    }
    if (password && password.length < 6) {
      error.push("Password must be at least 6 characters");
    }
    if (Object.keys(files).length === 0) {
      error.push("Please provide a profile image");
    }
    if (error.length > 0) {
      res.status(400).json({
        error: {
          errorMessage: error,
        },
      });
    } else {
      const getImageName = files.image.originalFilename;
      console.log(getImageName);
    }
  });
};
