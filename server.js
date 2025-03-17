import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.json({ data: "This is stateless server" });
  } catch (error) {
    res.json({ message: "Something went wrong" });
  }
});

app.get("/hello", (req, res) => {
  try {
    res.json({ data: "Hello serverless using express done" });
  } catch (error) {
    res.json({ message: "Something went wrong" });
  }
});

export default (req, res) => {
  app(req, res);
};
