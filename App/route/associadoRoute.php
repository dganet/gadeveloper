<?php
/**
*	Classe responsavel pelas rotas referente aos associados
*
*/
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app->post('/login', function(Request $request, Response $response){
		$associado = new \Api\Controller\AssociadoController();
		$post = json_decode($request->getBody(), true);
		$associado = $associado->logar($post);
		if ($associado['check']){
			unset($associado['check']);
			$response = $response->withHeader('Content-type', 'application/json');
			$response = $response->withJson($associado);
		}else{
			$response = $response->withHeader('Content-type', 'application/json');
			$response = $response->withJson([false]);
		}
		return $response;
	});

	$app->post('/save/{id}', function(Request $request, Response $response, $args){
		$associado = new \Api\Controller\AssociadoController();
		$post = json_decode($request->getBody(), true);
		$post['usuario_id'] = $args['id'];
		if ($associado->cadastrar($post)){
			$response = $response->withHeader('Content-type', 'application/json');
			$response = $response->withJson([true]);
		}else{
			$response = $response->withHeader('Content-xtype', 'application/json');
			$response = $response->withJson([false]);
		}
		return $response;
	});
	//Lista Todos os Associados
	$app->get('/list', function(Request $request, Response $response){
		$associadoController = new \Api\Controller\AssociadoController();
		$associado = $associadoController->listaTudo();
		$response = $response->withHeader('Content-type', 'application/json');
		$response = $response->withJson($associado);
		return $response;
	});
	$app->get('/listaguardando', function(Request $request, Response $response){
		$associadoController = new \Api\Controller\AssociadoController();
		$associado = $associadoController->listaAguardandoVaga();
		$response = $response->withHeader('Content-type', 'application/json');
		$response = $response->withJson($associado);
		return $response;
	});
	$app->get('/listaprovacao', function(Request $request, Response $response){
		$associadoController = new \Api\Controller\AssociadoController();
		$associado = $associadoController->listaAguardandoAprovacao();
		$response = $response->withHeader('Content-type', 'application/json');
		$response = $response->withJson($associado);
		return $response;
	});
	//Lista Associado por ID
	$app->get('/list/{id}', function(Request $request, Response $response, $args){
		$associado = new \Api\Controller\AssociadoController();
		$associado = $associado->listaPorId($args['id']);
		$response = $response->withHeader('Content-type', 'application/json');
		$response = $response->withJson($associado);
		return $response;
	});
	$app->get('/listadeespera', function(Request $request, Response $response, $args){
		$associado = new \Api\Controller\AssociadoController();
		$associado = $associado->listaEsperaSite($args['id']);
		$response = $response->withHeader('Content-type', 'application/json');
		$response = $response->withJson($associado);
		return $response;
	});

	//Lista os Associados Inativos
	$app->get('/inativo', function(Request $request, Response $response){
		$associado = new \Api\Controller\AssociadoController();
		$associado = $associado->listaInativo();
		$response = $response->withHeader('Content-type', 'application/json');
		$response = $response->withJson($associado);
		return $response;
	});
	//Atualiza os Associados
	$app->put('/update/{id}', function(Request $request, Response $response, $args){
		$post = json_decode($request->getBody(), true);
		$post['usuario_id'] = $args['id'];
		$associado = new \Api\Controller\AssociadoController();
		if ($associado->atulizaCadastro($post)){
			$response = $response->withHeader('Content-type', 'application/json');
			$response = $response->withJson([true]);
		}else{
			$response = $response->withHeader('Content-type', 'application/json');
			$response = $response->withJson([false]);
		}
		return $response;
	});
	//Inativa um Associado
	$app->delete('/delete/{id}', function (Request $request, Response $response, $args){
		$associado = new \Api\Controller\AssociadoController();
		return $associado->inativar($args['id']);
	});