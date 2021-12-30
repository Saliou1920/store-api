require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.insertMany(jsonProducts);
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};

start();
