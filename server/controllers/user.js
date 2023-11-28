const User = require("../model/user");
const asynHandler = require("express-async-handler");

const register = asynHandler(async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  if (!email || !password || !firstName || !lastName)
    return res.status(400).json({
      success: false,
      message: "Missing inputs",
    });

  const response = await User.create(req.body);
  return res.status(200).json({
    success: response ? true : false,
    response,
  });
});

module.exports = {
  register,
};
