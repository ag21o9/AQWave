const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const data = require("./db");

db = mongoose.connect("mongodb://localhost:27017/aqwave");

//import path from 'path'

const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/info/:slug", (req, res) => {
  // res.sendFile(path.join(__dirname,"/index.html"))
  console.log(req.params.slug);
  res.send(req.params.slug.split(""));
});

app.get("/coming", (req, res) => {
  // res.sendFile(path.join(__dirname,"/index.html"))
  res.send("Comming Soon");
});
app.get("/signup", (req, res) => {
  // res.sendFile(path.join(__dirname,"/index.html"))
  res.sendFile(path.join(__dirname, "/signup.html"));
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
  } catch(e) {
    console.log(e)
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
