!function (){
    var view = View('.navbar>nav>.bar');
    
    var contorller = Contorller.call(null,{
           
            init : function (){
                this.view = this.view
                this.jump = this.view.querySelectorAll('li>a')
                this.bindEvents()   
            },
            initAnimation : function (){
                 function animate(time) {
                    requestAnimationFrame(animate);
                    TWEEN.update(time);
                }
                requestAnimationFrame(animate);
            },
            bindEvents : function (){
                for (let index = 0;index < this.jump.length;index++){
                    this.jump[index].onclick = function (event){
                        event.preventDefault();
                        let top = (document.querySelector(event.currentTarget.getAttribute('href')).offsetTop)-80;
                        let presentTop = window.scrollY;
                        this.initAnimation()
                        var coords = {y:presentTop};
                        var tween = new TWEEN.Tween(coords) 
                        .to({y:top},Math.abs((top-presentTop)/100*100))
                        .easing(TWEEN.Easing.Quadratic.Out)
                        .onUpdate(function() { 
                            window.scrollTo(0,coords.y);
                        })
                        .start();  
                    }.bind(contorller)
                }
            }
    })
contorller.init(view)
}.call()
    
