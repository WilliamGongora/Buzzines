
/*Validar Formulario*/
function validarfor(){

  var correo = document.getElementById("mail").value; 
  var nom = document.getElementsById("nombre")[0].value;
  var tel = document.getElementsById("telefono")[0].value;
  var coment = document.getElementsById("comentarios")[0].value;
  var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if ( !expr.test(correo) ){                                                            //COMPRUEBA MAIL
      alert("Error: La dirección de correo " + correo + " es incorrecta.");
      return false;
  }
  
  if ((correo == "") || (nom == "") ||  (tel == "") ||  (coment == "")) {  //COMPRUEBA CAMPOS VACIOS
      alert("Los campos no pueden quedar vacios");
      return true;
  }
  
  }
/*Fin Validar Formulario*/ 
/*Menu*/
$("#menu").click(function () {
  $("#contenedormenu").toggleClass("abrirmenu");
});
/*Fin Menu*/
/*Carrucel*/
$(document).ready(function()
		{
			$('#slider1').tinycarousel();
		});
/*Fin carrucel*/ 

//boton arriba
document.getElementById("button-up").addEventListener("click", scrollup);

function scrollup(){
    let currentScroll = document.documentElement.scrollTop;
    if(currentScroll > 0){
        window.requestAnimationFrame(scrollup);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
        buttonup.style.transform = "scale(0)";
    }
}

buttonup = document.getElementById("button-up");

window.onscroll = function(){

    let scroll = document.documentElement.scrollTop;
        
    if (scroll > 300){
        buttonup.style.transform = "scale(1)";

    }else if (scroll < 300 ){
        buttonup.style.transform = "scale(0)";
    }
}
// Funcion para desplazamiento de los vinculos
$(".btn_ancla").click(function () {
  var ancla = $(this).attr("href");
  $("html,body").animate(
    {
      scrollTop: $(ancla).offset().top,
    },
    1000
  );
  $("#contenedormenu").toggleClass("abrirmenu");
});
/*Slider con Flechas*/
$(function () {
  $("#slider4").responsiveSlides({
    auto: false,
    pager: false,
    nav: true,
    speed: 500,
    namespace: "callbacks",
    before: function () {
      $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
      $('.events').append("<li>after event fired.</li>");
    }
  });
});
/*Fin slider*/

/*Modal*/
var fondomodal = document.getElementById("modal");
var modal2 = document.getElementById("modal2");
var btn = document.getElementById("abrir");
var cerrar = document.getElementById("cerrar");
var cerrar2 = document.getElementById("cerrar2");

btn.onclick = function() {
fondomodal.style.display = "flex";
};
cerrar.onclick = function() {
fondomodal.style.display = "none";
};

cerrar2.onclick = function() {
modal2.style.display = "none";
}


function tiempo(){
  modal2.style.display= "flex";
}
setTimeout(tiempo, 5000);


window.onclick = function ( event){
    if (event.target == fondomodal){
        fondomodal.style.display = "none";
    }
};
/*Fin modal*/  
/*Acordeon*/

$(".acordeon-titulo").click(function(){
  var t = $(this);
  var tp = t.next();
  tp.slideToggle();
});
/*Fin acordeon*/ 


