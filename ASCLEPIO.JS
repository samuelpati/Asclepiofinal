const fondo = document.getElementById('fondo')
let es = 0;

function cambiar(){
    if(es == 0){
        todo.src = 'img/lila.png'
    }
    Texto.innerText = 'Personaje 1'
}
function cambiar2(){
    if(es == 0){
      todo.src = 'img/hawk.png'
    }
    Texto.innerText = 'Personaje 2'
}
function cambiar3(){
  if(es == 0){
      todo.src = 'img/glossyck.png'
  } 
  Texto.innerText = 'Personaje 3'
}
function mostrarAlert(titulo, mensaje) {
    var alert = document.getElementById('alertBox');
    var alertTitulo = document.getElementById('alertTitulo');
    var alertMensaje = document.getElementById('alertMensaje');
    
    alertTitulo.innerText = titulo;
    alertMensaje.innerText = mensaje;
    
    alert.style.display = "flex";
  }
  
  function cerrarAlert() {
    var alert = document.getElementById('alertBox');
    alert.style.display = "none";
  }
  
  const hamburguesa = document.querySelector('.hamburguesa')
const menu = document.querySelector('.menu-navegacion')

console.log(menu)
console.log(hamburguesa)


hamburguesa.addEventListener('click', ()=> {
    menu.classList.toggle("spread")
})


window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
    && e.target != menu && e.target != hamburguesa  ){




        
        menu.classList.toggle("spread")
    }
})
  
  


