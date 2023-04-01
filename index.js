const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const data = require("./db");
const data2 = require("./db");

console.log("connected");

// db = mongoose.connect("mongodb://localhost:27017/aqwave");
// db = mongoose.connect("mongodb://localhost:27017/aqwave"); important

// dotenv.config({path:'./config.env'})

// var db = process.env.DATABASE

db = mongoose.connect(
  "mongodb+srv://Abhijeet2109:abhijeet21o9@cluster0.ohwhhle.mongodb.net/?retryWrites=true&w=majority"
);
//import path from 'path'
db.then(() => {
  console.log("successfully connected to database");
}).catch((err) => {
  console.log("connection fail to the database");
});

const port = 3000;

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log("i am here");
  res.sendFile(path.join(__dirname, "/index3.html"));
});
app.use(express.static(path.join(__dirname, "")));

app.get("/coming", (req, res) => {
  // res.sendFile(path.join(__dirname,"/index.html"))
  res.send("Comming Soon");
});
app.get("/signup", (req, res) => {
  // res.sendFile(path.join(__dirname,"/index.html"))
  res.sendFile(path.join(__dirname, "/signup.html"));
});

app.use("/contact", async (req, res) => {
  try {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var ename = req.body.email;
    var mname = req.body.mobile;
    var dname = req.body.desc;

    const d2 = new data2({
      firstname: fname,
      lastname: lname,
      email: ename,
      mobile: mname,
      desc: dname,
    });

    let p = await d2.save();
    res.sendFile(path.join(__dirname, "/index2.html"));
    // console.log(req.body.fname)
    console.log("success");
  } catch (e) {
    console.log(e);
  }
});

app.post("/signup", async (req, res) => {
  // console.log(req.body.name)
  try {
    const d = new data({
      firstname: req.body.name,
      lastname: req.body.name2,
    });

    const k = await d.save();
    res.status(201).sendFile(path.join(__dirname, "/index2.html"));
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.get("/info/:slug", (req, res) => {
//   // res.sendFile(path.join(__dirname,"/index.html"))
//   console.log(req.params.slug);
//   res.send(req.params.slug.split(""));
// });
