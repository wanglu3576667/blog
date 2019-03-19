!function (){
    var view = document.querySelector('.navbar>nav');

    var contorller = {
        view : null,

        init : function (view){
            this.view = view
            this.bindEvents()
        },

        bindEvents : function (){ 
            var menu = this.view.querySelectorAll('.bar>li');
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
        }
    }
    contorller.init(view)
    

}.call()


