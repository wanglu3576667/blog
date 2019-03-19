!function (){
    var view = document.querySelector('.cricle');
    var contorller = {
        view:null,
        init:function (view){
            this.view = view
            contorller.bindEvents()
        },
        bindEvents:function(){
            
            setTimeout(function(){this.view.classList.add('switch')}.bind(this),1000);
        }
    }
    contorller.init(view)
}.call()
