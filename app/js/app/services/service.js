app.factory("userService", ['$http', '$q','apiUrl', function(http, q, apiUrl){
    var getEmployeeUrl = apiUrl + "/user/";

    return{
        getEmployee: function(){
            var deferred = q.defer();
            http.get(getEmployeeUrl)
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });
            return deferred.promise;
        },
        getEmployeeUsingId: function(id){
            var deferred = q.defer();
            http.get(getEmployeeUrl + id).success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;
        },
        createEmployee: function(data){
            var deferred = q.defer();
            http.post(getEmployeeUrl, data).success(function (data, status) {
                deferred.resolve(data);
            }).error(function (data, status) {
                deferred.reject(data);
            });
            return deferred.promise;
        },
        editEmployeeData: function(id, data){
            var deferred = q.defer();
            http.put(getEmployeeUrl + id, data).success(function (data, status) {
                deferred.resolve(data);
            }).error(function (data, status) {
                deferred.reject(data);
            });
            return deferred.promise;
        },
        deleteEmployeeData: function(id){
            var deferred = q.defer();
            http.delete(getEmployeeUrl + id).success(function (data, status) {
                deferred.resolve(data);
            }).error(function (data, status) {
                deferred.reject(data);
            });
            return deferred.promise;
        }
    }
}])


// (function () {
//     'use strict';
//
//     angular
//     .module('app')
//     .factory('userService', Service);
//
//     Service.$inject = ['$http', 'globalConfig'];
//
//     function Service($http, globalConfig) {
//         var url = "";
//         return {
//             getUsers: function () {
//                 url = globalConfig.apiAddress + "/user";
//                 return $http.get(url);
//             },
//             getUser: function (id) {
//                 url = globalConfig.apiAddress + "/user/" + id;
//                 return $http.get(url);
//             },
//             createUser: function (user) {
//                 url = globalConfig.apiAddress + "/user";
//                 return $http.post(url, user);
//             },
//             updateUser: function (user) {
//                 url = globalConfig.apiAddress + "/user/" + user._id;
//                 return $http.put(url, user);
//             },
//             deleteUser: function (id) {
//                 url = globalConfig.apiAddress + "/user/" + id;
//                 return $http.delete(url);
//             }
//         };
//     }
// })();
