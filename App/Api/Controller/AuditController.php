<?php
namespace Api\Controller;

class AuditController{
	
	/**
	* @param Array $data
	*
		
	*/
	public static final function audit($array, $acao, $tabela){
		$temp;
		$data['usuario_id'] = $array['usuario_id'];
		$data['tabela']		= $tabela;
		unset($array['usuario_id']);
		foreach ($array as $key => $value) {
			$temp .="$key => $value";
		}
		if ($acao == "INSERT"){
			$data['acao'] = "INSERINDO INFORMAÇÃO ".$temp;
		}
		$audit = new \Api\Model\Entity\Audit($data);
		$audit->setCreateAt(date("Y-m-d H:m:s"));
		$audit->save();
	}
}