'use strict';

angular.module('blueit')
.controller('PostsShowCtrl', function($scope, Post, $state, $window){

  var postId = $state.params.postId;

  Post.retrieve(postId)
  .then(function(response){
    $scope.post = response.data;
  });

  $scope.addComment = function(postId, comment){
    Post.addComment(postId, comment)
    .then(function(response){
      $scope.post.comments.push(response.data);
    });
  };

  $scope.vote = function(postId, commentId, direction){
    Post.commentVote(postId, commentId, direction)
    .then(function(response){
      var commentToUpdate = $window._.find($scope.post.comments, function(commentRecord){
        return commentRecord._id === response.data._id;
      });
      console.log(commentToUpdate);
      commentToUpdate.votes = response.data.votes;
    });
  };


});
