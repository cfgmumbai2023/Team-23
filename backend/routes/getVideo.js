var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const cors = require("cors");

// const connectDB = require("../dbConnect");
router.use(express.json());

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

mongoose.connect(
  "mongodb+srv://cfg1:XHZefcwjgNF0CKRK@cluster0.d6uhqlp.mongodb.net/?retryWrites=true&w=majority"
);

const usetube = require("usetube");

router.post("/", async function (req, res, next) {
  const { searchInput } = req.body;
  try {
    console.log(searchInput)
    const data = await usetube.getChannelVideos(searchInput);
    const url1 = "https://www.youtube.com/watch?v=";
    for (let i = 0; i < 10; i++) {
      const url2 = data[i].id;
      const finalUrl = url1 + url2;
      console.log(finalUrl);
    }
    res.status(200).json(data);
  } catch (e) {
    res.status(422).json(e);
  }
});

// console.log(searchInput);

module.exports = router;
