'use strict';

angular.module('blueit')
.factory('Post', function($rootScope, $http, nodeUrl){

  function Post(){}

  Post.create = function(post){
    return $http.post(nodeUrl + '/posts', post);
  };

  Post.retrieve = function(){
    return $http.get(nodeUrl + '/posts');
  };

  Post.vote = function(postId, direction){
    return $http.put(nodeUrl + '/posts/' + postId + '/' + direction);
  };

  return Post;
});
