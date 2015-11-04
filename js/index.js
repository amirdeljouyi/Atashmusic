 $(document).ready(function () {

     $(".scrollBack").click(function (evn) {
         evn.preventDefault();
         $('html,body').scrollTo(this.hash, this.hash);
     });

     var winHeight = $(window).height();
     var navHeight = 71;
     var winWidth = $(window).width();

     $('.wrap').css({
         height: winHeight - navHeight + 'px',
     });

     $('.sideBar').css({
         height: winHeight - navHeight + 'px',
     });

     if (winWidth < 600) {
         $('.card-box').css({
             height: winHeight - navHeight + 'px'
         });
     }

     $('.top-card-box').css({
         height: $('.card-box-two-inner').height() - 30 + 'px',
     });

     var click = 0;
     var navHeadWidth = $('.navbar-header').width();

     $('.navbar-toggle').click(function () {
         $(".navbar-collapse").animate({
             width: 'toggle'
         }, 1000);
     });

     $(window).resize(function () {
         var winHeight = $(window).height();
         var winWidth = $(window).width();
         var navHeight = 71;

         doc_width = $(document).width();

         $('.wrap').css({
             height: winHeight - navHeight + 'px',
         });
         
         $('.sideBar').css({
             height: winHeight - navHeight + 'px',
         });

         if (winWidth < 600) {
             $('.card-box').css({
                 height: winHeight - navHeight + 'px'
             });
         }else{
             $('.card-box').css({
                 height: '100%'
             });
         }

         $('.top-card-box').css({
             height: $('.card-box-two-inner').height() - 30 + 'px',
         });
     });
 })