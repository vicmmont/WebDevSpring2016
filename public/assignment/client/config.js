/**
 * Created by VictorMonterroso on 2/24/16.
 */
"use strict";

(function(){
    angular
        .module("FormBuilderApp")
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when("/forms", {
                templateUrl: "views/forms/forms.view.html",
                controller: "FormController"
            })
            .when("/home", {
                templateUrl: "views/home/home.view.html",
                controller: "MainController"
            })
            .when("/register", {
                templateUrl: "views/users/register.view.html",
                controller: "RegisterController"
            })
            .when("/login", {
                templateUrl: "views/users/login.view.html",
                controller: "LoginController"
            })
            .when("/profile", {
                templateUrl: "views/users/profile.view.html",
                controller: "ProfileController"
            })
            .when("/admin", {
                templateUrl: "views/admin/admin.view.html",
                controller: "AdminController"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();