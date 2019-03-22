window.Contorller = function (options){
    var obj =  {
        view:null,
        model:null,
        init : function (view,model){
            this.view = view
            this.model = model;
            options.init.call(this)
        }
    }
    for (let key in options){
        if (key !== 'init')
        obj[key]=options[key]
    }
    return obj
}


