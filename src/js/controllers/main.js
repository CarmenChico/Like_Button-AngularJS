function MainController ($scope) {
    // $scope.value = [];
      $scope.count = 0;
      $scope.Like = "Like";
      $scope.Likes = "Likes";

      $scope.count = function(){

      if ($scope.count===1) {
          return ($scope.count + "Like");
      } else {
        return ($scope.count + "Likes");
      }
    }
};






MainController.$inject = ['$scope'];
export { MainController };
