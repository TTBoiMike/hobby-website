console.log('connected!');

let flexone = document.querySelector('#flexone');
let flexonebutton = document.querySelector('#flexonebutton');

let flextwo = document.querySelector('#flextwo');
let flextwobutton = document.querySelector('#flextwobutton')

let flexthree = document.querySelector('#flexthree');
let flexthreebutton = document.querySelector('#flexthreebutton');
let flexthreeitem = document.querySelector('.flexthreeitem');

let gridonebutton = document.querySelector('#gridonebutton');
let gridone = document.querySelector('#gridone');

let gridtwobutton = document.querySelector('#gridtwobutton');
let gridtwo = document.querySelector('#gridtwo');

gridtwobutton.addEventListener('click', function(){
    gridtwo.classList.toggle('makebiggrid');
});


gridonebutton.addEventListener('click', function(){
    gridone.classList.toggle('makegrid');
});

flexonebutton.addEventListener('click', function(){
    flexone.classList.toggle('flex');
});

flextwobutton.addEventListener('click', function(){
    flextwo.classList.toggle('flex-center');
});

flexthreebutton.addEventListener('click', function(){
    flexthree.classList.toggle('flex-end');
    flexthreeitem.classList.toggle('flex-self');
});

