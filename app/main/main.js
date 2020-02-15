app.controller('mainController', function($scope, $rootScope) {
		

		$scope.changeTheme = function(){
			var flag = localStorage.getItem("value");

			switch(flag){
				case "one": 
					$rootScope.value = "two";
					break;
				case "two": 
					$rootScope.value = "three";
					break;
				case "three": 
					$rootScope.value = "four";
					break;
				case "four": 
					$rootScope.value = "five";
					break;
				case "five": 
					$rootScope.value = "one";
					break;
				default:
					$rootScope.value = "one";
			}

			localStorage.setItem("value",$rootScope.value);
		}
		
});