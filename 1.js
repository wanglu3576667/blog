//预加载动画
var circle = document.querySelector('.cricle');
setTimeout(function (){
    circle.classList.add('switch')
},1000);

//作品集移动下标
one.onclick=function (){
    barbar.className="smallBar"
};
hehe.onclick=function (){
    barbar.className="smallBar1"
};
three.onclick=function (){
    barbar.className="smallBar2"
}

//获取导航栏标签
var navBar = document.querySelectorAll('.navbar')[0];
//监听滚动时间
window.onscroll = function(){
    //导航栏改变样式
    if (window.scrollY>0){
        navBar.classList.add('switch');
    }
    else{
        navBar.classList.remove('switch')
    }

    //元素上升动画,技能条充满背景色
    let bourn = document.querySelectorAll('[data=bourn]');
    let index_min = 0;
    for (let index = 0; index<bourn.length; (index)++){
        if(Math.abs(bourn[index].offsetTop-window.scrollY)< Math.abs(bourn[index_min].offsetTop-window.scrollY)){
            index_min = index;   
          }
    }
    let href = bourn[index_min].id;
    let progress = document.querySelectorAll('.progerss');
    let elementUp = document.querySelectorAll('[data2]');
    for (let index=0;index<elementUp.length;index++){
        if ( elementUp[index].getAttribute('data2') === href ){
            elementUp[index].classList.add('switch');
            if (elementUp[index].getAttribute('data2') === 'skill'){
                for (let index=0; index<progress.length;index++){
                    progress[index].className='progress';
                    
                }
            }
        }
    }
    
    //对应区域的导航目录的链接下标高亮
    let jump = document.querySelectorAll('.navbar>nav>.bar>li>a');
    for (let index = 0;index<jump.length;index++){
        if(jump[index].getAttribute('href') === ('#'+href)){
            for(let index = 0;index<jump.length;index++){
                jump[index].parentElement.classList.remove('scroll');
            }
            jump[index].parentElement.classList.add('scroll');
        }
    }
}

//获取导航栏目录标签     
var menu = document.querySelectorAll('.navbar>nav>.bar>li');
//鼠标移入移除，下划线对应移入移除
for (let index=0;index<menu.length;index++){
    menu[index].onmouseenter = function (event){
        event.currentTarget.classList.add('switch');
    }
    menu[index].onmouseleave = function (event){
        event.currentTarget.classList.remove('switch');
        var lv2 = document.querySelector('.lv2');
        if (lv2)
            lv2.classList.remove('lv2');
    }
}

//获取导航栏内目录链接标签
var jump = document.querySelectorAll('.navbar>nav>.bar>li>a');
//点击a标签，使页面移动到对应位置
for (let index=0;index<jump.length;index++){
    //鼠标移入a标签，给ul添加class类，划入二级菜单
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

    jump[index].onclick = function (event){
        event.preventDefault();
        //var href = event.currentTarget.getAttribute('href');
        //var ele = document.querySelector(href); 
        let top = (document.querySelector(event.currentTarget.getAttribute('href')).offsetTop)-80;
        let presentTop = window.scrollY;
        //缓动，twenn.js,根本看不懂下面的函数，但是不能少
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        //这个能看懂，一个对象，分别有xy两个属性，猜测应该是两个初始数值
        //var coords = { x: 0, y: 0 }; 这个是初始，我要做更改，因为用不到这个对象里面的属性
        var coords = {y:presentTop};
        //不懂这个实例是什么意思
        var tween = new TWEEN.Tween(coords) 
        //猜测这个应该是最终值，和毫秒数
        //.to({ x: 300, y: 200 }, 1000),我的终点和它的不一样，所以也要改；
        .to({y:top},Math.abs((top-presentTop)/100*100))
        //动画效果
        .easing(TWEEN.Easing.Quadratic.Out)
        //运行想要实现的动作代码
        .onUpdate(function() { 
            window.scrollTo(0,coords.y);
        })
        //开始
        .start();  
        
        
        /*这种写法一般，动画效果太过于僵硬
         let count = 20;
        let time  = 500/count;
        let i = 0;
        let presentTop = window.scrollY;
        let clock = setInterval(function (){
            i++;
            if (i === count){
                clearInterval(clock)
            }
            window.scrollTo(0,presentTop+((top-presentTop)/20)*i);
        },time);
        */ 
              
        /*这种写法不好影响性能，且移动位置不明确
        var a = setInterval(function(){
            if (window.scrollY<top-80){
                 window.scrollTo(0, window.scrollY+=20);  
            }else{
                clearInterval(a); 
            }
        },20); 
        var b = setInterval(function(){
            if (window.scrollY>top-80){
                 window.scrollTo(0, window.scrollY-=20);  
            }else{
                clearInterval(b); 
            }
        },20);
         */
    }
}


