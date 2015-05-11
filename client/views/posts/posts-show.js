'use strict';

angular.module('blueit')
.controller('PostsShowCtrl', function($scope, Post, $state){

  console.info($state.params);

  var postId = $state.params.postId;

  Post.retrieve(postId)
  .then(function(response){
    console.log(response.data);
  });

});
