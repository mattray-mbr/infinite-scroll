var app = angular.module('scroll', ['infinite-scroll'])
	app.controller('scrollController', ['$scope', function($scope){

	var today = new Date();
	$scope.images = [];
	$scope.counter = 0;
	$scope.comment = 'Appointment';

	$scope.loadMore = function(){

    	for(var i = 0; i <3; i++) {
    		today.setDate(today.getDate()+1);
    		var dd = today.getDate();
    		var mm = today.getMonth()+1;
    		var y = today.getFullYear();
    		var formattedDate = mm + '/' + dd + '/' + y;
    		var date = {
    			count: $scope.counter++,
    			day: formattedDate,
    			agenda: $scope.comment,
			}
      		$scope.images.push(date);
   		}
	}
	$scope.addAgenda = function(){
		$scope.inputarea = !$scope.inputarea
	}

	}]);
