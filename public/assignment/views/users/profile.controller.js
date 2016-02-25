/**
 * Created by VictorMonterroso on 2/23/16.
 */
"use strict";

(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", profileController);

    function profileController(UserService, $scope, $rootScope) {

        var loggedUser = $rootScope.currentUser;
        $scope.loggedUser = loggedUser;

        function update (user) {
            var callbackFunction = function (updatedUser) {
                $scope.loggedUser = updatedUser;
            }

            UserService.findUserByCredentials(username, password, callback);
        }
    }
})();

