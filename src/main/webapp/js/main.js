'use strict';

var beerApp = angular.module('BeerApp', ['ngRoute']);

beerApp.config(function($routeProvider, $locationProvider) {
  $routeProvider

  .when('/home', {
    templateUrl: 'templates/main.html',
    controller: 'MainController',
    resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
 	}
  })

  .when('/beers', {
    templateUrl: 'templates/beers.html',
    controller: 'BeerController'
  })

  .when('/products', {
    templateUrl: 'templates/products.html',
    controller: 'ProductController'
  })
  
  .when('/stores', {
    templateUrl: 'templates/stores.html',
    controller: 'StoreController'
  })

  .otherwise({
    redirectTo: '/home'
  });

 }).factory('OntarioBeerService', function($http, $q) {
	var baseURL = "/api/";

	return{
		getAllBeers: function(){
			var deferred = $q.defer();
			$http.get(baseURL + 'beers/')
			.success(function(data, status, headers, config) {
				deferred.resolve(data);
			})
			.error(function() {
				deferred.reject("Failed to get Beers");
			});
			return deferred.promise;
		},

		getAllStores: function(){
			var deferred = $q.defer();
			$http.get(baseURL + 'stores/')
			.success(function(data, status, headers, config) {
				deferred.resolve(data);
			})
			.error(function() {
				deferred.reject("Failed to get Stores");
			});
			return deferred.promise;
		},

		getAllProducts: function(){
			var deferred = $q.defer();
			$http.get(baseURL + 'products/')
			.success(function(data, status, headers, config) {
				deferred.resolve(data);
			})
			.error(function() {
				deferred.reject("Failed to get Products");
			});
			return deferred.promise;
		}
	};
}).controller('MainController', function($log, $scope, $route, $routeParams, $location, OntarioBeerService) {

	$scope.getAllBeers = function(){
		OntarioBeerService.getAllBeers()
		.then(function(response) {
			$scope.beers = response;
			$log.info('Beers successfully retrieved to controller.');
		}).catch(function(error) {
			$log.error('Beers not successfully retrieved to controller.');
		});
	}

	$scope.getAllProducts = function(){
		OntarioBeerService.getAllProducts()
		.then(function(response) {
			$scope.products = response;
			$log.info('Products successfully retrieved to controller.');
		}).catch(function(error) {
			$log.error('Products not successfully retrieved to controller.');
		});
	}

	$scope.getAllStores = function(){
		OntarioBeerService.getAllStores()
		.then(function(response) {
			$scope.stores = response;
			$log.info('Stores successfully retrieved to controller.');
		}).catch(function(error) {
			$log.error('Stores not successfully retrieved to controller.');
		});

	}

	$scope.beers=$scope.getAllBeers();
    $scope.products = $scope.getAllProducts();
    $scope.stores = $scope.getAllStores();

}).controller('BeerController', function($log, $scope, $route, $routeParams, $location, OntarioBeerService) {

	$scope.getAllBeers = function(){
		OntarioBeerService.getAllBeers()
		.then(function(response) {
			$scope.beers = response;
			$log.info('Beers successfully retrieved to controller.');
		}).catch(function(error) {
			$log.error('Beers not successfully retrieved to controller.');
		});
	}

	$scope.beers=$scope.getAllBeers();
}).controller('ProductController', function($log, $scope, $route, $routeParams, $location, OntarioBeerService) {
	

	$scope.getAllProducts = function(){
		OntarioBeerService.getAllProducts()
		.then(function(response) {
			$scope.products = response;
			$log.info('Products successfully retrieved to controller.');
		}).catch(function(error) {
			$log.error('Products not successfully retrieved to controller.');
		});
	}

	$scope.products = $scope.getAllProducts();

}).controller('StoreController', function($log, $scope, $route, $routeParams, $location, OntarioBeerService) {
	
	$scope.getAllStores = function(){
		OntarioBeerService.getAllStores()
		.then(function(response) {
			$scope.stores = response;
			$log.info('Stores successfully retrieved to controller.');
		}).catch(function(error) {
			$log.error('Stores not successfully retrieved to controller.');
		});

	}

	$scope.stores = $scope.getAllStores();
});


