!function (){
    var view = document.querySelector('.swiper-container')
    var contorller = {
        view : null,

        pagination: {
            el: '.swiper-pagination',
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        init : function (parentview){
            this.view = parentview
            this.bindEvents()
        },

        bindEvents : function (){
            var mySwiper = new Swiper (this.view, {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                // If we need pagination
                pagination : this.pagination,
                // Navigation arrows
                navigation : this.navigation
            
            })
        }

    }

    contorller.init(view)
    
}.call()


