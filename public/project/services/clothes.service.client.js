/**
 * Created by VictorMonterroso on 2/25/16.
 */
"use strict";

(function() {
    angular
        .module("VictorStoreApp")
        .factory("ClothesService", ClothesService);

    function ClothesService() {
        var api = {
            data : [
                {
                    "_id" : "000",
                    "name" : "Shirt1",
                    "price" : 29.99,
                    "colors" : ["blue", "black"],
                    "sizes" : ["small", "medium", "large"],
                    "quantity" : 10,
                    "description" : "Amazing shirt!"
                },
                {
                    "_id" : "001",
                    "name" : "Shirt2",
                    "price" : 24.99,
                    "colors" : ["blue", "black", "white"],
                    "sizes" : ["small", "medium"],
                    "quantity" : 15,
                    "description" : "Such a good shirt!"
                },
                {
                    "_id" : "002",
                    "name" : "Shirt3",
                    "price" : 39.99,
                    "colors" : ["blue", "white", "gray"],
                    "sizes" : ["small", "large"],
                    "quantity" : 25,
                    "description" : "Excellent material!"
                },
                {
                    "_id" : "003",
                    "name" : "Shirt3",
                    "price" : 22.99,
                    "colors" : ["black", "white", "gray"],
                    "sizes" : ["small", "medium", "large"],
                    "quantity" : 13,
                    "description" : "Made in USA!"
                }
            ],
            createClothes : createClothes,
            getClothes : getClothes,
            deleteClothes : deleteClothes,
            updateClothes: updateClothes
        };

        return api;

        function createClothes(clothes, callback) {
            clothes._id = (new Date).getTime();

            api.data.push(clothes);
            callback(clothes);
        }

        function getClothes(callback) {
            callback(api.data);
        }

        function deleteClothes(clothesId, callback) {
            var clothesIndex = null;

            for (var index in api.data) {
               if (api.data[index]._id === clothesId) {
                    clothesIndex = index;
                   break;
               }
            }

            if (clothesIndex) {
                api.data.splice(clothesIndex, 1);
            }

            callback(api.data);
        }

        function updateClothes(clothesId, newClothes, callback) {
            for (var index in api.data) {
                if (api.data[index]._id === clothesId) {
                    api.data[index] = newClothes;
                    break;
                }
            }

            callback(newClothes);
        }
    }
})();