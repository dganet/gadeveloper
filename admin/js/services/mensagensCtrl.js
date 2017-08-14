app.service('mensagensCtrl', function ($scopo ,$timeout) {

  app.service('restful', function ($http,$sessionStorage) {
 //Pega o id do usuario logado
 var token = sessionStorage.getItem('usuario.id');

//REQUISICOES DO BACK-END CAMINHOS

   //Classes Usuario
   $usuarioLogin = '../App/usuario/login'; // loga o usuario
   $usuarioSave =  '/App/usuario/save'; // Salva Usuario

    //Classes associado
   $associadoSave = '../App/associado/save'; // Salva Associado
   $associadoList = '../App/associado/list'; // Lista todo Associados
   $associadoListId = '../App/associado/list/';// Lista associado referente ao ID
   $associadoPut = '../App/associado/update/';// Uptades na associado
   $associadoDel = '../App/associado/delete/';// associado Deleta
   
   //Classes Noticias
   $noticiaSave = '../App/post/save'; // Salva Noticia
   $noticiaList = '../App/post/list'; // Lista todas os Noticias
   $noticiaListId = '../App/post/list/';// Lista Noticia referente ao ID
   $noticiaPut = '../App/post/update/';// Uptades no Noticia
   $noticiaDel = '../App/post/delete/';// Noticia Deleta

   //Classes Opotunidades
   $oportunidadeSave = '../App/oportunidade/save'; // Salva oportunidade
   $oportunidadeList = '../App/oportunidade/list'; // Lista todas os oportunidades
   $oportunidadeListId = '../App/oportunidade/list/';// Lista oportunidade referente ao ID
   $oportunidadePut = '../App/oportunidade/update/';// Uptades no oportunidade
   $oportunidadeDel = '../App/oportunidade/delete/';// oportunidade Deleta

   //Classes PostCuso
   $cursoSave = '../App/curso/save'; // Salva curso
   $cursoList = '../App/curso/list'; // Lista todas os cursos
   $cursoListId = '../App/curso/list/';// Lista curso referente ao ID
   $cursoPut = '../App/curso/update/';// Uptades no curso
   $cursoDel = '../App/curso/delete/';// oportunidade Deleta

    //Classes Universidade
   $universidadeSave = '../App/universidade/save'; // Salva Universidade
   $universidadeList = '../App/universidade/list'; // Lista todas Universades
   $universidadeListId = '../App/universidade/list/';// Lista Universidade referente ao ID
   $universidadePut = '../App/universidade/update/';// Uptades na Universidade
   $universidadeDel = '../App/universidade/delete/';// Universidade Deleta

   //Classes Curso
   $cursofaculdadeSave = '../App/cursofaculdade/save'; // Salva Curso
   $cursofaculdadeList = '../App/cursofaculdade/list'; // Lista todas os Cursos
   $cursofaculdadeListId = '../App/cursofaculdade/list/';// Lista curso referente ao ID
   $cursofaculdadePut = '../App/cursofaculdade/update/';// Uptades no curso
   $cursofaculdadeDel = '../App/cursofaculdade/delete/';// Curso Deleta

   //Classes Veiculo
   $veiculoSave = '../App/veiculo/save'; // Salva Veiculo
   $veiculoList = '../App/veiculo/list'; // Lista todas os Veiculos
   $veiculoListGeral = '../App/associado/listageral'; // Lista todas os Veiculos Geral 
   $veiculoListAssociadoLinhaAguardando = '..//App/associado/listaguardando/'; // Lista Associados vinculado a Linha Aguardando
   $veiculoListAssociadoLinhaAtivo = '../App/associado/listveiculo/'; // Lista Associados vinculado a Linha Aguardando
   $veiculoListId = '../App/veiculo/list/';// Lista Veiculo referente ao ID
   $veiculoPut = '../App/veiculo/update/';// Uptades no Veiculo
   $veiculoDel = '../App/veiculo/delete/';// Veiculo Deleta


    
   //MODULO PEFIL
   $updatePicture = '/App/imagem'; //Update Foto


//|#######################################################|
//|############# **  MODULO USUARIOS ** ##################|
//|#######################################################|

   //Logando
    var _usuarioLogin = function (values){
        return  $http.post($usuarioLogin , values);
    };
   //Salva novo Usuario
    var _usuarioSave = function (values){
        return  $http.post($usuarioSave, values);
    };

//|#######################################################|
//|############# **  MODULO ASSOCIADO ** ###################|
//|#######################################################|
   //Inseri nova Universiade
    var _associadoSave = function (values){
        return  $http.post($associadoSave + token, values);
    };
    //Lista todas associados
    var _associadoList = function (values){
        return  $http.get($associadoList);
    };
    //Lista associado referente ao ID
    var _associadoListId = function (id){
          return  $http.get($associadoListId + id);
    };
    //Update de associado
    var _associadoPut = function (id , values){
          return  $http.put($associadoPut + id , values);
    };
    //Update de associado
    var _associadoDel = function (values){
          return  $http.delete($associadoDel + token + values);
    };
//|#######################################################|
//|############# **  MODULO NOTICIAS ** ###################|
//|#######################################################|
   //Inseri nova Noticiais
    var _noticiaSave = function (values){
        return  $http.post($noticiaSave + token, values);
    };
    //Lista todas noticias
    var _noticiaList = function (values){
        return  $http.get($noticiaList);
    };
    //Lista noticia referente ao ID
    var _noticiaListId = function (id){
          return  $http.get($noticiaListId + id);
    };
    //Update de noticia
    var _noticiaPut = function (id , values){
          return  $http.put($noticiaPut + id , values);
    };
    //Update de noticia
    var _noticiaDel = function (values){
          return  $http.delete($noticiaDel + token + values);
    };
//|#######################################################|
//|############# **  MODULO POST CURSO ** ###################|
//|#######################################################|
   //Inseri novo Curso
    var _cursoSave = function (values){
        return  $http.post($cursoSave + token , values);
    };
    //Lista todas cursos
    var _cursoList = function (values){
        return  $http.get($cursoList);
    };
    //Lista curso referente ao ID
    var _cursoListId = function (id){
          return  $http.get($cursoListId + id);
    };
    //Update de curso
    var _cursoPut = function (id , values){
          return  $http.put($cursoPut + id , values);
    };
    //Update de curso
    var _cursoDel = function (values){
          return  $http.delete($cursoDel + token + values);
    };
//|#######################################################|
//|############# **  MODULO OPORTUNIDADES ** ###################|
//|#######################################################|
   //Inseri nova Noticiais
    var _oportunidadeSave = function (values){
        return  $http.post($oportunidadeSave + token , values);
    };
    //Lista todas oportunidades
    var _oportunidadeList = function (values){
        return  $http.get($oportunidadeList);
    };
    //Lista oportunidade referente ao ID
    var _oportunidadeListId = function (id){
          return  $http.get($oportunidadeListId + id);
    };
    //Update de oportunidade
    var _oportunidadePut = function (id , values){
          return  $http.put($oportunidadePut + id , values);
    };
    //Update de oportunidade
    var _oportunidadeDel = function (values){
          return  $http.delete($oportunidadeDel + token + values);
    };

//|#######################################################|
//|############# **  MODULO UNIVERSIDADE ** ###################|
//|#######################################################|
   //Inseri nova Universiade
    var _universidadeSave = function (values){
        return  $http.post($universidadeSave + token , values);
    };
    //Lista todas Universidades
    var _universidadeList = function (values){
        return  $http.get($universidadeList);
    };
    //Lista Universidade referente ao ID
    var _universidadeListId = function (id){
          return  $http.get($universidadeListId + id);
    };
    //Update de Universidade
    var _universidadePut = function (id , values){
          return  $http.put($universidadePut + id , values);
    };
    //Update de Universidade
    var _universidadeDel = function (values){
          return  $http.delete($universidadeDel + token + values);
    };
//|#######################################################|
//|############# **  MODULO CURSO ** ###################|
//|#######################################################|
   //Inseri nova Curso
    var _cursofaculdadeSave = function (values){
        return  $http.post($cursofaculdadeSave + token , values);
    };
    //Lista todas Curso
    var _cursofaculdadeList = function (values){
        return  $http.get($cursofaculdadeList);
    };
    //Lista Curso referente ao ID
    var _cursofaculdadeListId = function (id){
          return  $http.get($cursofaculdadeListId + id);
    };
    //Update de Curso
    var _cursofaculdadePut = function (id , values){
          return  $http.put($cursofaculdadePut + id , values);
    };
    //Update de Curso
    var _cursofaculdadeDel = function (values){
          return  $http.delete($cursofaculdadeDel + token + values);
    };

//|#######################################################|
//|############# **  MODULO VEICULO ** ###################|
//|#######################################################|
   //Inseri nova Veiculo
    var _veiculoSave = function (values){
        return  $http.post($veiculoSave + token , values);
    };
    //Lista todas Veiculo
    var _veiculoList = function (values){
        return  $http.get($veiculoList);
    };
    //Lista todas Veiculo Geral 
    var _veiculoListGeral = function (values){
        return  $http.get($veiculoListGeral);
    };
    //Lista  Pre-Associado referente a linha 
    var _veiculoListAssociadoLinhaAguardando = function (id){
        return  $http.get($veiculoListAssociadoLinhaAguardando + id);
    };
    //Lista todas Associados Ativos 
    var _veiculoListAssociadoLinhaAtivo = function (id){
        return  $http.get($veiculoListAssociadoLinhaAtivo + id);
    };
    //Lista Veiculo referente ao ID
    var _veiculoListId = function (id){
          return  $http.get($veiculoListId + id);
    };
    //Update de Veiculo
    var _veiculoPut = function (id , values){
          return  $http.put($veiculoPut + id , values);
    };
    //Update de Veiculo
    var _veiculoDel = function (values){
          return  $http.delete($veiculoDel + token + values);
    };
//|#######################################################|
//|############# **  MODULO PERFIL ** ################|
//|#######################################################|

   //Update Picture
    var _updatePicture = function (values){
        return  $http.put($updatePicture + token , values);
    };

//|#######################################################|
//|############# **  RETURNS ** ##########################|
//|#######################################################|

    return {

        //Return Modulo Cliente
        updatePicture : _updatePicture,
    }

});

});