/**
 * Created by VictorMonterroso on 2/24/16.
 */
"use strict";

(function(){
    angular
        .module("VictorStoreApp")
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when("/users", {
                templateUrl: "users.html",
                controller: "UserController"
            })
            .when("/clothes", {
                templateUrl: "clothes.html",
                controller: "ClothesController"
            })
            .otherwise({
                redirectTo: "/users"
            });
    }
})();