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


## Novos recursos para utilizar com npm run prod
####### Add to 16-07-2020

O arquivo `environment.js` passa a ser um centralizador de alteração de 
dados da `resources/html/index.html` para `public/index.html` (semelhante ao env 
que está no starter-laravel)

No arquivo é possível customizar alguns dados que deveríamos adicionar manualmente, 
ex: título de página, descrição, gtm, etc...

A propriedade 'domain' é utilizada no critical-css  para executar o build do recurso

Dentro de 'postStrings' temos as propriedades a serem customizadas conforme citado
acima. 

Para implementação dos dois novos recursos ( Critical-css e post-prod ) foi criado
dois arquivos em que são: `/resources/js/critical-path.js` e `/resources/js/post-prod.js`

### Detalhes sobre `/resources/js/critical-path.js`

O Script faz o uso file system do nodejs que é feito a leitura da 
`/public/index.html` e da `/public/css/critical/index.css` 
e fica armazenado em variavéis.  O segundo arquivo foi gerado pelo critical-css que
está no `webpack.mix.js` que tem como objetivo gerar o css do canvas que está configurado
em dimensions, assim iremos adicionar o estilo dentro do head da página 
`(public/index.html)` para ganho de performance de carregamento.

No script localizaremos a string `<!--fmd:criticalPath-->` que será trocada pelo
conteúdo do css que foi gerado pelo critical-css, depois é gravado pelo file 
system e é gerado um novo arquivo com a modificação na `/public/index.html`

### Detalhes sobre `/resources/js/post-prod.js`

O Script é semelhante ao de cima, faz a leitura e depois grava com os dados 
modificados. Sua diferença é a inclusão do arquivo `environment.js` ao script. 
É executa um foreach no objeto 'postStrings' para localizar o identificador
que foi incluído na página `/resources/html/index.html` e assim feito a troca de 
conteúdo que está presente no arquivo `environment.js`.

Portanto é necessário que a string do arquivo `/resources/html/index.html` seja 
correspondente a propriedade que está criada no arquivo `environment.js`

exemplo: <br>
`/resources/html/index.html` temos `<title><!--fmd:titlePage--></title>` <br>
`environment.js` temos `titlePage: 'Starter-LP F&MD',`

O match é feito através do titlePage, caso seja necessário incluir um novo, seguir
os passos abaixo:

`/resources/html/index.html` criar `<!--fmd:exemploNovo-->` <br>
`environment.js` criar dentro de postScript `exemploNovo: 'novo conteúdo',`

Para adicionar os novos recursos para `/public/` execute o comando:

`npm run prod`

O comando vai executar o script de produção, critical-path e post-prod