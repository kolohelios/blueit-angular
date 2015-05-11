'use strict';

angular.module('blueit')
.factory('Post', function($rootScope, $http, nodeUrl){

  function Post(){}

  Post.create = function(post){
    return $http.post(nodeUrl + '/posts', post);
  };

  Post.retrieve = function(postId){
    var postString;
    if(postId !== undefined){
      postString = nodeUrl + '/posts/' + postId;
    }else{
      postString = nodeUrl + '/posts';
    }
    return $http.get(postString);
  };

  Post.vote = function(postId, direction){
    return $http.put(nodeUrl + '/posts/' + postId + '/' + direction);
  };

  return Post;
});
