angular.module('devMtIn').controller('homeCtrl', function ($scope) {
	$scope.myProfile = {
		name: "",
		friends: [{name: "Maureen"},
			{name: "Kevin"},
			{name: "Jacob"},
			{name: "Brady"},
			{name: "Rudey"},
			{name: "Cesar"}
		]
	};

	$scope.sortOptions = [{
    	display: 'Ascending'
  		, value: false
  		},
  		{
    	display: 'Descending'
  		, value: true
  		}
	];
});