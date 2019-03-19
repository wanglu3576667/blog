!function (){
    var view = document.querySelectorAll('.navbar>nav>.bar>li>a')
    var contorller = {
        view : null,
        nextelement : null,
        Looking_for_a_brother : function(event){
                                    this.nextelement = event.currentTarget.nextSibling;
                                    while(this.nextelement.tagName !=='UL'){
                                        this.nextelement = this.nextelement.nextSibling;
                                        if (this.nextelement === null){
                                            break;
                                        }
                                    }
                                    if(this.nextelement){
                                        this.nextelement.className ='lv2';
                                    } 
                                },
        init : function (view){
            this.view = view
            this.bindEvents()
        },
        bindEvents : function (){
            for (let index=0;index<this.view.length;index++){
                this.view[index].addEventListener('mouseenter',this.Looking_for_a_brother)    
            }
        }
    }
   contorller.init(view)

}.call()


    