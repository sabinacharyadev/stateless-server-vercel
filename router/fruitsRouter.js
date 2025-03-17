import express from "express";

const fruitsRouter = express.Router();

// GET | INDEX
// Build an endpoint that returns array of fruits
fruitsRouter.get("/", (req, res) => {
  const fruits = ["apple", "banana", "cherry"];
  res.json({ fruits: fruits });
});

export default fruitsRouter;
