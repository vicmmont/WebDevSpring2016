/**
 * Created by VictorMonterroso on 2/24/16.
 */
"use strict";

(function() {
    angular
        .module("VictorStoreApp")
        .factory("UserService", UserService);

    function UserService($rootScope) {
        var model = {
            users: [
                {   "_id":123,
                    "firstName":"Luis",
                    "lastName":"Suarez",
                    "email" : "luis@suarez.com",
                    "password":"luis",
                    "address": "1 Wonderland Street",
                    "city": "Boston",
                    "state": "MA",
                    "country": "United States"
                },
                {   "_id":234,
                    "firstName":"Neymar",
                    "lastName":"Dos Santos",
                    "email" : "neymar@dossantos.com",
                    "password":"neymar",
                    "address": "2 Wonderland Street",
                    "city": "Boston",
                    "state": "MA",
                    "country": "United States"
                },
                {   "_id":456,
                    "firstName":"Andres",
                    "lastName":"Iniesta",
                    "email" : "andres@iniesta.com",
                    "password":"andres",
                    "address": "3 Wonderland Street",
                    "city": "Boston",
                    "state": "MA",
                    "country": "United States"
                },
                {   "_id":567,
                    "firstName":"Lionel",
                    "lastName":"Messi",
                    "email" : "lionel@messi.com",
                    "password":"lionel",
                    "address": "4 Wonderland Street",
                    "city": "Boston",
                    "state": "MA",
                    "country": "United States"
                },
                {   "_id":678,
                    "firstName":"Dani",
                    "lastName":"Alves",
                    "email" : "dani@alves.com",
                    "password":"dani",
                    "address": "5 Wonderland Street",
                    "city": "Boston",
                    "state": "MA",
                    "country": "United States"
                }
            ],
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateClothes: updateClothes
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

        function updateClothes(userId, user, callback) {
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