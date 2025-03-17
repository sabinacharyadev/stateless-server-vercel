import express from "express";
import fruitsRouter from "./router/fruitsRouter.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.json({ data: "This is stateless server . Try /fruits" });
  } catch (error) {
    res.json({ message: "Something went wrong" });
  }
});

app.use("/fruits", fruitsRouter);

export default (req, res) => {
  app(req, res);
};
