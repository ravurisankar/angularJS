function listCtrl($scope , $http) {
	
    	 $http.jsonp('http://fpdv.odc.vzwcorp.com:7003/FraudWeb/Service/userList?callback=JSON_CALLBACK')
    	 	 .success(function(data,status, headers, config) {
//	        	 $scope.models = data.body;
//	        	 tempArray = data.body;
    	 		 window.tempArray = data.body;
        	 })
        	.error(function(data,status, headers, config) {
        		 alert("failed : " + config);
        		 $scope.models = data.body || "Request failed";
        		 $scope.status = status;
        	});
    }