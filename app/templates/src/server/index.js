"use strict";
import express from "express";
import config from "../../config";
import path from "path";
import bodyParser from "body-parser";

const app = express();

import baseRoute from "./controllers/static";
import helloWorldRouter from "./controllers/api/helloworld";

app.use(baseRoute);
app.use(helloWorldRouter);

app.listen(config.PORT, function () {
	console.log("listening on PORT:", config.PORT);
});
