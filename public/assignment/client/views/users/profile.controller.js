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
            console.log("updating user" + user._id + user.email);
            UserService
                .updateUser(user._id, user)
                .then(function() {
                    return UserService.findUserByCredentials(user.username, user.password);
                })
                .then(function(response){
                    if (response.data){
                        $rootScope.currentUser = response.data;
                        console.log("hooray!");
                    }
                });


                /*.then(function(response) {
                    if (response.data) {
                        $rootScope.currentUser = response.data;
                        console.log("updated user!");
                    } else {
                        console.log("no data");
                    }
                });*/
        }
    }
})();

