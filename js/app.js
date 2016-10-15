angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

        .config(function ($stateProvider, $urlRouterProvider) {
            
            $stateProvider

                    // setup an abstract state for the tabs directive
                    .state('tab', {
                        url: '/tab',
                        abstract: true,
                        templateUrl: 'templates/tabs.html'
                    })

                    // Each tab has its own nav history stack:
                    .state('tab.users', {
                        url: '/users',
                        views: {
                            'tab-users': {
                                templateUrl: 'templates/tab-users.html',
                                controller: 'UsersCtrl'
                            }
                        }
                    })
                    .state('tab.user-detail', {
                        url: '/users/:userId',
                        views: {
                            'tab-users': {
                                templateUrl: 'templates/user-detail.html',
                                controller: 'UserDetailCtrl'
                            }
                        }
                    })
                    
                    .state('tab.user-edit', {
                        url: '/edit/:userId',
                        views: {
                            'tab-users': {
                                templateUrl: 'templates/user-edit.html',
                                controller: 'UserEditCtrl'
                            }
                        }
                    })
                    
                    .state('tab.adduser', {
                        url: '/adduser',
                        views: {
                            'tab-adduser': {
                                templateUrl: 'templates/tab-adduser.html',
                                controller: 'AddUserCtrl'
                            }
                        }
                    })

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/users');

        });