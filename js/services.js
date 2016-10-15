angular.module('starter.services', ['ionic', 'firebase'])

        .factory('UserService', ['$firebaseArray', function ($firebaseArray) {
                var dbRef = "https://iofibase01.firebaseio.com/users/";
                var usersRef = new Firebase(dbRef);
                var users = $firebaseArray(usersRef);

                return {
                    all: function () {
                        return users;
                    },
                    remove: function (user) {
                        usersRef.child(user.$id).remove(function (error) {
                            if (error) {
//                                console.log('done');
                            } else {
//                                console.log('error');
                            }
                        });
                    },
                    get: function (userId) {
                        var userDetail = users.$getRecord(userId);
//                        console.log(userDetail);
                        if (userDetail)
                            return userDetail;
                        else
                            return null;
                    },
                    save: function (user) {
//                        console.log(user);

                        if (user.$id) {
                            users.$save(user);
                        }else{
                            users.$add(user);
                        }
                    }
                };
            }])

        ;