"use strict";
import baseController from "./controllers/base-controller";

const app = angular.module("MyApp", []);

app.controller(baseController.name, baseController.controller);

export default app;
