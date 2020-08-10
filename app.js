var app=angular.module('myApp', []);

app.controller('mainCtrl', function($scope){
    
    $scope.imena=[];
    $scope.imenaBezPonavljanja=[];
    $scope.brojaci=[];
    
    $scope.unesi = function(){
        $scope.imena.push($scope.unos);
    };  
    
    $scope.obracun = function(){
        var i=0;
        while(i<$scope.imena.length){
            var trenutnoIme=$scope.imena[i];
            var j=0;
            var imaVec=false;
            while(j<$scope.imenaBezPonavljanja.length){
                if(trenutnoIme===$scope.imenaBezPonavljanja[j]){
                    imaVec=true;
                    $scope.brojaci[j]++;
                }

                j++;
            }
            if(!imaVec){
                $scope.brojaci.push(1);
                $scope.imenaBezPonavljanja.push(trenutnoIme);
            }
            i++;
        };
    };
});