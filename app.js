var app = angular.module('scroll', ['infinite-scroll'])
	app.controller('scrollController', ['$scope', function($scope){

	$scope.today = new Date();
	// $scope.today.setDate(28);
	console.log($scope.today);
	$scope.images = [];
	$scope.counter = 0;
	$scope.comment = '';

	$scope.loadMore = function(){

		var last = $scope.images[$scope.images.length ];
    	for(var i = 0; i <3; i++) {
    		var date = {
    			count: $scope.counter++,
    			day: $scope.today++,
    			agenda: $scope.comment,
			}
      		$scope.images.push(date);
      		// $scope.today.setDate(27 + $scope.counter);
   		}
	}
	// $scope.loadMore();

	// $scope.time = function(){
	// 	$scope.today++;
	// 	return $scope.today

	// }
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