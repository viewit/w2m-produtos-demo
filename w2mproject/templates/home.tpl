<!DOCTYPE html><html>
<head>
	<meta charset="UTF-8">
	<link href="/static/css/main.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" type="text/css" href="/static/css/font-icon/styles.css">

	<title>{{titulo}}</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

</head>
<body>
	<div class="pagina">
	
		<header class="menu-topo">
			<ul>
			{{#each primeiroMenu}}
	           <li> <a href=""> {{texto}}</a> </li>                  
	        {{/each}}
	    	</ul>
		</header>

		<div class="buscar">
			<input type="text" placeholder="{{textoBusca}}" >
			<a href="" class="btnBusca icon-search"></a>
		</div>

		<ul class="menuLateral">	
			{{#each menuLateral}}
			<li><a class="icon-arrow-right" href="">{{texto}}</a></li>
			{{/each}}
		</ul>

		<ul class="filtroMenu">
			<li>
				<a href="">{{menuCorrente}}</a>
				<ul>
					{{#each menuFiltros}}
					<li><a><span>{{textoFiltro}}</span></a></li>
					{{/each}}
				</ul>
			</li>
		</ul>

		<article>
			<div class="ordenar">
				Ordenar
				<select>
					{{#each ordenar}}
						<option value="">{{textoOrdenar}}</option>
					{{/each}}
				</select>
			</div>
			<ul>
				{{#each produtos}}
				<li>					
					<h2>{{ produtoTitulo }}</h2>
					<p class="produtoNome">{{produtoNome}}</p>
					<div class="produtoFoto">
						<img src="http://produtos-demo.w2m.io/{{img_src}}" title="" />
						{{#if temPromocao}}
							<span>{{promocao}}</span>	
						{{/if}}					
					</div>	
					<p>{{unidades}}</p>	
					<p class="produtoFabricante">{{fabricante}}</p>	
					<p class="textoDe">{{de}}</p>	
					<p>{{por}}</p>
					<div class="btnComprar">
						<a>{{btnAdd}}</a>
					</div>
				</li>
				{{/each}}
			</ul>
		</article>

	</div>
	<script type="text/javascript"  src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
	<script type="text/javascript" src="/static/js/home.js"></script>

</body>
</html>
