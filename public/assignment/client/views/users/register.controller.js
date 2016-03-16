/**
 * Created by VictorMonterroso on 2/23/16.
 */
"use strict";

(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", registerController);

    function registerController($location, UserService, $scope, $rootScope) {
        $scope.register = register;
        $scope.user = {};

        function register (newUser) {
                //$scope.user = registeredUser;
            UserService
                .createUser(newUser)
                .then(function(response) {
                    if(response.data) {
                        $scope.user = registeredUser;
                        $rootScope.currentUser = user;
                        $location.url("/profile");
                    }
                });
        }
    }
})();