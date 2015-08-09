"use strict";
import express from "express";
import config from "../../../config";

const baseRoute = express.Router();

baseRoute.use(express.static(config.STATIC));

baseRoute.get("/", function (req, res, next) {
	res.sendFile(config.STATIC + "/index.html");
});

export default baseRoute;
