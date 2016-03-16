/**
 * Created by VictorMonterroso on 2/23/16.
 */
"use strict";

(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", profileController);

    function profileController(UserService, $scope, $rootScope) {
        $scope.update = update;
        $scope.loggedUser = $rootScope.currentUser;

        function update (user) {
            UserService
                .updateUser(userId, user)
                .then(function(response) {
                    if (response.data) {
                        $rootScope.currentUser = response.data;
                    }
                });
        }
    }
})();

