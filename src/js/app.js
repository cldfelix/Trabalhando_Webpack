import component from "./component";
import css from '../css/style.css'
//import image from "./image";
import image from "../image/yinyang.png";
import $ from 'jquery'


console.log(css);
const imagem = document.querySelector('#imagem');

imagem.setAttribute('src', image);

imagem.classList.add(css['img-border']);

$(imagem).on('click',  function() {
    console.log('hoje clicando');
    $(this).hide();
})

document.body.appendChild(component());
// document.body.appendChild(image());