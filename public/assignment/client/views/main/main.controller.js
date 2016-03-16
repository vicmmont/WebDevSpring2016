/**
 * Created by VictorMonterroso on 2/24/16.
 */
"use strict";

(function(){
    angular
        .module("FormBuilderApp")
        .controller("MainController", mainController);

    function mainController($location, $scope) {
        var vm = this;

        vm.$location = $location;
        $scope.$location = $location;
    }
})();