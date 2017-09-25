let _ = require("lodash");
let defaults = require("./default.js");
let config = require("./" + (process.env.NODE_ENV || "dev") + ".js");
module.exports = _.merge({}, defaults, config);