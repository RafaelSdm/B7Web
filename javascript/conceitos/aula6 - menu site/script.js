function toggle(){

    /*
    let menuarea = document.getElementById('menu-area');

    if(menuarea.classList.contains('menu-opened')==true){
        menuarea.classList.remove('menu-opened');
    }else{
        menuarea.classList.add('menu-opened');
    }

    */

    let menuArea = document.getElementById('menu-area');

    if(menuArea.style.width == '200px'){
        menuArea.style.width = '0px';
    }else{
        menuArea.style.width = '200px'
    }

}