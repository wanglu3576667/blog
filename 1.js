var navBar = document.querySelectorAll('.navbar')[0];
window.onscroll = function(){
    if (window.scrollY>0){
        navBar.classList.add('switch');
    }
    else{
        navBar.classList.remove('switch')
    }
}
               
var menu = document.querySelectorAll('.navbar>nav>.bar>li');
for (let index=0;index<menu.length;index++){
    menu[index].onmouseenter = function (event){
        event.currentTarget.className = 'switch'
    }
    menu[index].onmouseleave = function (event){
        event.currentTarget.classList.remove('switch');
        var lv2 = document.querySelector('.lv2');
        if (lv2)
            lv2.classList.remove('lv2');
    }
}

var jump = document.querySelectorAll('.navbar>nav>.bar>li>a');
for (let index=0;index<jump.length;index++){
    jump[index].onclick = function (event){
        event.preventDefault();
        var href = event.currentTarget.getAttribute('href');
        var ele = document.querySelector(href);
        var top = ele.offsetTop;
        window.scrollTo(0, top - 80);
        console.log(top)
    }
    jump[index].onmouseenter = function(event){
        var didi = event.currentTarget.nextSibling;
        while(didi.tagName !=='UL'){
            didi=didi.nextSibling;
            if (didi === null){
                break;
            }
        }
        if(didi){
            didi.className ='lv2';
        }
        
    }
    
}


