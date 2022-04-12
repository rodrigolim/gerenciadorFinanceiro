# Organize suas Finanças Online
Sistema para Gestão Financeira Online feito em Javascript.
- Back-end: Node JS + Express + Mongoose (MongoDB) 
- Front-end: Angular + Bootstrap

## Pré-requisitos
NPM, MongoDB

## Enviroment variables
* PORT
* MONGODB_USER
* MONGODB_PASSWORD
* MONGODB_DATABASE

## Instalação
- inicie o serviço do mongoDB em um terminal:
```
mongod
```

- via CMD, localize a pasta root do projeto e execute (dependências backend):
```
npm install
```
- na pasta app, execute também (dependências frontend):
```
npm install
```

- após, na pasta root do projeto, inicie um servidor local, por exemplo:
```
nodemon .
```

- no browser, abra o endereço local na porta configurada no arquivo index.js
```
localhost:8000/
```