"use strict";
var express_1 = require('express');
var someRoute = express_1.Router();
exports.someRoute = someRoute;
someRoute.get('/', function (req, res, next) {
    res.send('respond with a from some route');
});
//# sourceMappingURL=some-route.js.map