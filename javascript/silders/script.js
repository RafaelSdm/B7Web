
let totalSilides = document.querySelectorAll('.slider--item').length;

let currentSilde = 0;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSilides});"`

document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`




function goPrev(){
    currentSilde--;
    if(currentSilde < 0){
        currentSilde = totalSilides -1;
    }

    updateMargin();



}


function goNext(){
    currentSilde++;
    if(currentSilde > (totalSilides-1)){
        currentSilde =0;
    }

    updateMargin();
}

function updateMargin(){
    let newMargin = (currentSilde * document.body.clientHeight);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`
}


setInterval(goNext, 2000);