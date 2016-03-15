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
            var callbackFunction = function (updatedUser) {
                $rootScope.currentUser = updatedUser;
            }

            UserService.updateClothes(user._id, user, callbackFunction);
        }
    }
})();

