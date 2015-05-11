'use strict';

angular.module('blueit')
.controller('PostsNewCtrl', function($scope, Post, $state){

  $scope.createPost = function(post){
    var imageExts = ['.jpg', '.png', '.jpeg', '.gif'];
    post.isImage = false;
    imageExts.forEach(function(ext){
      if(post.url.indexOf(ext) > -1){
        post.isImage = true;
      }
    });
    Post.create(post)
    .then(function(){
      $state.go('home');
    });
  };

});
