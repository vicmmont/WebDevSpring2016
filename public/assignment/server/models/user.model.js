/**
 * Created by VictorMonterroso on 3/14/16.
 */
module.exports = function() {
    var users = [
        {"_id": 123, "firstName": "Alice", 	"lastName": "Wonderland",	"username": "alice", 	"password": "alice"},
        {"_id": 234, "firstName": "Bob",	"lastName": "Hope", 		"username": "bob", 	"password": "bob"},
        {"_id": 345, "firstName": "Charlie","lastName": "Brown", 		"username": "charlie", "password": "charlie"},
        {"_id": 456, "firstName": "Dan",	"lastName": "Craig", 		"username": "dan", 	"password": "dan"},
        {"_id": 567, "firstName": "Edward","lastName": "Norton",		"username": "ed",	"password": "ed"}
    ];

    var api = {
        createForm: createUser,
        findFormById: findUserById,
        findAllForms: findAllUsers,
        updateForm: updateUser,
        deleteField: deleteUser,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials
    };
    return api;

    function createUser (newUser) {
        var now = new Date();
        newUser._id = "id" + now.getTime();
        users.push (newUser);

        return users;
    }

    function updateUser (id, user) {
        for (var index in users) {
            if (users[index]._id === id) {
                users[index] = user;
            }
        }
    }

    function findAllUsers () {
        return users;
    }

    function findUserById (id) {
        for (var index in users) {
            if (users[index]._id === id) {
                return users[index];
            }
        }
        return null;
    }

    function deleteUser (id) {
        for (var index in users) {
            if (users[index]._id === id) {
                users.splice(index, 1);
                return true;
            }
        }
        return false;
    }

    function findUserByUsername(username) {
        for (var index in users) {
            var currentUser = users[index];
            if (currentUser.username === username) {
                return currentUser;
            }
        }

        return null;
    }

    function findUserByCredentials(credentials) {
        for (var index in users) {
            var currentUser = users[index];
            if (currentUser.username === credentials.username && currentUser.password === credentials.password) {
                return currentUser;
            }
        }

        return null;
    }
}