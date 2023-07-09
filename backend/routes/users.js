var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
// require("dotenv").config();
// const connectDB = require("../dbConnect");
router.use(express.json());

/* GET users listing. */

//  mongoose.connect(process.env.MONGO_URL)
//  .then(() => {
//   console.log("Connected to mongodb")
//   app.listen(4000, () => {
//     console.log("Node api")
//   }).catch((error) =>{
//     console.log(error);
//   })
//  });
 


router.post("/", async function (req, res, next) {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create(req.body);
    res.status(200).json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const {id} = req.params;
    const userDoc = await User.findById(id );
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

module.exports = router;
