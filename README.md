# BloggerGetFeed
Script para obter feeds do blogger usando Google JSAPI

<h3>Instalação</h3>
Adicionar biblioteca Jquery ao código

```HTML
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
```

Adicionar biblioteca Google JSAPI

```HTML
<script type="text/javascript" src="http://www.google.com/jsapi"></script>
```

Adicionar plugin feed.js
```HTML
<script type="text/javascript" src='feed.js'></script>	
```
ou

```HTML
<script type='text/javascript'>
//<![CDATA[
  /* Código do arquivo feed.js */
//]]>
</script>
```

Inicializar Google JSAPI

```HTML
<script type="text/javascript">google.load("feeds", "1");</script>
```

<h3>Configuração</h3>

Configuração do script feed.js

```JavaScript
//Id do Elemento que recebe os posts recentes
var idDisplay = "recent-posts";
//URL do Feed do Blooger
var feedURL = " Your feed Blogger URL ";
//Máximo de posts por página
var feedPostLimit = 3;
//Limite de caracteres do titulo
var feedTitleLimit = 80;
//URL da imagem de preloader
var loaderImg = "preloader.gif";
//Mensagem ao não ter feeds a exibir
var feedMessage = "There are no items to display!";
//Texto do Botão Anterior (Paginação)
var feedBtnPrev = "Previous";
//Texto do Botão Próximo (Paginação)
var feedBtnNext = "Next";
//Texto de erro ao carregar feed
var feedErrorMsg = "Error to load feed!";
//Nome individual das classes (para aplicar CSS)
var feedClassPrev = 'prev';
var feedClassNext = 'next';
var feedClassDisplay = 'display';
var feedClassTitle = 'title';
var feedClassSnippet = 'snippet';
var feedClassPreloader = 'preloader';
var feedClassPagination = 'pagination';
var feedClassMessage = 'noFeed';
var feedClassErrorMsg = 'error';
```
