!function (){

  var view =  View('.message-out')

  var model = Model({name:'TestObject'})

  var contorller = Contorller.call(null,{
    bindEvents : function (){
        this.FORM.addEventListener('submit',
          function(event){
            event.preventDefault()
            var IMPORT  = contorller.FORM.querySelector('input[name=import]').value
            if (IMPORT.match(/^\s*$/) ){
              alert('内容不能为空')
              return
            }
            IMPORT=IMPORT.trim()
            
            var NAME = contorller.FORM.querySelector('input[name=name]').value
            if (NAME.match(/^\s*$/)){
              alert('姓名不能为空')
              return
            }
            this.model.save({'Name' : NAME,'Import' : IMPORT})
              .then( function(object) {
                alert('发送成功');
                var li = document.createElement('li')
                li.innerText = `${object.attributes.Name}:${object.attributes.Import}`
                this.ul.appendChild(li)
              }.bind(contorller), function(){alert('发送失败')} )}.bind(contorller))
        },
    
        init : function(){
            this.FORM = this.view.querySelector('form')
            this.IMPORT = this.FORM.querySelector('input[name=import]').value
            this.NAME = this.FORM.querySelector('input[name=name]').value
            this.ul = this.view.querySelector('.displayArer')
            this.model.init()
            this.model.find().then(function (todos) {
              var arr = todos.map(function(value){
                                    return value.attributes
                                  })
              arr.forEach(function(value){
                            var li = document.createElement('li')
                            li.innerText = `${value.Name}:${value.Import}`
                            this.ul.appendChild(li)
                            }.bind(contorller))
                          })
            this.bindEvents()
          }
})

contorller.init(view,model)
  
}.call()














