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
yarn add react-bootstrap bootstrap
yarn add react-router-dom
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/free-regular-svg-icons

```
* Para subir o servidor digite:
```bash
yarn dev
```

## Plugins Instalados
* O Sistema utiliza o banco de dados MySQL[^mysql] 
* Usuário e senha utilizam a criptografia MD5[^md5].
* Biblioteca Bootstrap[^bootstrap]
* React-Router[^react-router]
* Icones da biblioteca Font Awesome[^icons]


[^md5]: [Criptografia MD5](https://yarnpkg.com/package/md5)
[^mysql]: [Plugin MySQL](https://yarn.pm/mysql)
[^bootstrap]: [Bootstrap Docs](https://react-bootstrap.github.io/getting-started/introduction/)
[^react-router]: [React-Router](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
[^icons]: [Tutorial Font Awesome React](https://fontawesome.com/v5/docs/web/use-with/react)