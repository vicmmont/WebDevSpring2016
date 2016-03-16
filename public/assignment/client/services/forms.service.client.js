/**
 * Created by VictorMonterroso on 2/25/16.
 */
"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($http) {
        var api = {
            createFormForUser : createFormForUser,
            findAllFormsForUser : findAllFormsForUser,
            deleteFormById : deleteFormById,
            updateFormById: updateFormById
        };

        return api;

        function createFormForUser(userId, form) {
            form._id = (new Date).getTime();
            form.userId = userId;

            return $http.post("/api/assignment/user/" + userId + "/form", form);
        }

        function findAllFormsForUser(userId) {
            return $http.get("/api/assignment/user/" + userId + "/form");
        }

        function deleteFormById(formId) {
            return $http.delete("/api/assignment/form/" + formId);
        }

        function updateFormById(formId, newForm) {
            return $http.put("/api/assignment/form/" + formId, newForm);
        }
    }
})();