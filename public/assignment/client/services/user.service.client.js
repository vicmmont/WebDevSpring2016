/**
 * Created by VictorMonterroso on 2/24/16.
 */
"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($rootScope, $http) {
        var model = {
            findUserByUsername: findUserByUsername,
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        }

        return model;

        function findUserByUsername(username) {
            return $http.get("/api/assignment/user?username=" + username);
        }

        function findUserByCredentials(username, password) {
            return $http.get("/api/assignment/user?username=" + username + "&password=" + password);
        }

        function findAllUsers() {
            return $http.get("/api/assignment/user");
        }

        function createUser(user) {
            user._id = (new Date).getTime();

            return $http.post("/api/assignment/user", user);
            //$rootScope.currentUser = user;
        }

        function deleteUserById(userId) {
            return $http.delete("/api/assignment/user/" + userId);
        }

        function updateUser(userId, user) {
            return $http.put("/api/assignment/user/" + userId, user);
        }
    }
})();