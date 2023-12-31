(function () {
    var app = angular.module('myApp', []);

    app.controller('myController', myControllerFun);

    myControllerFun.$inject = ["$scope"];

    var itemList = ["Dry Fruits", "Perfume", "Toothpaste", "Magie", "Cookies", "Snakes"];
    var boughtItemList = [];

    function myControllerFun($scope) {
        $scope.name = "pankaj";
        $scope.itemList = itemList;
        $scope.boughtItemList = boughtItemList;

        $scope.errormsg = "";

        $scope.removeIt = function (index, list) {
            $scope.errormsg = "";
            list.splice(index, 1);
        }

        $scope.addItemFun = function () {
            if (!$scope.addItem) {
                $scope.errormsg = "First enter item name then press add button.";
                return;
            }

            if ($scope.itemList.indexOf($scope.addItem) === -1 && $scope.boughtItemList.indexOf($scope.addItem) === -1) {
                $scope.itemList.push($scope.addItem);
            } else if ($scope.itemList.indexOf($scope.addItem) !== -1) {
                $scope.errormsg = "This item is already in the shopping list. Please check.";
            } else {
                $scope.errormsg = "This item is already in the bought list. Please check.";
            }
        }

        $scope.buyItem = function (index) {
            $scope.errormsg = "";
            var boughtItem = $scope.itemList[index];
            $scope.boughtItemList.push(boughtItem);
            $scope.itemList.splice(index, 1);
        }
    }
})();


