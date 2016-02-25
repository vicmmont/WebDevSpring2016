/**
 * Created by VictorMonterroso on 2/23/16.
 */
"use strict";

(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", registerController);

    function registerController($location, UserService, $scope) {
        $scope.register = register;

        function register (user) {
            var callbackFunction = function (registeredUser) {
                user = registeredUser;
                $location.url("/profile");
            }

            UserService.createUser(user, callbackFunction);
        }
    }
})();