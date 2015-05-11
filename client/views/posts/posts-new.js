'use strict';

angular.module('blueit')
.controller('PostsNewCtrl', function($scope, Post, $state){

  $scope.createPost = function(post){
    Post.create(post)
    .then(function(){
      $state.go('home');
    });
  };

});
