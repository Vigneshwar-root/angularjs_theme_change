app.controller('biographyController', function($scope) {

  // TODO: contains all chiyaan vikram pic
  $scope.vikramPic = "./assets/img/Vikram_Home.png";

  $scope.picOne = function() {
    $scope.vikramPic = "./assets/img/cv.png";
  }
  $scope.picTwo = function() {
    $scope.vikramPic = "./assets/img/dhil.png";
  }
  $scope.picThree = function() {
    $scope.vikramPic = "./assets/img/cv2.png";
  }
  $scope.picFour = function() {
    $scope.vikramPic = "./assets/img/kk.png";
  }
  $scope.picFive = function() {
    $scope.vikramPic = "./assets/img/cv3.png";
  }
});
