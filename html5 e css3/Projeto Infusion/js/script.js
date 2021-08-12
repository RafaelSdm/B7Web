(function(){

    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js') 


    


    var menu = new menu({
        container: 'header__nav',
        toggleBtn: 'header-btn-menu',
        widthEnable: 1024 
    })

})()