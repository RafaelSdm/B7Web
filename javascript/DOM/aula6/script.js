document.querySelector('.texto').offsetWidth;
document.querySelector('.texto').offsetHeight;


document.querySelector('.texto').clientHeight;
document.querySelector( '.texto').clientWidth;


document.querySelector('.texto').scrollHeight;
document.querySelector('.texto').scrollWidth;


document.querySelector('.texto').scrollTop;
document.querySelector('.texto').scrollLeft;


document.querySelector('.texto').scrollTo(0,0) // jogar scroll para cima



function subir(){
    window.scrollTo({
        top: 0,
        left:0,
        behavior: "smooth"
    })
}



function decisao(){
    if(window.scrollY === 0){
        // ocultar botao

        document.querySelector('.scrollbtn').style.display = 'none';
    }else{

        document.querySelector('.scrollbtn').style.display ='block'

    }
}


//setInterval(decisao, 1000);

window.addEventListener('scroll', decisao);