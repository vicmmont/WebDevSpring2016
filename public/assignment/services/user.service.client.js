/**
 * Created by VictorMonterroso on 2/24/16.
 */
"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($rootScope) {
        var users = [
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
                    ];

        var model = {
            users: users,
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser
        }

        return model;

        function findUserByCredentials(username, password, callback) {
            var matchedUser = null;

            for (var index = 0; index < users.length; index++) {
                var currentUser = useres[index];
                if (currentUser.username === username && currentUser.password === password) {
                    matchedUser = currentUser;
                    break;
                }
            }

            callback(matchedUser);
        }

        function findAllUsers(callback) {
            callback(users);
        }

        function createUser(user, callback) {
            user._id = (new Date).getTime();

            users.push(user);
            $rootScope.currentUser = user;

            callback(user);
        }

        function deleteUserById(userId, callback) {
            var userIndex = -1;

            for (var index = 0; index < users.length; index++) {
                if (users[index]._id === userId) {
                    userIndex = index;
                    break;
                }
            }

            if (userIndex >= 0) {
                users.splice(userIndex, 1);
            }

            callback(users);
        }

        function updateUser(userId, user, callback) {

            for (var index = 0; index < user.length; index++) {
                if (users[index]._id === userId) {
                    users[index] = user;
                    break;
                }
            }

            callback(user);
        }

        function setCurrentUser (user) {
            $rootScope.currentUser = user;
        }

        function getCurrentUser () {
            $rootScope.currentUser;
        }
    }
})();