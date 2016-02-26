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
        $scope.user = {};

        function register (newUser) {
            var callbackFunction = function (registeredUser) {
                $scope.user = registeredUser;
            }

            UserService.createUser(newUser, callbackFunction);

            $location.url("/profile");
        }
    }
})();