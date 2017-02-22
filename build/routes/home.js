"use strict";
var express_1 = require('express');
var home = express_1.Router();
/* GET home page. */
home.get('/', function (req, res, next) {
    res.render('index', { title: 'Visual Studio Code!' });
});
/* GET Quick Start. */
home.get('/quickstart', function (req, res, next) {
    res.render('quickstart');
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = home;
//# sourceMappingURL=home.js.map