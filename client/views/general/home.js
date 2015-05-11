'use strict';

angular.module('blueit')
.controller('HomeCtrl', function(Post, $scope, $window){

  getPosts();

  function getPosts(){
    Post.retrieve()
    .then(function(response){
      $scope.posts = response.data;
    });
  }

  $scope.vote = function(postId, direction){
    Post.vote(postId, direction)
    .then(function(response){
      console.info(response.data._id);
      var postToUpdate = $window._.find($scope.posts, function(key){
        return key._id === response.data._id;
      });
      postToUpdate.votes = response.data.votes;
    });
  };


});
