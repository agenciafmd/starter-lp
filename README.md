## Projeto inicial para `Landing Page` (sem uso de Laravel)

Para maiores informações do processo de desenvolvimento como um todo,
olhar a
[Wiki do projeto starter da F&MD](https://github.com/agenciafmd/starter/wiki)

## Habilitando o BrowserSync

- Copiar e renomear o arquivo `resources/js/environment.example.js` para
  `resources/js/environment.js`
- Alterar o dominio (`domain`) no arquivo `environment.js`
  -   Não é interessante deixar o arquivo environment.js direto no
      projeto pois cada desenvolvedor pode colocar o nome que quiser no
      dominio do site localmente


### Detalhe sobre Environment.js
`resources/js/environment.js` É o centralizador de informações do projeto, 
sua criação tem como base para ser utilizado como se fosse o env do laravel,
com isso é possível automatizar o processo de codificação das páginas html 
de maneira mais simples. No arquivo fica disponível a customização de seo
de página, domínio, nome do diretório do .net, definição de páginas html
existentes no projeto para ser utilizado no critical-css.


### Detalhe sobre Critical-path.js 
No arquivo `webpack.mix.js` temos as configurações de dimensões de tela e 
páginas do critical-css, com ajuda do Puppeteer ele faz a leitura de todas as
classes css e extrai para arquivos separados por página (css) em 
`public/css/critical/`. 
Com base nos arquivos css gerado do critical-css, o script 
`resources/js/critical-path` tem como função pegar o estilo css dos arquivos em
`public/css/critical/` para adicionar dentro do head das páginas html existentes 
no `public` projeto. 
Com esse recurso garantimos uma melhoria de performance do site. 

### Detalhe sobre Post-prod.js
O script `resources/js/post-prod` tem como função pegar os dados PostScripts 
que estão em `resources/js/environment.js`, e alterar em um novo arquivo na
`public`.

Para codificação dos scripts foi utilizado o fs do node.js para ler/gravar 
arquivos, em conjunto utilizamos sistema de 'tags' para localizar onde deve
ocorrer a gravação do novo conteúdo.
Para que as alterações do critical-path.js e post-prod.js sejam executadas,
deve-se utilizar o comando npm run prod ou npm run production. Com isso os
scripts serão executados e as alterações de conteúdos vão estar presentes 
nos arquivos htmls que estiver no `public` do projeto.

### Detalhes sobre `Docker`
No arquivo Dockerfile é necessário alterar a string `Meu-App-Docker`  para o nome correspondente do projeto. <br>
O mesmo acontece para o arquivo Deploy.yml, altere as strings `meuappdocker` para o nome do projeto, porém descartando caracteres especiais e letras maiúsculas. <br>
Para executar o projeto em modo watch é necessário subir o arquivo docker-compose, para isso abra o docker-compose.yml e encontre a linha `container_name: {NAME_PROJECT}` e altere a string `{NAME_PROJECT}` para o nome que desejar dar ao seu container. <br>
Na linha `ports: - "12345:80"` é possivel escolher a porta que deseja executar sua aplicação. Basta alterar a porta 12345 pela de sua preferencia, porém é importante não modificar a porta 80 que é a padrão onde o container do docker estará executando. <br>
A última linha do arquivo contém o comando que será responsável por atualizar as views em tempo de execução. Nele é necessário modificar o comando `--project Meu-App-Docker` colocando o nome do seu projeto .Net <br>
Por fim, basta entrar na pasta do projeto pelo seu terminal e executar o comando `docker-compose up`. Sua aplicação estará disponível na porta que foi especificada.
