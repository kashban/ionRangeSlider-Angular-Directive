/**
 * Created by Abdullah on 9/19/14.
 *
 * Modified and enhanced by Juergen Wahlmann on 3/5/15
 */

var app = angular.module('ionSlider',['ngRoute']);


app.directive('ionslider',function($timeout){
    return{
        restrict:'EC',
        scope:{min:'=',
            max:'=',
            type:'@',
            prefix:'@',
            maxPostfix:'@',
            prettify:'@',
            grid:'@',
            gridMargin:'@',
            postfix:'@',
            step:'@',
            hideMinMax:'@',
            hideFromTo:'@',
            from:'=',
            to: '=',
            disable:'=',
            onChange:'=',
            onFinish:'=',
            onStart:'=',
            onUpdate:'='

        },
        template:'<input>',
        replace:true,
        link:function($scope,$element,attrs){
            (function init(){
                $element.ionRangeSlider({
                    min: $scope.min,
                    max: $scope.max,
                    type: $scope.type,
                    prefix: $scope.prefix,
                    maxPostfix: $scope.maxPostfix,
                    prettify: $scope.prettify,
                    grid: $scope.grid,
                    gridMargin: $scope.gridMargin,
                    postfix:$scope.postfix,
                    step:$scope.step,
                    hideMinMax:$scope.hideMinMax,
                    hideFromTo:$scope.hideFromTo,
                    from:$scope.from,
                    to: $scope.to,
                    disable:$scope.disable,
                    onChange:$scope.onChange,
                    onFinish:$scope.onFinish,
                    onStart:$scope.onStart,
                    onUpdate:$scope.onUpdate
                });
            })();
            $scope.$watch('min', function(value) {
                $timeout(function(){ $element.data("ionRangeSlider").update({min: value}); });
            },true);
            $scope.$watch('max', function(value) {
                $timeout(function(){ $element.data("ionRangeSlider").update({max: value}); });
            });
            $scope.$watch('from', function(value) {
                $timeout(function(){ $element.data("ionRangeSlider").update({from: value}); });
            });
            $scope.$watch('to', function (value) {
                $timeout(function () { $element.data("ionRangeSlider").update({ to: value }); });
            });
            $scope.$watch('disable', function(value) {
                $timeout(function(){ $element.data("ionRangeSlider").update({disable: value}); });
            });
        }
    }
});
