"use strict";

const baseController = {

	name: "BaseController",

	controller ($scope, $http) {

		$http.get("/api/helloworld")
			.then(function (res) {
				console.log(res);
			});
	}

}

export default baseController;
