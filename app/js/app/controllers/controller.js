app.controller('userController', ['$scope', 'userService', '$location', function(scope, userService, location){
    scope.pageName = "Home Page";
    scope.saveData = true;
    scope.success = false;
    scope.error = false;

    scope.getAllEmployeeData = function(){
        userService.getEmployee().then(function(data){
            scope.employee = data;
        }, function(err){
            scope.error = true;
            scope.errorMsg = "Something is wrong";
            console.log(err);
        });
    };
    scope.getAllEmployeeData();

    scope.editEmployee = function(id){
        scope.userId = id;
        userService.getEmployeeUsingId(id).then(function(data){
            scope.users = data[0];
            scope.saveData = false;
        }, function(err){
            scope.error = true;
            scope.errorMsg = "Something is wrong";
            console.log(err);
        });
    };

    scope.insertEmployeeData = function(data){
        data.phone = Number(data.phone);
        userService.createEmployee(data).then(function(data){
            if(data.affectedRows == 1){
                scope.success = true;
                scope.successMsg = "Data is successfully inserted";
                scope.getAllEmployeeData();
            }
        }, function(err){
            scope.error = true;
            scope.errorMsg = "Something is wrong";
            console.log(err);
        });
    };

    scope.updateEmployeeData = function(id, data){
        data.phone = Number(data.phone);
        data.status = 1;
        userService.editEmployeeData(id, data).then(function(data){
            if(data.affectedRows == 1){
                scope.success = true;
                scope.successMsg = "Data is successfully updated";
                scope.getAllEmployeeData();
            }
        }, function(err){
            scope.error = true;
            scope.errorMsg = "Something is wrong";
            console.log(err);
        });
    };

    scope.deleteEmployee = function(id){
        userService.deleteEmployeeData(id).then(function(data){
          if(data.affectedRows == 1){
              scope.success = true;
              scope.successMsg = "Your record is successfully deleted";
              scope.getAllEmployeeData();
          }
        }, function(err){
            scope.error = true;
            scope.errorMsg = "Something is wrong";
            console.log(err);
        });
    };

    scope.loginUser = function(users){
        userService.loginUsers(users).then(function(data){
            if(data.length == 0){
                scope.error = true;
                scope.errorMsg = "Incorrect User ID & Password";
            }else{
                scope.error = false;
                scope.success = true;
                scope.successMsg = "Successfully Login";
                console.log(data);
                location.url("/home")
            }
            
        }, function(err){
            console.log(err);
            scope.error = true;
            scope.errorMsg = "Something is wrong";
        });
    }
}]);
