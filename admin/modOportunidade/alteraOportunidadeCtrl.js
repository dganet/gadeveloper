app.controller("alteraOportunidadeCtrl", function($scope, $http,$location , $timeout, $sessionStorage ){
//Pega o Id do Usuario Logado
var idUsuario = sessionStorage.getItem('usuario.id');

$scope.quatro = false;

//Lista os Usuarios
	$http.get('../App/oportunidade/list').success(function(data){
		$scope.oportunidades = data;

	});

// Seleciona o usuario e mostra do Lado. 
$scope.dados = function (values){

	$scope.quatro = true;

	var id = $scope.id = values;

		$http.get('../App/oportunidade/list/'+ id).success(function(data){
		$scope.oportunidade = data[0];
		
	});

	}
//	

  //scope.master vazio;
  $scope.master = {};
  //Ocultando o Alert Mensagem .
  $scope.mensagem = true;
  //Ocultando o Alert Mensagem .
  $scope.mensagemDeleta = true;

//*************UPDATE NOTICIA *********************// 

//Passa os valores do form em Objeto no "values"
  $scope.add = function(values, FormOportunidade) {

	 $scope.dados = values;
	 var id = $scope.dados.id;

    // Enviado os valores em objetos para api/user do php/slim
    $http.put('../App/oportunidade/update/'+ idUsuario , values).success(function(){
      // Depois mandando para mesma pagina  
      $scope.activePath = $location.path('/user/oportunidade/altera');
         
      // Funcão de exibir a mensagem de sucesso em 5 segundos.
      $scope.mensagem = false;
      $timeout(function () {
               $scope.mensagem = true;
           },10000);
    });

    $http.get('../App/oportunidade/list').success(function(data){
		$scope.oportunidades = data;

	});

	$scope.dados = function (values){

	$scope.quatro = true;

	var id = $scope.id = values;

		$http.get('../App/oportunidade/list/'+ id).success(function(data){
		$scope.oportunidade = data[0];
		
	});

	}



     //Resentando os input do formulario .
    $scope.reset = function() {
    // Copiando os valores vazio do scope.master 
      $scope.oportunidade = angular.copy($scope.master);
    };
    // Ativando a função
    $scope.reset();

  };



//*************DELETE NOTICIA *********************// 

//Passa os valores do form em Objeto no "values"
  $scope.deleta = function(values) {

    // Enviado os valores em objetos para api/user do php/slim
    $http.delete('../App/oportunidade/delete/'+ values).success(function(){
    // Depois mandando para mesma pagina  
    $scope.activePath = $location.path('/user/oportunidade/altera');
   
      // Funcão de exibir a mensagem de sucesso em 5 segundos.
      $scope.mensagemDeleta = false;
      $timeout(function () {
               $scope.mensagemDeleta = true;
           },10000);
    });
    
    //Resentando os input do formulario .
    $scope.reset = function() {
    // Copiando os valores vazio do scope.master 
      $scope.oportunidade = angular.copy($scope.master);
    };
    // Ativando a função
    $scope.reset();
         

    $http.get('../App/oportunidade /list').success(function(data){
    $scope.oportunidades = data;

  });
$scope.quatro = false;
  };

});