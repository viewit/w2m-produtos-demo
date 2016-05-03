module.exports = {
  doPage: function(requestData, cb) {
      var context ={} ;

      var cheerio = require('cheerio');
      var $ = cheerio.load(requestData.body, { decodeEntities: true  });

      context["titulo"] = $("title").text();


      context["primeiroMenu"] = [];

      $(".wrapper .new-menu-nav li").each(function(){
    	  var item = {    			  
             texto: $(this).text()
    	  }
    	  context["primeiroMenu"].push( item );
      });

      //busca
      context["textoBusca"] = $("#PalavraChave").attr("placeholder");

      context["menuLateral"] = [];
      $(".filtro .menu_cat ul li").each(function(){
          var item = {            
               texto: $(this).text().replace("&nbsp;", " ")
          }
        context["menuLateral"].push( item );
      });

      context["menuCorrente"] = $(".filtro .menu_cat").next().text();


      //filtros
      context["menuFiltros"] = [];
      $(".filtro .wrapper .mCustomScrollbar .mCustomScrollBox .mCSB_container ul li").each(function(){
          var item = {            
               textoFiltro: $(this).find("span").text().replace("&nbsp;", " ")
          }
        context["menuFiltros"].push( item );        
      });

      //produtos

      context["produtos"] = [];

      $("#produtosArraste .produtos ul").each(function(){
        var item = {            
            produtoTitulo: $(this).find(".InfoArraste").text(),  
            img_src: $(this).find("a img").attr("src"),
            produtoNome: $(this).find(".nome a").text(),  
            unidades: $(this).find(".gramatura").text(),  
            de: $(this).find(".precoDe").text().replace("&nbsp;", " "), 
            fabricante: $(this).find(".textoChamada").text(), 
            por: $(this).find(".precoPor").text().replace("&nbsp;", " "),  
            btnAdd: $(this).find(".btnAddCart").html().replace("&agrave;", "á"), 
            promocao: $(this).find(".flagDesc").text(), 
            temPromocao: $(this).find(".foto > div").length == 2,                    
        }
        context["produtos"].push( item );
      });
      
      //ordenar
      context["ordenar"] = [];
      $("#FiltroOrdenacao option").each(function(){
          var item = {            
               textoOrdenar: $(this).text()
          }
        context["ordenar"].push( item );  
        console.log(item.textoOrdenar)      
      });


      var ret = { sendHeaders: requestData.serverHeaders, context: context, statusCode: requestData.statusCode} ;
      cb( ret ) ;
  }
 
 
};
