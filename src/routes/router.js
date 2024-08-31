import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello, welcome to the Express.js application!");
});

export default router;
