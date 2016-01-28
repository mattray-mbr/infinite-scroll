var app = angular.module('scroll', ['infinite-scroll'])
	app.controller('scrollController', ['$scope','$timeout', function($scope,$timeout){

	var today = new Date();
	$scope.images = [];
	$scope.counter = 0;
	

	$scope.loadMore = function(){

    	for(var i = 0; i <3; i++) {
    		today.setDate(today.getDate()+1);
    		var dd = today.getDate();
    		var mm = today.getMonth()+1;
    		var y = today.getFullYear();
    		var formattedDate = mm+'/'+dd+'/'+y;
    		var date = {
    			count: $scope.counter++,
    			day: formattedDate,
    			agenda: $scope.comment,
    			visibility: false,
    			agendaVisibility: true,
    			showEdit: false,
    			button: 'Add Appointment',
			} 
      		$scope.images.push(date);
   		}
	}
	$scope.addAgenda = function(index, event){
		$scope.images[index].visibility = true;
		$timeout(function() {
					event.target.nextElementSibling.focus();
				});
	}
	$scope.exitText = function(index){
		$scope.images[index].visibility = false;
		$scope.images[index].agendaVisibility = false;
		$scope.images[index].showEdit = true;
		$scope.images[index].button = "Edit Appointment";
	}
	

	}]);
