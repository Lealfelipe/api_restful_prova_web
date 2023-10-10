# api_restful_prova_web

Para execução da API é necessário realizar alteração do username e password do banco de dados local no arquivo "config.json"

Feito isso é necessário verificar se o sequelize-cli está instalado

Confirmando isso é necessário a criação do modelo database utilizando o comando: "npx sequelize-cli db:create"
Após é necessário realizar a criação da tabela com o comando: "npx sequelize-cli db:migrate"

Após pode levantar o servidor.

Para os testes das operações CRUD foi utilizado o software: POSTMAN

Metodo POST: Seleciona o metodo POST e digita a url: localhost:3000/alunos
o tipo de arquivo a ser enviado é JSON contendo os atributos nome e idade.

Metodo GET: Seleciona o metodo GET e digite a url: localhost:3000/alunos/id 
alterando o parametro pelo ID do usuário que deseja buscar.

Outra forma de testar o metodo GET é pela url: localhost:3000/alunos/:id 
desta forma é necessário na aba "Params" do POSTMAN indicar o valor do ID do usuário que deseja buscar.

Metodo PUT: Seleciona o metodo PUT e digita a url: localhost:3000/alunos/id ou localhost:3000/alunos/:id 
alterando o parametro ID pelo valor ou indicando o valor de ID na aba "Params" o tipo de arquivo a ser enviado ao banco é JSON contendo os atributos nome e idade que deseja ser atualizado

Metodo DELETE: Selecione o metodo DELETE e digite a url: localhost:3000/alunos/id ou localhost:3000/alunos/:id 
alterando o parametro ID pelo valor ou indicando o valor de ID na aba "Params", id do usuário a ser excluído do banco de dados


