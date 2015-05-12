'use strict';

angular.module('blueit')
.controller('PostsShowCtrl', function($scope, Post, $state, $window, User){

  var postId = $state.params.postId;

  Post.retrieve(postId)
  .then(function(response){
    $scope.post = response.data
    User.retrieve()
    .then(function(result){
      $scope.users = result.data;
      $scope.post.comments.forEach(function(comment){
        for(var i = 0; i < $scope.users.length; i++){
          if(comment.userId === $scope.users[i]._id){
            comment.handle = $scope.users[i].handle;
          }
        }
      });
    });
  });

  $scope.addComment = function(postId, comment){
    Post.addComment(postId, comment)
    .then(function(response){
      var newComment = response.data;
      newComment.votes = 1;
      $scope.post.comments.push(newComment);
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
