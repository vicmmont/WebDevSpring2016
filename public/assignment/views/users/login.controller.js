/**
 * Created by VictorMonterroso on 2/23/16.
 */
"use strict";

(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController", loginController);

    function loginController(UserService, $scope, $rootScope, $location) {
        $scope.login = login;
        $scope.user = {};

        function login (user) {
            var callbackFunction = function (updatedUser) {
                $rootScope.currentUser = updatedUser;
            }

            UserService.findUserByCredentials(user.username, user.password, callbackFunction)
            $location.url("/profile");
        }
    }
})();

