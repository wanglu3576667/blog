!function (){
    var view = View('.cricle');
    var contorller = Contorller.call(null,{
        init:function (){
            this.view = this.view
            contorller.bindEvents()
        },
        bindEvents:function(){ 
            setTimeout(function(){this.view.classList.add('switch')}.bind(this),1000);
        }
    })
    contorller.init(view)
}.call()
