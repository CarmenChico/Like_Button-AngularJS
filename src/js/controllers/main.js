function MainController ($scope) {
    // $scope.value = [];
    $scope.Likes = "Likes";
      $scope.count = 0;
      var countUp = true;


      $scope.addLike = function(){
        if (countUp===true) {
          $scope.count = $scope.count + 1
          // $scope.count++
          // $scope.count += 1
          // $scope.count += 5
        } else {
          $scope.count = $scope.count - 1
        }
        if ($scope.count < 0) {
          $scope.count = 0
        }

        if ($scope.count===1) {
            $scope.Likes = "Like";
        } else {
          $scope.Likes = "Likes";
        }

    }
    $scope.toggle=function(){
        countUp = !countUp
    }
};






MainController.$inject = ['$scope'];
export { MainController };


// return ($scope.count + "Likes");
