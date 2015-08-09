"use strict";

var yeoman = require("yeoman-generator");

var MeanSix = yeoman.generators.Base.extend({

	promptUser: function () {

		var done = this.async();
		console.log(this.yeoman);

		done();

	},

	scaffoldFolders: function () {
		
		var clientFolders = [
			"/css",
			"/css/common",
			"/css/mdoules",
			"/js",
			"/js/controllers"
		];

		var serverFolders = [
			"/controllers",
			"/controllers/api"
		];

		var clientFolderLen = clientFolders.length - 1,
				serverFoldersLen = serverFolders.length -1;

		while (clientFolderLen--) {
			this.mkdir("src/client" + clientFolders[clientFolderLen]);
		};

		while (serverFoldersLen--) {
			this.mkdir("src/server" + serverFolders[serverFoldersLen]);
		}

	},

	copyMainFiles: function () {
		this.copy("gulpfile.js", "gulpfile.js");
		this.copy("package.json", "package.json");
		this.copy("config.js", "config.js");

		this.copy("src/client/css/all.scss", "src/client/css/all.scss");
		this.copy("src/client/css/common/_vars.scss", "src/client/css/common/_vars.scss");
		this.copy("src/client/css/common/_extend.scss", "src/client/css/common/_extend.scss");
		this.copy("src/client/css/common/_base.scss", "src/client/css/common/_base.scss");

		this.copy("src/client/js/app.js", "src/client/js/app.js");
		this.copy("src/client/js/controllers/base-controller.js", "src/client/js/controllers/base-controller.js");

		this.copy("src/client/index.html", "src/client/index.html");

		this.copy("src/server/index.js", "src/server/index.js");
		this.copy("src/server/controllers/static.js", "src/server/controllers/static.js");
		this.copy("src/server/controllers/api/helloworld.js", "src/server/controllers/api/helloworld.js");
	},

	end: function () {
		this.installDependencies({
			bower: false,
      npm: true
    });
	}

});

module.exports = MeanSix;

