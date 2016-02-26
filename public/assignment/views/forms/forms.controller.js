/**
 * Created by VictorMonterroso on 2/23/16.
 */
"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", formController);

    function formController(FormService, $scope, $rootScope) {
        //Retrieve forms from FormService
        FormService.findAllFormsForUser($rootScope.currentUser._id, function (returnedForms) {
            $scope.forms = returnedForms;
        })

        function addForm(form) {

        }

    }
})();