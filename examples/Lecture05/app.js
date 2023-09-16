/*(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Yaakov";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();*/


(function(){
  'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope){
    $scope.name = "Rafael";
    $scope.sayHello = function(){
      return "Hola Coursera!";
    };
  });
})();
