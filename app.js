var app = angular.module('scroll', ['infinite-scroll'])
	app.controller('scrollController', ['$scope', function($scope){


	$scope.images = [];
	$scope.counter = 0;
	$scope.loadMore = function(){
		var last = $scope.images[$scope.images.length ];
    	for(var i = 0; i <3; i++) {
      		$scope.images.push(++$scope.counter);
   		}
	}
	$scope.loadMore();
	}]);


// var myApp = angular.module('myApp', ['infinite-scroll']);

// var numbersController = function($scope){
//     $scope.numbers = [];
//     $scope.counter = 0;

//     $scope.loadMore = function () {
//         for (var i = 0; i < 25; i++) {
//             $scope.numbers.push(++$scope.counter);
//         };
//     }
//     $scope.loadMore();
// }
// myApp.controller('numbersController', numbersController); 