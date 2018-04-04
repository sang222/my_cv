
//import angular from 'angular'

/*var demo_repeat = angular.module('repeat-demo',[])

demo_repeat.controller('repeat_tes', function($scope,$http) {
  var portfolio = $http.get('portfolio.json')
  .then(function(result) {
    $scope.data = result.data
    console.log(result.data)
  });
  $scope.portfolio = portfolio;
})*/

var repeat_json = angular.module('repeat-item',[])
repeat_json.controller('repeat_all', function($scope,$http) {

  var json = $http.get('portfolio.json')
  .then(function(result) {
    $scope.data = result.data,
    link: mixitup
    console.log(result.data)
  })
  var mixitup = function mixitup(ele) {
    $(ele).mixItUp();
  }
  var limit_item = 5;
  if ($('.filter--content').length < 5) {
    $('.row-loadmore').hide()
  }
  else {
    $('.row-loadmore').show()
  }

})
