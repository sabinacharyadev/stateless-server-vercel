import express from "express";

const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.json("Hello serverless using express");
});

export default (req, res) => {
  app(req, res);
};
