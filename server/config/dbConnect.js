const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connection success");
  } catch (error) {
    console.log("DB connection failled");
    throw new Error(error);
  }
};

module.exports = dbConnect;
