!function (){
    var view = document.querySelectorAll('[data=bourn]')
    
    var contorller = Contorller.call(null,{
        init : function (){
            this.view = this.view
            this.bindEvents()
        }, 
        bindEvents : function (){
            window.addEventListener('scroll',function(){
                this.findMinElement()
                for (let index=0;index < this.elementUp.length; index++){
                    if ( this.elementUp[index].getAttribute('data2') === href ){
                        this.elementUp[index].classList.add('switch');
                        if (this.elementUp[index].getAttribute('data2') === 'skill'){
                            for (let index=0; index < this.progress.length; index++){
                                this.progress[index].className='progress';
                            }
                        }
                    }
                }
            }.bind(this))
        },
        findMinElement :function (){
            var index_min = 0;
            var bourn = this.view;
            for (let index = 0; index<bourn.length; (index)++){
                if(Math.abs(bourn[index].offsetTop-window.scrollY)< Math.abs(bourn[index_min].offsetTop-window.scrollY)){
                    index_min = index;   
                  }
            }
            this.href = window.href = bourn[index_min].id;
            this.progress = document.querySelectorAll('.progerss');
            this.elementUp = document.querySelectorAll('[data2]');
        }
    })
    contorller.init(view)
}.call()




