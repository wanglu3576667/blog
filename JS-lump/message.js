!function (){
  var view =  document.querySelector('.message-out')

  var model = {
    init : function (){
            var APP_ID = '2UnQqjtGo6o8QL7Df8GDKCpD-gzGzoHsz';
            var APP_KEY = 'eQh4KK9rTXXvfydLP8kUbVgM';

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
              });
          },

    save : function (){
      var TestObject = AV.Object.extend('TestObject');
      var messageboard = new TestObject();
      var IMPORT  = contorller.FORM.querySelector('input[name=import]').value
      var NAME = contorller.FORM.querySelector('input[name=name]').value
      messageboard.save({
        'Name' : NAME,
        'Import' : IMPORT
      }).then( function(object) {
                alert('发送成功');
                var li = document.createElement('li')
                li.innerText = `${NAME}:${IMPORT}`
                this.ul.appendChild(li)
              }.bind(contorller), function(){alert('发送失败')} )
      },

      find : function(){
              var query = new AV.Query('TestObject');
              query.find().then(function (todos) {
              var arr = todos.map(function(value){
                                    return value.attributes
                                  })
              arr.forEach(function(value){
                            var li = document.createElement('li')
                            li.innerText = `${value.Name}:${value.Import}`
                            this.ul.appendChild(li)
                            }.bind(contorller))
                          })
            }
  }

  var contorller = {
      view : null,
      FORM : null,
      IMPORT : null,
      NAME : null,
      ul : null,
      bindEvents : function (){
                    this.FORM.addEventListener('submit',function(event){
                                                          event.preventDefault()
                                                          model.save()
                                                        }.bind(this))
        
                    },

      init : function(view){
              this.view = view
              this.FORM = this.view.querySelector('form')
              this.IMPORT = this.FORM.querySelector('input[name=import]').value
              this.NAME = this.FORM.querySelector('input[name=name]').value
              this.ul = this.view.querySelector('.displayArer')
              model.init()
              model.find.call(this)
              this.bindEvents()
            }
  }

  contorller.init(view)
  
}.call()













