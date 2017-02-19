<?php 
namespace Api\Controller;
use \Api\Model\Entity\Associado, \Api\Controller\Log;

class AssociadoController implements Controller {

	public function logar($data){
		Log::Message("Tentando Logar o Associado: ".$data['cpf']);
		$associado = new Associado();
		$flag =  $associado->select(array('where' => array(
								'AND' => array(
										'cpf' => $data['cpsf'],
										'senha' => md5($data['senha']),
										'status' => 'ATIVO'
												)
									)
								)
							);
		if (count($flag)==0){
			$flag['check'] = false;
			Log::Error("Cpf ou senha invalidos");
			return $flag;
		}else{
			$flag['check'] = true;
			Log::Message("Associado logado com sucesso!");
			return $flag;
		}
	}

	// Salva as Informações do Associado
	public function cadastrar($data){
		Log::Message("Tentando Cadastrar o Associado ". $data['nome']);
		$associado = new Associado($data);
		$associado->status = "ATIVO";
		$associado->createAt = $_SERVER['REQUEST_TIME'];
		try{
			$associado->save();
			Log::Message("Usuário ". $data['nome'] ." cadastrado com sucesso !");
			return true;
		}catch (Exeption $e){
			Log::Error("Exceção : ".$e->getMessage());
			return false;
		}
	}

	//Lista todos os associados
	public function listaTudo(){
		$associado = new Associado();
		try{
			Log::Message("Listando Associados");
			return $associado->select(array('where' => array('status' => 'ATIVO')));
		}catch (Exeption $e){
			Log::Error("Não foi possivel entregar a lista de Associados ".$e);
			return false;
		}
	}
	//Lista Por Id
	public function listaPorId($id){
		$associado = new Associado();
		
		try{
			Log::Message("Solicitado informações sobre o Associado ".$i);
			return $associado->select(array('where' => array('id' => $id)));
		}catch (Exception $e){
			Log::Error("Não foi possivel entregar informações sobre o Associado ".$i);
			return false;
		}
	}
	//Update de cadastro
	public function atulizaCadastro($data){
		$associado = new Associado($data);
		$associado->createAt = $_SERVER['REQUEST_TIME'];
		try{
			Log::Message("Atualizando informações do Associado");
			return $associado->update();
		}catch (Exception $e){
			Log::Error("Não foi possivel atualizar o usuario ".$e);
			return false;
		}
	}
	//Desativa o cliente
	public function inativar($id){
		$associado = new Associado();
		$associado->id = $id;
		$associado->createAt = $_SERVER['REQUEST_TIME'];
		$associado->status = 'INATIVO';
		try{
			Log::Message("Inativando Associado ".$id);
			$associado->update();
		}catch (Exception $e){
			Log::Error("Não foi possivel inativar o Associado");
			return false;
		}
	}
	
	public function listaInativo(){
		$associado = new Associado();
		try{
			Log::Message("Listando Associados Inativos");
			return $associado->select(array('where' => array('status' => 'INATIVO')));
		}catch (Exeption $e){
			Log::Error("Não foi possivel entregar a lista de Associados Inativos ".$e);
			return false;
		}
	}
	
	public function test(){
		$associado = new Associado();
		return $associado->select(array('where' => array('AND' => array('id' => '1', 'nome' => 'guilherme', 'bla' => 11))));
	}


	

}