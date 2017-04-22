app.controller('userController', ['$scope', 'userService', function(scope, userService){
    scope.pageName = "Home Page";

    scope.getAllEmployeeData = function(){
        userService.getEmployee().then(function(data){
            scope.users = data;
        }, function(err){
            console.log(err);
        });
    };
    scope.getAllEmployeeData();

    scope.getEmployeeDataById = function(id){
        userService.getEmployeeUsingId(id).then(function(data){
            scope.users = data;
        }, function(err){
            console.log(err);
        });
    };
    //scope.getEmployeeDataById(2);

    scope.insertEmployeeData = function(data){
        data.phone = Number(data.phone);
        userService.createEmployee(data).then(function(data){
            if(data.affectedRows == 1){
                alert("Success");
            }
        }, function(err){
            console.log(err);
        });
    };

    scope.deleteUser = function(id){
        userService.deleteEmployeeData(id).then(function(data){
          if(data.affectedRows == 1){
              scope.getAllEmployeeData();
          }
        }, function(err){
            console.log(err);
        });
    };

    scope.loginUser = function(users){
        userService.loginUsers(users).then(function(data){
            scope.users = data;
        }, function(err){
            console.log(err);
        });
    }
}]);

//Controller.$inject = ;

// function Controller($scope, $rootScope, userService, $state, $stateParams) {
//     $scope.users = [];
//
//     if ($state.current.name == "users") {
//         $rootScope.Title = "User Listing";
//         userService.getUsers().then(function(res) {
//             $scope.users = res.data;
//         }).catch(function(err) {
//             console.log(err);
//         });
//
//         $scope.deleteUser = function(id) {
//             if (confirm('Are you sure to delete?')) {
//                 userService.deleteUser(id).then(function(res) {
//                     if (res.data == "deleted") {
//                         $state.go("users", {}, { reload: true });
//                     }
//                 }).catch(function(err) {
//                     console.log(err);
//                 });
//             }
//         };
//     } else if ($state.current.name == "edit") {
//         $rootScope.Title = "Edit User";
//         var id = $stateParams.id;
//         userService.getUser(id).then(function(res) {
//             $scope.user = res.data;
//         }).catch(function(err) {
//             console.log(err);
//         });
//
//         $scope.saveData = function(user) {
//             if ($scope.userForm.$valid) {
//                 userService.updateUser(user).then(function(res) {
//                     if (res.data == "updated") {
//                         $state.go("users");
//                     }
//                 }).catch(function(err) {
//                     console.log(err);
//                 });
//             }
//         };
//     } else if ($state.current.name == "create") {
//         $rootScope.Title = "Create User";
//         $scope.saveData = function(user) {
//             $scope.IsSubmit = true;
//             if ($scope.userForm.$valid) {
//                 userService.createUser(user).then(function(res) {
//                     if (res.data == "created") {
//                         $state.go("users");
//                     }
//                 }).catch(function(err) {
//                     console.log(err);
//                 });
//             }
//         };
//     }
// };
