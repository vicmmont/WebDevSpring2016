/**
 * Created by VictorMonterroso on 2/25/16.
 */
"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService() {
        var api = {
            data : [
                {"_id": "000", "title": "Contacts", "userId": 123},
                {"_id": "010", "title": "ToDo",     "userId": 123},
                {"_id": "020", "title": "CDs",      "userId": 234}
            ],
            createFormForUser : createFormForUser,
            findAllFormsForUser : findAllFormsForUser,
            deleteFormById : deleteFormById,
            updateFormById: updateFormById
        };

        return api;

        function createFormForUser(userId, form, callback) {
            form._id = (new Date).getTime();
            form.userId = userId;

            api.data.push(form);
            callback(form);
        }

        function findAllFormsForUser(userId, callback) {
            var forms = api.data;
            var userForms = [];

            for (var index in forms) {
                var currentForm = forms[index];

                if (currentForm.userId === userId) {
                    userForms.push(currentForm);
                }
            }

            callback(userForms);
        }

        function deleteFormById(formId, callback) {
            var formIndex = null;

            for (var index in api.data) {
               if (api.data[index]._id === formId) {
                    formIndex = index;
                   break;
               }
            }

            if (formIndex) {
                api.data.splice(formIndex, 1);
            }

            callback(api.data);
        }

        function updateFormById(formId, newForm, callback) {
            for (var index in api.data) {
                if (api.data[index]._id === formId) {
                    api.data[index] = newForm;
                    break;
                }
            }

            callback(newForm);
        }
    }
})();