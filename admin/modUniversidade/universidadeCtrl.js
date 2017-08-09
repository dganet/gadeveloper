app.controller("universidadeCtrl",function($scope, restful,$location , $timeout , $sessionStorage){
  //scope.master vazio;
  $scope.master = {};
  //Ocultando o Alert Mensagem .
  $scope.mensagemSucesso = true;
  $scope.mensagemAtualizado = true;
  $scope.mensagemDelete = true;
    
  //Lista todas Universidades
	restful.universidadeList().success(function(data){
		$scope.universidades = data;       
	});

// Show modal
$scope.dados = function (id){
		restful.universidadeListId(id).success(function(data){
		$scope.universidade = data[0];	
        });
};
//*************CADASTRA NOVA UNIVERSIDADE *********************// 

//Passa os valores do form em Objeto no "values"
  $scope.add = function(values, FormUniversidade) {
    // Enviado os valores em objetos para api/user do php/slim
    restful.universidadeSave(values).success(function(){
      // Fecha o Modal
      $('#closeModalPost').modal('hide');
    
    //Lista todas Universidades
    restful.universidadeList().success(function(data){
		$scope.universidades = data;       
	});
        
      // Funcão de exibir a mensagem de sucesso em 5 segundos.
      $scope.mensagemSucesso = false;
      $timeout(function () {
               $scope.mensagemSucesso = true;
           },10000);
    });
     //Resentando os input do formulario .
    $scope.reset = function() {
    // Copiando os valores vazio do scope.master 
      $scope.universidade = angular.copy($scope.master);
    };
    // Ativando a função
    $scope.reset();

  };

//*************UPDATE UNIVERSIDADE *********************//   

//Passa os valores do form em Objeto no "values"
  $scope.put = function(values, FormUniversidade) {
	 var id = values.id;

    // Enviado os valores em objetos para api/user do php/slim
    restful.universidadePut(id,values).success(function(){
     // Fecha o Modal
      $('#closeModalUpdate').modal('hide');

        //Lista todas Universidades
        restful.universidadeList().success(function(data){
            $scope.universidades = data;       
        });
         
      // Funcão de exibir a mensagem de sucesso em 5 segundos.
      $scope.mensagemAtualizado = false;
      $timeout(function () {
               $scope.mensagemAtualizado = true;
           },10000);

    });

};

//*************DELETE UNIVERSIDADE *********************// 

//Passa os valores do form em Objeto no "values"
  $scope.del = function(values) {
    // Enviado os valores em objetos para api/user do php/slim
    restful.universidadeDel(values).success(function(){
    // Fecha o Modal
      $('#closeModalDel').modal('hide');
        
     //Lista todas Universidades
        restful.universidadeList().success(function(data){
            $scope.universidades = data;       
        });
        
      // Funcão de exibir a mensagem de sucesso em 5 segundos.
      $scope.mensagemDelete = false;
      $timeout(function () {
               $scope.mensagemDelete = true;
           },10000);

    });
  };
    
});