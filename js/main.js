$(document).ready();
const cantidadIMG = 12;
const imagenes = [
    ['img/conejito.jpg', 'conejito'],
    ['img/gatito.jpg', 'gatito'],
    ['img/patito.jpg', 'patito'],
    ['img/perrito.jpg', 'perrito'],
    ['img/conejo.jpg', 'conejo'],
    ['img/panda.jpg', 'conejo']
]; //[src, alt, posicion-1, posicion-2]
const posicion = [];
let c = 0;

while (c < cantidadIMG) {
    let num = Math.floor((Math.random() * cantidadIMG) + 1);
    if ($.inArray(num, posicion) == -1) {
        posicion.push(num);
        c++;
    }
}

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
let comparar = 0;
let nombreAnterior;

$('.box-imagenes').on('click', (event) => {

    let img = event.target;
    let indice;
    let p = 0;
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
                    var relojito = setTimeout(function() {
                        $('#' + idAnterior).removeAttr('src').attr('src', 'img/marco1.jpg');
                        $('#' + idAnterior).removeAttr('alt').attr('alt', 'inicio');
                        img.src = 'img/marco1.jpg'; //src;
                        img.alt = 'inicio'; //alt-nombre
                    }, 1000);
                    console.log('no es igual')
                }
                //clearTimeout(relojito);
                comparar = 0;
            } else if (comparar == 1) {
                nombreAnterior = img.alt;
                idAnterior = img.id;
            }
        }
    }
});