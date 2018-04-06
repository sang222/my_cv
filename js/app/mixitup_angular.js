

var repeat_json = angular.module('repeat-item',[])
repeat_json.controller('repeat_all', function($scope,$http) {

    var json = $http.get('portfolio.json')
    .then(function(result) {
      $scope.data = result.data
      console.log(result.data)
    })
    var limit_item = 5;
    if ($('.filter--content').length < 5) {
      $('.row-loadmore').hide()
    }
    else {
      $('.row-loadmore').show()
    }
  })

    .directive('mixitup', function($compile) {

      return {
          restrict: 'A',
          scope: {
              datasource: '=',
              add: '&',
          },
          link: function(scope, element, attrs) {
            // init
            $rootScope.$broadcast('init-mixitup');

              scope.$on('init-mixitup', function(event) {
                  console.log('init');
                  var container = $('.filter--content');
                  angular.element(element).mixitup(container,{
                      animation: {
                          duration: 200
                      },
                      load: {
                          filter: '.filter--content .all'
                      }
                  });
              });
          }
      };
  });


$(document).ready(function() {

})
