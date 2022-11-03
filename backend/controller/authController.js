const formidable = require("formidable");

module.exports.userRegister = (req, res) => {
  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    console.log(fields);
  });

  console.log("register working");
};
