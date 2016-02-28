/**
 * Created by VictorMonterroso on 2/24/16.
 */
"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($rootScope) {
        var model = {
            users: [
                {   "_id":123,
                    "firstName":"Alice",
                    "lastName":"Wonderland",
                    "username":"alice",
                    "password":"alice",
                    "roles": ["student"]
                },
                {   "_id":234,
                    "firstName":"Bob",
                    "lastName":"Hope",
                    "username":"bob",
                    "password":"bob",
                    "roles": ["admin"]
                },
                {   "_id":345,
                    "firstName":"Charlie",
                    "lastName":"Brown",
                    "username":"charlie",
                    "password":"charlie",
                    "roles": ["faculty"]
                },
                {   "_id":456,
                    "firstName":"Dan",
                    "lastName":"Craig",
                    "username":"dan",
                    "password":"dan",
                    "roles": ["faculty", "admin"]
                },
                {   "_id":567,
                    "firstName":"Edward",
                    "lastName":"Norton",
                    "username":"ed",
                    "password":"ed",
                    "roles": ["student"]
                }
            ],
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        }

        return model;

        function findUserByCredentials(username, password, callback) {
            var matchedUser = null;

            for (var index = 0; index < model.users.length; index++) {
                var currentUser = model.users[index];
                if (currentUser.username === username && currentUser.password === password) {
                    matchedUser = currentUser;
                    break;
                }
            }

            callback(matchedUser);
        }

        function findAllUsers(callback) {
            callback(model.users);
        }

        function createUser(user, callback) {
            user._id = (new Date).getTime();

            model.users.push(user);
            $rootScope.currentUser = user;

            callback(user);
        }

        function deleteUserById(userId, callback) {
            var userIndex = -1;

            for (var index = 0; index < model.users.length; index++) {
                if (model.users[index]._id === userId) {
                    userIndex = index;
                    break;
                }
            }

            if (userIndex >= 0) {
                model.users.splice(userIndex, 1);
            }

            callback(model.users);
        }

        function updateUser(userId, user, callback) {
            for (var index = 0; index < model.users.length; index++) {
                if (model.users[index]._id === userId) {
                    model.users[index] = user;
                    break;
                }
            }

            callback(user);
        }
    }
})();