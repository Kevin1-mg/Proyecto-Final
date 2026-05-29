function mostrarInfo(id){

    let contenidos = document.querySelectorAll('.contenido');

    contenidos.forEach(function(div){
        div.style.display = 'none';
    });

    document.getElementById(id).style.display = 'block';
}

window.onload = function(){
    mostrarInfo('inicio');
}