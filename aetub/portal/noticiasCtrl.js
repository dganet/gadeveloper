
    app.controller("noticiasCtrl", function($scope, $http, $timeout , $location,  $sessionStorage){
  $scope.tinymceModel = 'Initial content';
    $scope.mensagem = true;
    //Exibi Todas Noticias e Oculta quando clica em Leia Mais.
    $scope.leiaMais = true;
	 
  				 
    // Enviando requisição via post no methodo Http


$scope.voltar = function (){
	$scope.leiaMais = true;
	$scope.Noticia = false;

};

$scope.dados = function (values){
		//Oculta Todas Noticias e exibi apenas uma.
	$scope.leiaMais = false;
	$scope.Noticia = true;

		var id = $scope.id = values;

		$http.get('App/post/list/'+ id).success(function(data){
		$scope.post = data[0];
		
	});

};

$http.get('App/post/list').success(function(data){
	$scope.posts = data;


});
	

 
});