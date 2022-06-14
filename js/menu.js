
(function(){
    'use strict';
    var menuTg = document.querySelector('.menu-toogle');
    var show = true;
    function menuVisible(){
        var menuMobile = document.querySelector('.menu-mobile');
        // document.body.style.overflowY = show ? 'hidden' : 'initial'
        if(menuMobile.classList.contains('view',show)){
            menuMobile.classList.remove('view',show);
            var icon = document.querySelector('.icon').src = 'img/menu-hamburgue.svg'
        }else{
            menuMobile.classList.add('view',show);
            var icon = document.querySelector('.icon').src = 'img/close.svg'
        }
        show = !show;
    }
    menuTg.addEventListener('click',menuVisible)
})();