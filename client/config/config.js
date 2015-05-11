'use strict';

angular.module('blueit')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html', controller: 'HomeCtrl'})
  .state('about', {url: '/about', templateUrl: '/views/general/about.html'})
  .state('faq', {url: '/faq', templateUrl: '/views/general/faq.html'})
  .state('contact', {url: '/contact', templateUrl: '/views/general/contact.html'})
  .state('profile', {url: '/profile', templateUrl: '/views/users/profile.html', controller: 'ProfileCtrl'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('posts', {url: '/posts', templateUrl: '/views/posts/posts.html', abstract: true})
  .state('posts.new', {url: '/new', templateUrl: '/views/posts/posts-new.html', controller: 'PostsNewCtrl'})
  .state('posts.show', {url: '/{postId}', templateUrl: '/views/posts/posts-show.html', controller: 'PostsShowCtrl'});
});
