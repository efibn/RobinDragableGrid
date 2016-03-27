

(function (angular) {
  "use strict";


  var demoApp = angular.module('demoApp', ['ui.router', 'ui.sortable'])
    .config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider){
  
        $urlRouterProvider.otherwise("/component/groups");
  
        // Now set up the states
        $stateProvider
          .state('groups', {
              url: "/component/groups",
              views: {
                  'contentGroups': {
                      templateUrl: "component/groups.html",
                      controller: "groupsController"
                  }
              }
          })   

  }]);
  
})(angular);

