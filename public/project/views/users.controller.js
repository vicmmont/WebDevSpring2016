/**
 * Created by VictorMonterroso on 3/4/16.
 */
"use strict";

(function() {
    angular
        .module("VictorStoreApp")
        .controller("UserController", UserController);

    function UserController(UserService, $scope, $location) {
        $scope.$location = $location;
        $scope.addClothes = addClothes;
        $scope.updateClothes = updateClothes;
        $scope.deleteClothes = deleteClothes;
        $scope.selectClothes = selectClothes;

        $scope.user = {};
        //Retrieve users from UserService
        function retrieveUsers () {
            UserService.findAllUsers(function (returnedUsers) {
                $scope.users = returnedUsers;
            });
        }
        retrieveUsers();

        function addClothes(user) {
            var callbackFunction = function(newUser) {
                retrieveUsers();
                $scope.user = {};
            };

            UserService.createUser(user, callbackFunction);
        }

        function selectClothes(index) {
            $scope.user = {
                "_id" : $scope.users[index]._id,
                "firstName" : $scope.users[index].firstName,
                "lastName" : $scope.users[index].lastName,
                "email" : $scope.users[index].email,
                "password" : $scope.users[index].password,
                "address" : $scope.users[index].address,
                "city" : $scope.users[index].city,
                "state" : $scope.users[index].state,
                "country" : $scope.users[index].country
            }
        }

        function updateClothes(user) {
            UserService.updateClothes(user._id, user, function(updatedUser) {
                for (var index in $scope.users) {
                    if ($scope.users[index]._id === user._id) {
                        $scope.users[index] = updatedUser;
                    }
                }

                $scope.user = {};
            });
        }

        function deleteClothes(index) {
            var user = $scope.users[index];

            UserService.deleteUserById(user._id, function(remainingUsers) {
                retrieveUsers();
                $scope.user = {};
            });
        }
    }
})();
