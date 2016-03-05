/**
 * Created by VictorMonterroso on 3/4/16.
 */
"use strict";

(function() {
    angular
        .module("VictorStoreApp")
        .controller("ClothesController", ClothesController);

    function ClothesController(ClothesService, $scope, $location) {
        $scope.$location = $location;
        $scope.addClothes = addClothes;
        $scope.updateClothes = updateClothes;
        $scope.deleteClothes = deleteClothes;
        $scope.selectClothes = selectClothes;

        $scope.clothes = {};
        //Retrieve clothes from ClothesService
        function retrieveClothes () {
            ClothesService.getClothes(function (returnedClothingItems) {
                $scope.clothingItems = returnedClothingItems;
            });
        }
        retrieveClothes();

        function addClothes(clothes) {
            var callbackFunction = function(newClothes) {
                retrieveClothes();
                $scope.clothes = {};
            };

            ClothesService.createClothes(clothes, callbackFunction);
        }

        function selectClothes(index) {
            $scope.clothes = {
                "_id" : $scope.clothingItems[index]._id,
                "name" : $scope.clothingItems[index].name,
                "price" : $scope.clothingItems[index].price,
                "colors" : $scope.clothingItems[index].colors,
                "sizes" : $scope.clothingItems[index].sizes,
                "quantity" : $scope.clothingItems[index].quantity,
                "description" : $scope.clothingItems[index].description
            }
        }

        function updateClothes(clothes) {
            ClothesService.updateClothes(clothes._id, clothes, function(updatedClothes) {
                for (var index in $scope.clothingItems) {
                    if ($scope.clothingItems[index]._id === clothes._id) {
                        $scope.clothingItems[index] = updatedClothes;
                    }
                }
                $scope.clothes = {};
            });
        }

        function deleteClothes(index) {
            var clothes = $scope.clothingItems[index];

            ClothesService.deleteClothes(clothes._id, function(remainingClothes) {
                $scope.clothingItems = remainingClothes;
                $scope.clothes = {};
            });
        }
    }
})();
