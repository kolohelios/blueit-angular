'use strict';

angular.module('blueit')
.factory('User', function($rootScope, $http, nodeUrl){

  function User(){
  }

  User.initialize = function(){
    return $http.post(nodeUrl + '/users');
  };

  User.oauth = function(provider){
    return $rootScope.afAuth.$authWithOAuthPopup(provider);
  };

  User.register = function(user){
    return $rootScope.afAuth.$createUser(user);
  };

  User.getProfile = function(){
    return $http.get(nodeUrl + '/profiles');
  };

  User.updateProfile = function(profile){
    var o = angular.copy(profile);
    delete o._id;
    delete o.firebaseId;
    delete o.__v;
    delete o.createdAt;
    return $http.put(nodeUrl + '/profiles', o);
  };

  User.login = function(user){
    return $rootScope.afAuth.$authWithPassword(user);
  };

  User.logout = function(){
    return $rootScope.afAuth.$unauth();
  };

  return User;
});
