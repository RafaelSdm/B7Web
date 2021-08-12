function Menu(config){
    this.nav = (typeof config.container === 'string')? document.querySelector(config.container) : config.container;

    this.btn = (typeof config.toggleBtn === 'string')? document.querySelector(config.toggleBtn) : config.toggleBtn;

    this.maxWidth = config.widthEnable || false;


    var _opened = false;
    var _this = this;



    this.btn.removeAttribute('style');

    closeMenu();




    this.btn.addEventListener('click', oppenOrClose);

    function oppenOrClose(){
        if(!_opened){
            openMenu()
        }else{
            closeMenu()
        }
    }


    function openMenu(){
        var top = this.nav.getBoundClientRect().top + 'px'


        var _style ={
            maxHeight:'calc(100vh -' + _top +' )',
            overflow:'hidden'
        }

        applyStyleletNav(_style)
        _opened = true
    }


    function applyStyleletNav(_style){
        Object.keys(_style).forEach(stl => {
            _this.nav._style[stl] = _style[stl]
           
    
        })
    }



    function closeMenu(){
        var  _style ={
            maxHeight: '0px',
            overflow:'hidden'
        }

        applyStyleletNav(_style)

        _opened = false;
    }
}