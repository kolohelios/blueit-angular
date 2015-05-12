'use strict';

angular.module('blueit')
.controller('HomeCtrl', function(Post, $scope, $window, User){

  getPosts();

  function getPosts(){
    Post.retrieve()
    .then(function(response){
      $scope.posts = response.data;
      User.retrieve()
      .then(function(result){
        $scope.users = result.data;
        $scope.posts.forEach(function(post){
          for(var i = 0; i < $scope.users.length; i++){
            if(post.userId === $scope.users[i]._id){
              post.handle = $scope.users[i].handle;
            }
          }
        });
      });
    });
  }

  $scope.vote = function(postId, direction){
    console.log(direction);
    Post.vote(postId, direction)
    .then(function(response){
      var postToUpdate = $window._.find($scope.posts, function(post){
        return post._id === response.data._id;
      });
      postToUpdate.votes = response.data.votes;
    });
  };


});
