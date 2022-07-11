# SiGPat - Sistema de Gestão de Pedidos de Patentes

## Requisitos
* MySQL Server instalado com usuário root e senha root;
* NodeJs Instalado;
* Yarn instalado;

## Como Instalar
* Após Baixar do GitHub execute no Terminal os comandos abaixo:
```bash
yarn
```
* Instalar os plugins:
```bash
yarn add md5
yarn add mysql
```
* Para subir o servidor digite:
```bash
yarn dev
```

## Plugins Instalados
* O Sistema utiliza o banco de dados MySQL[^mysql] 
* Usuário e senha utilizam a criptografia MD5[^md5].


[^md5]: [Criptografia MD5](https://yarnpkg.com/package/md5)
[^mysql]: [Plugin MySQL](https://yarn.pm/mysql)