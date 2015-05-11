'use strict';

angular.module('blueit')
.controller('ProfileCtrl', function($scope, User, $window){

  User.getProfile()
  .then(function(response){
    setProfile(response.data);
  });

  $scope.saveProfile = function(profile){
    $scope.profile.avatar = $scope.avatarUrl || $scope.profile.avatar;
    User.updateProfile(profile)
    .then(function(){
      setProfile(profile);
    });
  };

  $scope.cameraOn = function(){
    $window.Webcam.attach('#camera');
  };

  $scope.cameraOff = function(){
    $window.Webcam.reset();
  };

  $scope.takePhoto = function(){
    $window.Webcam.snap(function(dataUri){
      $scope.profile.avatar = dataUri;
      $scope.avatarUrl = '';
    });
  };

  function setProfile(profile){
    if(profile.avatar.indexOf('data:') === -1){
      $scope.avatarUrl = profile.avatar;
    }
    $scope.profile = profile;
  }

});
