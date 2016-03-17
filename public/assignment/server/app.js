/**
 * Created by VictorMonterroso on 3/14/16.
 */
module.exports = function (app) {
    var userModel = require("./models/user.model.js")();
    var formModel = require("./models/form.model.js")();

    var movieService = require("./services/user.service.server.js")(app, userModel);
    var formService = require("./services/form.service.server.js")(app, formModel);
    var fieldService = require("./services/field.service.server.js")(app, formModel);
};