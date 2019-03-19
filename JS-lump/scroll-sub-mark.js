!function (){
    var view = document.querySelector('.navbar>nav>.bar');
    var contorller = {
        view : null,
        jump : null,
        href : null,
        init :function (view){
            this.view = view
            this.jump = this.view.querySelectorAll('li>a')
            this.bindEvents()
        },
        bindEvents : function(){
            window.addEventListener('scroll',function(){
                this.href = window.href
                for (let index = 0;index < this.jump.length; index++){
                    if(this.jump[index].getAttribute('href') === ( '#' + this.href )){
                        for(let index = 0;index < this.jump.length; index++){
                            this.jump[index].parentElement.classList.remove('scroll');
                        }
                        this.jump[index].parentElement.classList.add('scroll');
                    }
                }
            }.bind(this))

        }
    } 
    contorller.init(view)
}.call()