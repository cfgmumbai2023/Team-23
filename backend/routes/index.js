var express = require('express');
var router = express.Router();

// var connectDB = require("../dbConnect") 

/* GET home page. */

const connectDB = async () => {
  try {
    // Replace 'mongodb://localhost/phone_auth' with your MongoDB connection string
    await mongoose.connect(process.environ.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with a failure code
  }
};


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
