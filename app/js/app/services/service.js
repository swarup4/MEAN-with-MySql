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
