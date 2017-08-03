 app.controller("imovelCtrl", function($scope, $http, $timeout , $location, $sessionStorage, serviceEnderecos){
//Pegando Token
 var token = sessionStorage.getItem('usuario.token');
//Oculta a Mensagem de sucesso
$scope.mensagemSucesso = false;

//Scope Vazio
$scope.master = {};


//*************CADASTRA NOVO CLIENTE *********************// 

//Passa os valores do form em Objeto no "values"
  $scope.add = function(values, formProprietario) {
            // Enviado os valores em objetos para api/user do php/slim
            $http.post('App/cliente/save' + token , values).success(function(){
                // Funcão de exibir a mensagem de sucesso em 5 segundos.
                $scope.mensagemSucesso = true;
                $timeout(function () {
                        $scope.mensagemSucesso = false;
                    },10000);
                //Resentando os input do formulario .
                $scope.reset = function() {
                // Copiando os valores vazio do scope.master 
                $scope.cliente = angular.copy($scope.master);
                };
                // Ativando a função
                $scope.reset();
             });


  };

//*************CADASTRA IMOVEL *********************// 
    var p = $scope.proprietario = {};
    var i = $scope.imovel = {};

    //Mudar o Css do Processo em ativo
    $scope.passo1 = 'background:gray; color:white';
    //Ativar o Form do Check CPF
    $scope.formCPF = 'ativo';

    //Oculta Formulario do Proprietario
    $scope.formProprietario = false;
    
    // 
    // 
    // PRIMEIRO PASSO
    //
    // 
     
    //função para verificar cpf
    $scope.checkCPF = function (value){
        // Cria a variavel com o CPF
        var cpf = value;
        //Consula no Back-end se existe o cpf
        $http.post('App/proprietario/cpf/'+ token, value).success(function(response){
            
            $scope.formCPF = 'inativo';
            var flag = response.flag;
                //Se não existir
                if (flag == false){
                    //Printa na tela o formulario para cadastar
                    $scope.formProprietario = 'ativo';
                    $scope.proprietario = cpf;
                }else{
                    //Printa na tela com os dados
                    $scope.formProprietario = 'ativo';    
                    $scope.proprietario = response;
                }
        });
    };

        //função de voltar
        $scope.back = function (value){
            
                if (value == 'cpf'){
                $scope.formCPF = 'ativo';
                $scope.formProprietario = 'inativo';
                }

                if (value == 'proprietario'){
                $scope.formCPF = 'inativo';
                $scope.formEndereco = 'inativo';  
                $scope.passo1 = 'background:gray; color:white'; 
                $scope.passo2 = {};
                $scope.formProprietario = 'ativo';
                }
                
            };
        //
        //
        //    
        //SEGUNDO PASSO
        //
        //
        //
            $scope.primeiroPasso = function(dados){
            //, Coleta dados do proprietario
             $scope.proprietario.push = dados;
             $scope.inputBairro = false;
           
            //Segundo Passo                 
            $scope.passo1 = {};
            $scope.passo2 = 'background:gray; color:white';
            $scope.formProprietario = 'inativo';
            $scope.selectBairro = true;
            $scope.btnNewBairro = false;
            $scope.btnBairroBack = false;
            
            // Ativa o Formulario do Segundo Passo     
            $scope.formEndereco = 'ativo';      

            // Load Estados
            serviceEnderecos.getEstados().success(function (response){
            $scope.estados = response;
            });
            // Load Cidades referente ao Estado
            $scope.executeCidade = function (id){
                    serviceEnderecos.getCidadesEstado(id).success(function(response){
                    $scope.cidades = response;
                $scope.selectBairro = true;
                $scope.btnBairroBack = false;
                $scope.inputBairro = false;
                });
            };

         
             // Load Bairros referente a Cidade
            $scope.executeBairro = function (id){
                var idCidade = id;
                 serviceEnderecos.getBairros(id).success(function(response){ 
                     var flag = response.flag;
                     if (flag == false ){
                         $scope.inputBairro = true;
                         $scope.selectBairro = false;
                         $scope.btnBairroBack = true;
                         $scope.btnNewBairro = false;
                         //Salva um novo Bairro
                         $scope.bairro = function(values){
                            values['cidadeId'] = idCidade;    
                            $http.post('App/bairro/save', values).success(function(response){
                            });
                         }
                     }else {       
                     $scope.bairros = response;   
                     $scope.btnNewBairro = true;
                     };
                 });

            };
                
               $scope.newBairro = function(){
                $scope.selectBairro = false;
                $scope.btnNewBairro = false;
                $scope.btnBairroBack = true;
                $scope.inputBairro = true;
               };

                $scope.backBairro = function(){
                $scope.selectBairro = true;
                $scope.btnNewBairro = true;
                $scope.btnBairroBack = false;
                $scope.inputBairro = false;
               };
        };     
     //
     //
     // TERCEIRO PASSO
     //
     //
        $scope.segundoPasso = function (values){
            $scope.imovel.push = values;
            $scope.passo1 = {};
            $scope.passo2 = {};
            $scope.passo3 = 'background:gray; color:white';
            $scope.formEndereco = false;
            // Ativa o Formulario do Segundo Passo     
            $scope.formImovel = 'ativo';   
 
            
        };
            //Operaçoes
           $scope.operacoes =   [
                {"idOperacao":1,"nomeOperacao":'Locacao'},
                {"idOperacao":2,"nomeOperacao":'Venda'}
            ];
                   
            //Função que Seleciona os tipos 
            $scope.selectOperation = function (value){
        
                if (value == null){
                    $scope.operacao = 'inativo';
                };
                
                if (value == "Locacao"){
                    $scope.operacao = 'ativo';
                    $scope.tipos = [
                    {"idTipo":1,"tipoImovel":'Apartamento'},
                    {"idTipo":2,"tipoImovel":'Casa'},
                   ];
                };
                
                if(value == "Venda"){
                    $scope.operacao = 'ativo';
                    $scope.tipos = [
                    {"idTipo":1,"tipoImovel":'Apartamento'},
                    {"idTipo":2,"tipoImovel":'Casa'},
                    {"idTipo":3,"tipoImovel":'Terreno'},
                   ];
                };
                
            };
     
     $scope.selectTipo = function(values){
        if(value == "Apartamento"){
            //Ativar todos os Inputs
            $scope.elevador = true;
        }    
     }
 });//END do controller