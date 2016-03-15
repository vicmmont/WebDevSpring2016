/**
 * Created by VictorMonterroso on 2/23/16.
 */
"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", formController);

    function formController(FormService, $scope, $rootScope) {
        $scope.addClothes = addClothes;
        $scope.updateClothes = updateClothes;
        $scope.deleteClothes = deleteClothes;
        $scope.selectClothes = selectClothes;

        $scope.form = {};
        //Retrieve forms from FormService
        function retrieveForms () {
            FormService.getClothes($rootScope.currentUser._id, function (returnedForms) {
                $scope.forms = returnedForms;
            });
        }
        retrieveForms();

        function addClothes(userId, form) {
            var callbackFunction = function(newForm) {
                retrieveForms();
                $scope.form = {};
            }
            FormService.createClothes(userId, form, callbackFunction)
        }

        function selectClothes(index) {
            $scope.form = {
                title: $scope.forms[index].title,
                userId: $scope.forms[index].userId,
                _id: $scope.forms[index]._id
            }
        }

        function updateClothes(form) {
            FormService.updateClothes(form._id, form, function(updatedForm) {
                for (var index in $scope.forms) {
                    if ($scope.forms[index]._id === form._id) {
                        $scope.forms[index] = updatedForm;
                    }
                }

                $scope.form = {};
            })
        }

        function deleteClothes(index) {
            var form = $scope.forms[index];

            FormService.deleteClothes(form._id, function(remainingForms) {
                retrieveForms();
                $scope.form = {};
            })
        }
    }
})();