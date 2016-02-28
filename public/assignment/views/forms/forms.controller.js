/**
 * Created by VictorMonterroso on 2/23/16.
 */
"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", formController);

    function formController(FormService, $scope, $rootScope) {
        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;

        $scope.form = {};
        //Retrieve forms from FormService
        function retrieveForms () {
            FormService.findAllFormsForUser($rootScope.currentUser._id, function (returnedForms) {
                $scope.forms = returnedForms;
            });
        }
        retrieveForms();

        function addForm(userId, form) {
            var callbackFunction = function(newForm) {
                retrieveForms();
                $scope.form = {};
            }
            FormService.createFormForUser(userId, form, callbackFunction)
        }

        function selectForm(index) {
            $scope.form = {
                title: $scope.forms[index].title,
                userId: $scope.forms[index].userId,
                _id: $scope.forms[index]._id
            }
        }

        function updateForm(form) {
            FormService.updateFormById(form._id, form, function(updatedForm) {
                for (var index in $scope.forms) {
                    if ($scope.forms[index]._id === form._id) {
                        $scope.forms[index] = updatedForm;
                    }
                }

                $scope.form = {};
            })
        }

        function deleteForm(index) {
            var form = $scope.forms[index];

            FormService.deleteFormById(form._id, function(remainingForms) {
                retrieveForms();
                $scope.form = {};
            })
        }
    }
})();