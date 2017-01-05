var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope,$location){
	$scope.firstname = "hao";
	$scope.lastname = 123;
	$scope.fullname = function(){
		return $scope.firstname + $scope.lastname;
	};
	$scope.person = [
	{name:"张三",age:12},
	{name:"李四",age:32},
	{name:"王五",age:2}
	];
	$scope.myUrl = $location.absUrl(); //获取当前页面的url
	
})