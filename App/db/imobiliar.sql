-- MySQL Script generated by MySQL Workbench
-- ter 18 abr 2017 16:48:21 BRT
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema u172775243_imobi
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema u172775243_imobi
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `u172775243_imobi` DEFAULT CHARACTER SET utf8 ;
USE `u172775243_imobi` ;

-- -----------------------------------------------------
-- Table `u172775243_imobi`.`permissao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `u172775243_imobi`.`permissao` ;

CREATE TABLE IF NOT EXISTS `u172775243_imobi`.`permissao` (
  `idPermissao` INT NOT NULL AUTO_INCREMENT,
  `nomePermissao` VARCHAR(45) NULL,
  PRIMARY KEY (`idPermissao`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u172775243_imobi`.`carteiraimovel`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `u172775243_imobi`.`carteiraimovel` ;

CREATE TABLE IF NOT EXISTS `u172775243_imobi`.`carteiraimovel` (
  `idcarteiraimovel` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idcarteiraimovel`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u172775243_imobi`.`carteiraCliente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `u172775243_imobi`.`carteiraCliente` ;

CREATE TABLE IF NOT EXISTS `u172775243_imobi`.`carteiraCliente` (
  `idCarteiraCliente` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idCarteiraCliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u172775243_imobi`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `u172775243_imobi`.`usuario` ;

CREATE TABLE IF NOT EXISTS `u172775243_imobi`.`usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `emailUsuario` VARCHAR(45) NULL,
  `senhaUsuario` VARCHAR(45) NULL,
  `nomeUsuario` VARCHAR(45) NULL,
  `sobrenomeUsuario` VARCHAR(45) NULL,
  `creciUsuario` VARCHAR(45) NULL,
  `createAtUsuario` TIMESTAMP NULL,
  `updateAtUsuario` TIMESTAMP NULL,
  `statusUsuario` VARCHAR(45) NULL,
  `fkPermissao` INT NOT NULL,
  `fkCarteiraImovel` INT NOT NULL,
  `fkCarteiraCliente` INT NOT NULL,
  PRIMARY KEY (`idUsuario`),
  INDEX `fk_usuario_permissao_idx` (`fkPermissao` ASC),
  INDEX `fk_usuario_carteiraimovel1_idx` (`fkCarteiraImovel` ASC),
  INDEX `fk_usuario_carteiraCliente1_idx` (`fkCarteiraCliente` ASC),
  CONSTRAINT `fk_usuario_permissao`
    FOREIGN KEY (`fkPermissao`)
    REFERENCES `u172775243_imobi`.`permissao` (`idPermissao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_carteiraimovel1`
    FOREIGN KEY (`fkCarteiraImovel`)
    REFERENCES `u172775243_imobi`.`carteiraimovel` (`idcarteiraimovel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_carteiraCliente1`
    FOREIGN KEY (`fkCarteiraCliente`)
    REFERENCES `u172775243_imobi`.`carteiraCliente` (`idCarteiraCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u172775243_imobi`.`galeria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `u172775243_imobi`.`galeria` ;

CREATE TABLE IF NOT EXISTS `u172775243_imobi`.`galeria` (
  `idGaleria` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idGaleria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u172775243_imobi`.`proprietario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `u172775243_imobi`.`proprietario` ;

CREATE TABLE IF NOT EXISTS `u172775243_imobi`.`proprietario` (
  `idProprietario` INT NOT NULL AUTO_INCREMENT,
  `nomeProprietario` VARCHAR(45) NULL,
  `sobrenomeProprietario` VARCHAR(45) NULL,
  `emailProrietario` VARCHAR(45) NULL,
  `statusProprietario` VARCHAR(45) NULL,
  `createAtProprietario` TIMESTAMP NULL,
  `updateAtProprietario` TIMESTAMP NULL,
  PRIMARY KEY (`idProprietario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u172775243_imobi`.`imovel`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `u172775243_imobi`.`imovel` ;

CREATE TABLE IF NOT EXISTS `u172775243_imobi`.`imovel` (
  `idImovel` INT NOT NULL AUTO_INCREMENT,
  `enderecoImovel` VARCHAR(45) NULL,
  `bairroImovel` VARCHAR(45) NULL,
  `cidadeImovel` VARCHAR(45) NULL,
  `iptuImovel` FLOAT NULL,
  `conominioImovel` FLOAT NULL,
  `idadeConstrucaoImovel` INT NULL,
  `valorLocacaoImovel` FLOAT NULL,
  `valorVendaImovel` FLOAT NULL,
  `condicoesImovel` VARCHAR(45) NULL,
  `createAtImovel` TIMESTAMP NULL,
  `updateAtImovel` TIMESTAMP NULL,
  `statusImovel` VARCHAR(10) NULL,
  `fkGaleria` INT NOT NULL,
  `tipoImovel` VARCHAR(15) NULL,
  `dormitorioImovel` INT NULL,
  `suiteImovel` INT NULL,
  `copaImovel` TINYINT(1) NULL,
  `garagemCobertaImovel` TINYINT(1) NULL,
  `areaTerrenoImovel` FLOAT NULL,
  `banheirosImovel` INT NULL,
  `salaJantarImovel` INT NULL,
  `mobiliadoImovel` TINYINT(1) NULL,
  `areaConstruidaImovel` FLOAT NULL,
  `outrosDadosImovel` LONGTEXT NULL,
  `elevadorImovel` INT NULL,
  `areaUtilImovel` FLOAT NULL,
  `andaresImovel` INT NULL,
  `areaTotalImovel` FLOAT NULL,
  `fkProprietario` INT NOT NULL,
  `fkCarteiraImovel` INT NOT NULL,
  PRIMARY KEY (`idImovel`),
  INDEX `fk_imovel_galeria1_idx` (`fkGaleria` ASC),
  INDEX `fk_imovel_proprietario1_idx` (`fkProprietario` ASC),
  INDEX `fk_imovel_carteiraimovel1_idx` (`fkCarteiraImovel` ASC),
  CONSTRAINT `fk_imovel_galeria1`
    FOREIGN KEY (`fkGaleria`)
    REFERENCES `u172775243_imobi`.`galeria` (`idGaleria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_imovel_proprietario1`
    FOREIGN KEY (`fkProprietario`)
    REFERENCES `u172775243_imobi`.`proprietario` (`idProprietario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_imovel_carteiraimovel1`
    FOREIGN KEY (`fkCarteiraImovel`)
    REFERENCES `u172775243_imobi`.`carteiraimovel` (`idcarteiraimovel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u172775243_imobi`.`imagem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `u172775243_imobi`.`imagem` ;

CREATE TABLE IF NOT EXISTS `u172775243_imobi`.`imagem` (
  `idImagem` INT NOT NULL AUTO_INCREMENT,
  `caminhoImagem` VARCHAR(45) NULL,
  `nomeImagem` VARCHAR(45) NULL,
  `statusImagem` VARCHAR(45) NULL,
  `createAtImagem` TIMESTAMP NULL,
  `updateAtImagem` TIMESTAMP NULL,
  `fkGaleria` INT NOT NULL,
  PRIMARY KEY (`idImagem`),
  INDEX `fk_imagem_galeria1_idx` (`fkGaleria` ASC),
  CONSTRAINT `fk_imagem_galeria1`
    FOREIGN KEY (`fkGaleria`)
    REFERENCES `u172775243_imobi`.`galeria` (`idGaleria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u172775243_imobi`.`cliente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `u172775243_imobi`.`cliente` ;

CREATE TABLE IF NOT EXISTS `u172775243_imobi`.`cliente` (
  `idCliente` INT NOT NULL AUTO_INCREMENT,
  `nomeCliente` VARCHAR(45) NULL,
  `emailCliente` VARCHAR(45) NULL,
  `enderecoCliente` VARCHAR(45) NULL,
  `createAtCliente` TIMESTAMP NULL,
  `updateAtCliente` TIMESTAMP NULL,
  `statusCliente` VARCHAR(45) NULL,
  `fkAgenda` INT NOT NULL,
  PRIMARY KEY (`idCliente`),
  INDEX `fk_cliente_agenda1_idx` (`fkAgenda` ASC),
  CONSTRAINT `fk_cliente_agenda1`
    FOREIGN KEY (`fkAgenda`)
    REFERENCES `u172775243_imobi`.`carteiraCliente` (`idCarteiraCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u172775243_imobi`.`telefone`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `u172775243_imobi`.`telefone` ;

CREATE TABLE IF NOT EXISTS `u172775243_imobi`.`telefone` (
  `idTelefone` INT NOT NULL AUTO_INCREMENT,
  `numeroTelefone` BIGINT NULL,
  `descricaoTelefone` VARCHAR(45) NULL,
  `createAtTelefone` TIMESTAMP NULL,
  `updateAtTelefone` TIMESTAMP NULL,
  `statusTelefone` VARCHAR(15) NULL,
  PRIMARY KEY (`idTelefone`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u172775243_imobi`.`interesse`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `u172775243_imobi`.`interesse` ;

CREATE TABLE IF NOT EXISTS `u172775243_imobi`.`interesse` (
)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
