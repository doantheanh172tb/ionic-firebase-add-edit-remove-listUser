angular.module('starter.controllers', [])
        .controller('UsersCtrl', function ($scope, $ionicListDelegate, UserService) {
            $scope.users = UserService.all();

            $scope.remove = function (user) {
                UserService.remove(user);
            }
        })

        .controller('UserDetailCtrl', function ($scope, $stateParams, UserService) {
            $scope.user = UserService.get($stateParams.userId);
        })

        .controller('UserEditCtrl', function ($scope, $stateParams, UserService) {
            $scope.user = UserService.get($stateParams.userId);

            $scope.save = function () {
                UserService.save($scope.user);
            }
        })

        .controller('AddUserCtrl', function ($scope, $ionicListDelegate, UserService) {
//            console.log($scope.user);

            $scope.addUser = function () {
                UserService.save($scope.user);
            };
        })
        ;