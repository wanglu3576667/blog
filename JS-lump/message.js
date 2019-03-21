!function (){
  var view =  document.querySelector('.message-out')          //MVC里面的V，view视口的意思，因为html对用户可见，用来获取DOM节点。

  var model = {                                    
                                                      /*MVC里面的M，需要对后端数据库进行的操作都在这个对象中，有三个方法：init初始化，save上传，
                                                      find获取*/
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
      return messageboard.save({
        'Name' : NAME,
        'Import' : IMPORT
      })
      },

    find : function(){
            var query = new AV.Query('TestObject');
            return query.find()
          }
  }

  var contorller = {                    /*MVC里面的C，contorller控制器的意思，用来操作V和M，他们的具体实现都在contorller对象中完成。该对象有
                                          三个重要属性：view属性代表需要进行操作的DOM；init方法代表初始化所有属性，是所有操作的根本，所动作都要
                                          通过调用该方法实现；bindEvents方法代表绑定事件，主要操作都在该方法内，需要在init方法内调用该方法*/
      view : null,
      FORM : null,
      IMPORT : null,
      NAME : null,
      ul : null,
      bindEvents : function (){
                    this.FORM.addEventListener('submit',function(event){
                                                          event.preventDefault()
                                                          model.save().then( function(object) {
                                                            alert('发送成功');
                                                            var li = document.createElement('li')
                                                            li.innerText = `${object.attributes.Name}:${object.attributes.Import}`
                                                            this.ul.appendChild(li)
                                                          }.bind(contorller), function(){alert('发送失败')} )
                                                        }.bind(this))
        
                    },

      init : function(view){
              this.view = view
              this.FORM = this.view.querySelector('form')
              this.IMPORT = this.FORM.querySelector('input[name=import]').value
              this.NAME = this.FORM.querySelector('input[name=name]').value
              this.ul = this.view.querySelector('.displayArer')
              model.init()
              model.find().then(function (todos) {
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
  }

  contorller.init(view)
  
}.call()













