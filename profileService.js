angular.module('devMtIn').service('profileService', function() {

	this.checkForProfile = function() {
  		if (localStorage.getItem('profile')) {
    		return JSON.parse(localStorage.getItem('profile'));
  		}
  		return {friends: [{name: "Maureen"},
					{name: "Kevin"},
					{name: "Jacob"},
					{name: "Brady"},
					{name: "Rudey"},
					{name: "Cesar"}
					]
		}
	};

	this.saveProfile = function(profile) {
		localStorage.setItem('profile', JSON.stringify(profile));
	}

	this.deleteProfile = function () {
		localStorage.removeItem('profile');
	}

});