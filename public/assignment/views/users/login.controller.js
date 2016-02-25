/**
 * Created by VictorMonterroso on 2/23/16.
 */
"use strict";

(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController", loginController);

    function loginController(UserService, $scope, $rootScope) {
        $scope.login = login;

        function login (user) {
            var callbackFunction = function (updatedUser) {
                $scope.loggedUser = updatedUser;
            }

            UserService.updateUser(user._id, user, callbackFunction);
        }
    }
})();

