// const express = require("express");
import express from "express";
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello World update");
});
app.get("/tamvuit", (req, res) => {
  res.send("Hello vu");
});

app.listen(8080, () => {
  console.log(`My App is running on port : ${PORT}`);
});
