<?php
/**
*	Gerenciamento de rotas atraves do Framework Slim3
*	@author Guilherme Brito
*	@version 1.0
*/
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

//$app->delete('/usuario/delete/{id}', \Api\Controller\UsuarioController::class . ':inativar');
// $app->post('/login', function(Request $request, Response $response){
// 		$associado = new \Api\Controller\AssociadoController();
// 		$post = json_decode($request->getBody(), true);
// 		$associado = $associado->logar($post);
// 		$response = $response->withHeader('Content-type', 'application/json');
// 		$response = $response->withJson($associado);
// 		return $response;
// 	});
		$app->post('/associado/save/{id}', \Api\Controller\AssociadoController::class . ':cadastrar');
// 	$app->post('/save/{id}', function(Request $request, Response $response, $args){
// 		$associado = new \Api\Controller\AssociadoController();
// 		$post = json_decode($request->getBody(), true);
// 		$post['usuario_id'] = $args['id'];
// 	  	$associado = $associado->cadastrar($post);
// 		$response = $response->withHeader('Content-type', 'application/json');
// 		$response = $response->withJson($associado);
// 		return $response;
// 	});
// 	//Lista Todos os Associadosdo
	$app->get('/associado/list', \Api\Controller\AssociadoController::class . ':listaAtivo');
// 	//lista associados co status AGUARDANDOVAGA
	$app->get('/associado/listaguardando', \Api\Controller\AssociadoController::class . ':listaAguardandoVaga');
// 	$app->get('/listaguardando', function(Request $request, Response $response){
// 		$associadoController = new \Api\Controller\AssociadoController();
// 		$associado = $associadoController->listaAguardandoVaga();
// 		$response = $response->withHeader('Content-type', 'application/json');
// 		$response = $response->withJson($associado);
// 		return $response;
// 	});
// 	//Lista associados com status AGUARDANDOVAGA e com ID {id}
	$app->get('/associado/listaguardando/{id}', \Api\Controller\AssociadoController::class . ':listaAguardandoVagaId');
// 	$app->get('/listaguardando/{id}', function(Request $request, Response $response, $args){
// 		$associadoController = new \Api\Controller\AssociadoController();
// 		$associado = $associadoController->listaAguardandoVagaId($args['id']);
// 		$response = $response->withHeader('Content-type', 'application/json');
// 		$response = $response->withJson($associado);
// 		return $response;
// 	});
// 	//Lista associados com status APROVACAO
	$app->get('/associado/listaprovacao', \Api\Controller\AssociadoController::class . ':listaAguardandoAprovacao');
// 	$app->get('/listaprovacao', function(Request $request, Response $response){
// 		$associadoController = new \Api\Controller\AssociadoController();
// 		$associado = $associadoController->listaAguardandoAprovacao();
// 		$response = $response->withHeader('Content-type', 'application/json');
// 		$response = $response->withJson($associado);
// 		return $response;
// 	});
// 	//Lista Geral
	$app->get('/associado/listageral', \Api\Controller\AssociadoController::class . ':listaGeral');
// 	$app->get('/listageral', function(Request $request, Response $response){
// 		$associadoController = new \Api\Controller\AssociadoController();
// 		$associado = $associadoController->listaGeral();
// 		$response = $response->withHeader('Content-type', 'application/json');
// 		$response = $response->withJson($associado);
// 		return $response;
// 	});
// 	//Lista Associado por ID
	$app->get('/associado/list/{id}', \Api\Controller\AssociadoController::class . ':listaPorId');
// 	$app->get('/list/{id}', function(Request $request, Response $response, $args){
// 		$associado = new \Api\Controller\AssociadoController();
// 		$associado = $associado->listaPorId($args['id']);
// 		$response = $response->withHeader('Content-type', 'application/json');
// 		$response = $response->withJson($associado);
// 		return $response;
// 	});
// 	//Lista os Associados Inativos
	$app->get('/associado/inativo', \Api\Controller\AssociadoController::class . ':listaInativo');
// 	$app->get('/inativo', function(Request $request, Response $response){
// 		$associado = new \Api\Controller\AssociadoController();
// 		$associado = $associado->listaInativo();
// 		$response = $response->withHeader('Content-type', 'application/json');
// 		$response = $response->withJson($associado);
// 		return $response;
// 	});
// 	//Atualiza os Associados
// 	$app->put('/update/{id}', function(Request $request, Response $response, $args){
// 		$post = json_decode($request->getBody(), true);
// 		$post['usuario_id'] = $args['id'];
// 		$associado = new \Api\Controller\AssociadoController();
// 		if ($associado->atulizaCadastro($post)){
// 			$response = $response->withHeader('Content-type', 'application/json');
// 			$response = $response->withJson([true]);
// 		}else{
// 			$response = $response->withHeader('Content-type', 'application/json');
// 			$response = $response->withJson([false]);
// 		}
// 		return $response;
// 	});
// 	$app->put('/ative/{id}', function(Request $request, Response $response, $args){
// 		$associado = new \Api\Controller\AssociadoController();
// 		$associado = $associado->ativaCadastro($args['id']);
// 		$response = $response->withHeader('Content-type', 'application/json');
// 		$response = $response->withJson($associado);
// 		return $response;
// 	});
// 	//Inativa um Associado
// 	$app->delete('/delete/{id}', function (Request $request, Response $response, $args){
// 		$associado = new \Api\Controller\AssociadoController();
// 		return $associado->inativar($args['id']);
// 	});
// 	//Lista Associados que estão em um determinado veiculo
	$app->get('/associado/listveiculo/{id}', \Api\Controller\AssociadoController::class . ':listaAssociadoVeiculo');
// 	$app->get('/listveiculo/{id}', function(Request $request, Response $response, $args){
// 		$associado = new \Api\Controller\AssociadoController();
// 		$associado = $associado->listaAssociadoVeiculo($args['id']);
// 		$response = $response->withHeader('Content-type', 'application/json');
// 		$response = $response->withJson($associado);
// 		return $response;
// 	});
// 	$app->post('/picture/{id}', function(Request $request, Response $response, $args){
// 		$associado = new \Api\Controller\AssociadoController();
// 		$post = json_decode($request->getBody(), true);
// 		$post['idAssoc'] = $args['id'];
// 		$associado = $associado->picture($post);
// 		$response = $response->withHeader('Content-type', 'application/json');
// 		$response = $response->withJson($associado);
// 		return $response;
// 	});
