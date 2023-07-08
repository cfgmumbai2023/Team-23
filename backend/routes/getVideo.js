var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
// const connectDB = require("../dbConnect");
router.use(express.json());

mongoose.connect("mongodb+srv://cfg1:XHZefcwjgNF0CKRK@cluster0.d6uhqlp.mongodb.net/?retryWrites=true&w=majority");

const usetube = require('usetube')

router.get("/", async function (req, res, next) {
    try {
        const data = await usetube.getChannelVideos('12th std videos for biology');
        const url1 = "https://www.youtube.com/watch?v=";
        for(let i=0; i<10; i++)
        {
            const url2 = data[i].id;
            const finalUrl = url1+url2;
        }
        
      res.status(200).json(data);
    } catch (e) {
      res.status(422).json(e);
    }
  });

  module.exports = router;