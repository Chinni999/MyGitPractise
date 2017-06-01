app.controller('homeController', function ($scope, commonService) {
    $scope.data = null;
    var date = new Date();
    $scope.getCalender = function () {
        $(angular.element('#datetimepicker1')).datetimepicker();
        $(angular.element('#datetimepicker2')).datetimepicker();
    }
    $scope.getCalender();

    commonService.getData(date).then(function (data) {
        $scope.data = JSON.parse(data);
        // $scope.originalData = $scope.data;
        $scope.getUniqueTesterName();
        $scope.getUniqueTestName();
        $scope.totalItems = $scope.data.length;

    });
    //  $scope.verified = false;

    ////////////////////////
    Array.prototype.contains = function (v) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === v) return true;
        }
        return false;
    };
    Array.prototype.unique = function () {
        var arr = [];
        for (var i = 0; i < this.length; i++) {
            if (!arr.contains(this[i])) {
                arr.push(this[i]);
            }
        }
        return arr;
    }
    ////////////////////////////////
    //Seletion of Unique Tester Name

    $scope.getUniqueTesterName = function () {
        $scope.dataArr = [];
        for (var i = 0; i < $scope.data.length; i++) {
            $scope.dataArr.push($scope.data[i].tester_name);
        }
        $scope.dataArr = $scope.dataArr.unique();

    };
    $scope.tester = "All";
    $scope.getSelectedTester = function (tester) {
        $scope.tester = tester;
    };

    //Seletion of Unique Test Name

    $scope.getUniqueTestName = function () {
        $scope.dataArr1 = [];
        for (var i = 0; i < $scope.data.length; i++) {
            $scope.dataArr1.push($scope.data[i].test_name);
        }
        $scope.dataArr1 = $scope.dataArr1.unique();

    };

    $scope.testName = "All";
    $scope.getSelectedTestName = function (testName) {
        $scope.testName = testName;
    };

    // Select Y for All in Verified Colum
    $scope.selectAll = function () {
        if ($scope.verified) {
            for (var i = 0; i < $scope.data.length; i++) {
                $scope.data[i].verified = "Y";
            }
            $scope.$apply();
        } else {
            for (var i = 0; i < $scope.data.length; i++) {
                $scope.data[i].verified = "N";
            }

            $scope.$apply();
        }
    }
    $scope.verified = 'Y';
    $scope.getVerifiedValue = function (val) {
        $scope.verified = val;
    }

    // Pagination


    $scope.currentPage = 1;
    $scope.numPerPage = 5;

    $scope.paginate = function (value) {
        var begin, end, index;
        begin = ($scope.currentPage - 1) * $scope.numPerPage;
        end = begin + $scope.numPerPage;
        index = $scope.data.indexOf(value);
        return (begin <= index && index < end);
    };

    $scope.recovery_type = 'soft recovery';
    $scope.selectRecovertyType = function (recType) {
        $scope.recovery_type = recType;
    }

});

/*
.controller('defectsContoller', function($scope, $http) {
$http.get("https://54.164.137.214:8089/servicesNS/nobody/ATT_Testlab/storage/collections/data/ATT__defect__kvs?"query={"issue_date":{"$gt":<date range from>}}")
.then(function (response) {$scope.defectsData = response.data.records;});
}); 

*/

//https://54.164.137.214:8089/servicesNS/nobody/ATT_Testlab/storage/collections/data/ATT__defect__kvs?%22query={%22issue_date%22:{%22$gt%22:Thu%20Oct%2027%202016%2022:03:19%20GMT-0400%20(Eastern%20Daylight%20Time)}}%22