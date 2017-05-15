var app = angular.module('app', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider.state("login", {
      url: "/",
      templateUrl: "../views/parcials/login.html",
      controller: "userController"
  });
  // $stateProvider.state("users", {
  //   url: "/user",
  //   templateUrl: "../views/parcials/index.html",
  //   controller: "userController"
  // });
  $stateProvider.state("create", {
      url: "/signup",
      templateUrl: "../views/parcials/create.html",
      controller: "userController"
  });
});

app.constant("apiUrl", 'http://localhost:3001/api');
