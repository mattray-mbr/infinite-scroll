var app = angular.module('scroll', ['infinite-scroll'])
	app.controller('scrollController', ['$scope', function($scope){

	var today = new Date();
	$scope.images = [];
	$scope.counter = 0;
	$scope.comment = '';
	$scope.button = 'Add Appointment'

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
    			visibility: false,
    			agendaVisibility: true,
    			button: $scope.button,
			} 
      		$scope.images.push(date);
   		}
	}
	$scope.addAgenda = function(index){
		$scope.images[index].visibility = !$scope.images[index].visibility
		$scope.images[index].agendaVisibility = false;
		$scope.button = 'Save Appointment';
	}

	}]);
