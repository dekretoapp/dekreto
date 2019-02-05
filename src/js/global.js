$(document).ready(function(){

	//Dropdown
    $('.dropdown-trigger').dropdown();

    //tabs
    $('.tabs').tabs();


	//Loop para trazer e filtrar as baladas do Lista.Json
	for (var i = 0; i < baladas.length; i++) {
		var item = baladas[i];

		var htmlItem = 

		'<div class="card card-item ' +item.ordemDia+'">' +
		'<a href="detalhe.html?idCasa='+item.idCasa+'&idFesta='+item.idFesta+'" title="Ir para a festa">' +
		'<div class="card horizontal">' +
		'<div class="card-image">' +
		'<img src="images/'+item.idCasa+'/logo-'+item.idCasa+'.png" alt="">' +
		'</div>' +
		'<div class="card-stacked">' +
		'<div class="card-content">' +
		'<h3>'+item.nome+'</h3>'+
		'<h4>'+item.nomeFesta+'</h4>'+
		'</div>' +
		'<div class="card-content">' +
		'<div class="party-type openbar left">'+item.tipoOpenbar+'</div>' +
		'<div class="party-type vip left">'+item.tipoVip+'</div>' +
		'<div class="party-location right"><span class="fa fa-map-marker-alt"></span>'+item.regiao+'</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'<div class="card-action">' +
		'<div class="value left"><span class="fa fa-dollar-sign"></span>'+item.precoVariacao+'</div>' +
		'<div class="music-gender"><span class="fa fa-music"></span>'+item.genero+'</div>' +
		'</div>' +
		'</a>' +
		'</div>';

		/* LISTA AS FESTAS */
		$(".card-list .cards").append(htmlItem);

		function iconeTipoFesta() {
			if($(".party-type").is(":empty")) {
				$(".party-type:empty").hide()
			}
		}iconeTipoFesta()

		/* SEPARA AS FESTAS POR DIAS */
		function filtraDias() {
			$(".card-item").hide();
			if($("#dia1").find(".dia1")){
				$("#dia1 .dia1").show()
			}
			if($("#dia2").find(".dia2")){
				$("#dia2 .dia2").show()
			}
			if($("#dia3").find(".dia3")){
				$("#dia3 .dia3").show()
			}
			if($("#dia4").find(".dia4")){
				$("#dia4 .dia4").show()
			}
			if($("#dia5").find(".dia5")){
				$("#dia5 .dia5").show()
			}
			if($("#dia6").find(".dia6")){
				$("#dia6 .dia6").show()
			}
			
		}filtraDias();
	}


	 $('#data1').pushpin({
    	top: $('#header').offset().top
    });
    $('#data2').pushpin({
    	top: $('#data2').offset().top
    });
    $('#data3').pushpin({
    	top: $('#data3').offset().top
    });
    $('#data4').pushpin({
    	top: $('#data4').offset().top
    });
    $('#data5').pushpin({
    	top: $('#data5').offset().top
    });
    $('#data6').pushpin({
    	top: $('#data6').offset().top
    });

});

/* 	REGEX DA URL  */
function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}


/* Código muito doido pra trazer as informações da festa clicada na lista inicial da home */
var idFesta = getParameterByName('idFesta');
var balada = baladas.filter(function(balada){
	if (balada.idFesta == idFesta) {
		return balada;
	}
})[0];

/* Código muito doido pra trazer as informações da casa clicada na lista inicial da home */
var idCasa = getParameterByName('idCasa');
var casa = casas.filter(function(casa){
	if (casa.idCasa == idCasa) {
		return casa;
	}
})[0];


//Informações da festa após o click na lista da index. A lista é preenchida conforme o loop acima
document.getElementById('party-name').innerHTML = balada.nomeFesta;
document.getElementById('party-cover').innerHTML = "<img src='images/"+balada.idCasa+"/covers/2019/"+balada.mes+"/"+balada.diaMes+".png'>"
document.getElementById('party-logo').innerHTML = "<img src='images/"+balada.idCasa+"/logo-"+balada.idCasa+".png'>"
document.getElementById('diaSemanaFesta').innerHTML = balada.diaSemana;
document.getElementById('diaMesFesta').innerHTML = balada.diaMes;
document.getElementById('mesFesta').innerHTML = balada.mes;
document.getElementById('horaInicioFesta').innerHTML = balada.horaInicio;
document.getElementById('horaFimFesta').innerHTML = balada.horaFim;
document.getElementById('ruaFesta').innerHTML = casa.rua;
document.getElementById('tipoFesta').innerHTML = balada.genero;
document.getElementById('comLista').innerHTML = balada.preco1;
document.getElementById('semLista').innerHTML = balada.preco2;
document.getElementById('tipoVip').innerHTML = balada.vip;
document.getElementById('aniversario').innerHTML = balada.aniversario;
document.getElementById('descricaoFestaLinha1').innerHTML = balada.descricao.linha1;
document.getElementById('descricaoFestaLinha2').innerHTML = balada.descricao.linha2;
document.getElementById('descricaoFestaLinha3').innerHTML = balada.descricao.linha3;
document.getElementById('descricaoFestaLinha4').innerHTML = balada.descricao.linha4;
document.getElementById('descricaoFestaLinha5').innerHTML = balada.descricao.linha5;
document.getElementById('descricaoFestaLinha6').innerHTML = balada.descricao.linha6;
document.getElementById('descricaoFestaLinha7').innerHTML = balada.descricao.linha7;
document.getElementById('descricaoFestaLinha8').innerHTML = balada.descricao.linha8;
document.getElementById('descricaoFestaLinha9').innerHTML = balada.descricao.linha9;
document.getElementById('descricaoFestaLinha10').innerHTML = balada.descricao.linha10;
document.getElementById('descricaoFestaLinha11').innerHTML = balada.descricao.linha11;
document.getElementById('descricaoFestaLinha12').innerHTML = balada.descricao.linha12;
document.getElementById('descricaoFestaLinha13').innerHTML = balada.descricao.linha13;
document.getElementById('descricaoFestaLinha14').innerHTML = balada.descricao.linha14;
document.getElementById('descricaoFestaLinha15').innerHTML = balada.descricao.linha15;
document.getElementById('descricaoFestaLinha16').innerHTML = balada.descricao.linha16;
document.getElementById('descricaoFestaLinha17').innerHTML = balada.descricao.linha17;
document.getElementById('descricaoFestaLinha18').innerHTML = balada.descricao.linha18;
document.getElementById('descricaoFestaLinha19').innerHTML = balada.descricao.linha19;
document.getElementById('descricaoFestaLinha20').innerHTML = balada.descricao.linha20;


//Informações da festa após o click na lista da index. A lista é preenchida conforme o loop acima
document.getElementById('house-cover').innerHTML = "<img src='images/"+balada.idCasa+"/cover-"+balada.idCasa+".png'>"
document.getElementById('house-logo').innerHTML = "<img src='images/"+balada.idCasa+"/logo-"+balada.idCasa+".png'>"
document.getElementById('nomeCasa').innerHTML = casa.nome;
document.getElementById('ruaCasa').innerHTML = casa.rua;
document.getElementById('siteCasa').innerHTML = casa.site;
document.getElementById('telefoneCasa').innerHTML = casa.telefone;
document.getElementById('emailCasa').innerHTML = casa.email;
document.getElementById('enderecoMapa').src = casa.mapa;
document.getElementById('descricaoCasaLinha1').innerHTML = casa.descricao.linha1;
document.getElementById('descricaoCasaLinha2').innerHTML = casa.descricao.linha2;
document.getElementById('descricaoCasaLinha3').innerHTML = casa.descricao.linha3;
document.getElementById('descricaoCasaLinha4').innerHTML = casa.descricao.linha4;
document.getElementById('descricaoCasaLinha5').innerHTML = casa.descricao.linha5;
document.getElementById('descricaoCasaLinha6').innerHTML = casa.descricao.linha6;
document.getElementById('descricaoCasaLinha7').innerHTML = casa.descricao.linha7;
document.getElementById('descricaoCasaLinha8').innerHTML = casa.descricao.linha8;
document.getElementById('descricaoCasaLinha9').innerHTML = casa.descricao.linha9;
document.getElementById('descricaoCasaLinha10').innerHTML = casa.descricao.linha10;
document.getElementById('descricaoCasaLinha11').innerHTML = casa.descricao.linha11;
document.getElementById('descricaoCasaLinha12').innerHTML = casa.descricao.linha12;
document.getElementById('descricaoCasaLinha13').innerHTML = casa.descricao.linha13;
document.getElementById('descricaoCasaLinha14').innerHTML = casa.descricao.linha14;
document.getElementById('descricaoCasaLinha15').innerHTML = casa.descricao.linha15;
document.getElementById('descricaoCasaLinha16').innerHTML = casa.descricao.linha16;
document.getElementById('descricaoCasaLinha17').innerHTML = casa.descricao.linha17;
document.getElementById('descricaoCasaLinha18').innerHTML = casa.descricao.linha18;
document.getElementById('descricaoCasaLinha19').innerHTML = casa.descricao.linha19;
document.getElementById('descricaoCasaLinha20').innerHTML = casa.descricao.linha20;

