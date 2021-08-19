let timer;

function parar(){
    clearInterval(timer);
}


function comecar(){
    let timer = setInterval(showTime, 1000);

}




function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.setMinutes();
    let s = d.getSeconds();


    let txt = h+':' +m+ ':' +s;
    let i = m;

    document.getElementById('demo').innerHTML = txt;
}



let timer1;

function rodar(){

    timer = setTimeout(function() {

        window.alert('rodou')


    }, 2000)
}

function pararr(){
    clearTimeout(timer);
    window.alert('parrouuuu')
}
