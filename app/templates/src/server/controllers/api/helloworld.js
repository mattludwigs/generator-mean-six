"use strict";
import express from "express";

const helloWorldRouter = express.Router();

helloWorldRouter.get("/api/helloworld", function (req, res, next) {
	res.json([
		{
			"name": "Hello World",
			"summery": "this means it worked!"
		}
	]);
});

export default helloWorldRouter;
