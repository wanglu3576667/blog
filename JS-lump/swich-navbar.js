!function (){
    var view = document.querySelector('.navbar')
    var contorller = {
            view:null,

            init:function (W_view){
                this.view = W_view
                contorller.bindEvents()
            },

            bindEvents:function (){
                window.onscroll = function(){
                    if (window.scrollY>0){
                        this.view.classList.add('switch');
                    }
                    else{
                        this.view.classList.remove('switch')
                    }
                }.bind(this)
            }

        }   

    contorller.init(view)
}.call()










