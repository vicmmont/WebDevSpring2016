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
                templateUrl: "assignment/views/forms/forms.view.html",
                controller: "FormController"
            })
            .when("/home", {
                templateUrl: "assignment/views/home/home.view.html",
                controller: "MainController"
            })
            .when("/register", {
                templateUrl: "assignment/views/users/register.view.html",
                controller: "RegisterController"
            })
            .when("/login", {
                templateUrl: "assignment/views/users/login.view.html",
                controller: "LoginController"
            })
            .when("/profile", {
                templateUrl: "assignment/views/users/profile.view.html",
                controller: "ProfileController"
            })
            .when("/admin", {
                templateUrl: "assignment/views/admin/admin.view.html",
                controller: "AdminController"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();