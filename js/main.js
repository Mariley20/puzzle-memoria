$(document).ready();
const cantidadIMG = 12;
//[src, alt, posicion-1, posicion-2]
const imagenes = [
    ['img/conejito.jpg', 'conejito'],
    ['img/gatito.jpg', 'gatito'],
    ['img/patito.jpg', 'patito'],
    ['img/perrito.jpg', 'perrito'],
    ['img/conejo.jpg', 'conejo'],
    ['img/panda.jpg', 'conejo']
]; 
const posicion = [];
 // determinar posiciones aleatorias
let c = 0;
while (c < cantidadIMG) {
    let num = Math.floor((Math.random() * cantidadIMG) + 1);
    if ($.inArray(num, posicion) == -1) {
        posicion.push(num);
        c++;
    }
}
// insertar las posiciones aleatorias a la matriz de imagenes
let x = 0;
for (let i = 0; i < imagenes.length; i++) {
    let c = 0;
    while (c < 2) {
        imagenes[i].push(posicion[x + i])
        x++;
        c++;
    }
    x--;
}

let comparar = 0; // contador de click
let nombreAnterior;
$('.box-imagenes').on('click', (event) => {

    $(this).addClass('fin');

    let img = event.target;
    $(img).addClass('fin');
    let x = $('.fin');
    console.log(x);
    if($('.fin').length == 2){

    }
    /*
    let indice;
    let idElement = parseInt(img.id);

    if (img.nodeName == 'IMG') {
        if (img.alt == 'inicio') {
            for (var i = 0; i < imagenes.length; i++) {
                if ($.inArray(idElement, imagenes[i]) != -1) {
                    indice = i;
                }
            }
            img.src = imagenes[indice][0]; //src;
            img.alt = imagenes[indice][1]; //alt-nombre
            comparar++;
            if (comparar == 2) {
                if (nombreAnterior == imagenes[indice][1]) {
                    console.log('bien');
                } else {
                    setTimeout(function() {
                        $('#' + idAnterior).removeAttr('src').attr('src', 'img/marco1.jpg');
                        $('#' + idAnterior).removeAttr('alt').attr('alt', 'inicio');
                        img.src = 'img/marco1.jpg'; //src;
                        img.alt = 'inicio'; //alt-nombre
                    }, 1000);
                    console.log('no es igual')
                }
                comparar = 0;
            } else if (comparar == 1) {
                nombreAnterior = img.alt;
                idAnterior = img.id;
            }
        }
    }*/
});