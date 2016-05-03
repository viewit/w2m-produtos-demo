$(function() {
  
  	//Impedir comportamento padrão de recarregar a página
	$( ".filtroMenu > li > a" ).attr("href", "javascript:void(0)");

	//Exibir e ocultar o menu de opções
	$( ".filtroMenu > li > a" ).click(function() {
		var verifica = $(this).next().is(":visible");
	  	
		if(verifica){
			$(this).next().fadeOut();
		}else{
			$(this).next().fadeIn();
		}

	});

	//Inserir ícones nos menus do topo
	function inserirIcone(i, classe){
		$(".menu-topo").find("a").eq(i).addClass(classe);
	}
	inserirIcone(0, "icon-menu");
	inserirIcone(1, "icon-edit");
	inserirIcone(2,"icon-basket");
});