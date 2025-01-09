const express = require("express");

const userRouter = express.Router();

userRouter.get("/user", user.controller);
userRouter.post("/user", user.controller);
userRouter.patch("/user/:id", user.controller);
userRouter.delete("/user/:id", user.controller);

module.exports = userRouter;
