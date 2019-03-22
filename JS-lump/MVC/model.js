window.Model = function (options){

   return {
        init : function (){
                var APP_ID = '2UnQqjtGo6o8QL7Df8GDKCpD-gzGzoHsz';
                var APP_KEY = 'eQh4KK9rTXXvfydLP8kUbVgM';
                AV.init({appId: APP_ID, appKey: APP_KEY});
              },
    
        save : function (object){
                var TestObject = AV.Object.extend(options.name);
                var messageboard = new TestObject();
                return messageboard.save(object)
              },
    
        find : function(){
                var query = new AV.Query(options.name);
                return query.find()
              }
      }
}


