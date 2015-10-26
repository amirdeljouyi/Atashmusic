 $(document).ready(function () {

     $(".scrollBack").click(function (evn) {
         evn.preventDefault();
         $('html,body').scrollTo(this.hash, this.hash);
     });

     var winHeight = $(window).height();
     var navHeight = 71;

//     $('.navbar-collapse').css({
//         minHeight: winHeight - navHeight + 'px',
//     });
//
//
     $('.wrap').css({
         height: winHeight - navHeight + 'px',
     });

     var container = $('.masonry-container');

     doc_width = $(document).width();

//     container.css({
//         maxWidth: 2500 + 'px'
//     });
//
//     container.css({
//         minWidth: 2500 + 'px'
//     });

     var winWidth = $(window).width();

//     if (winWidth < 766) {
//         $('.user').css({
//             display: "none",
//         });
//     }

     var click = 0;
     var navHeadWidth = $('.navbar-header').width();

     $('.navbar-toggle').click(function () {
//
//         var winWidth = $(window).width();
//
//         if (winWidth > 766) {
//             navHeadWidth = 205;
//         } else {
//             navHeadWidth = 133;
//         }
//
         $(".navbar-collapse").animate({
             width: 'toggle'
         }, 1000);
//
//         if (click == 0) {
//             $('.navbar-form').fadeOut(400);
//             $('.navbar-header').delay(400).animate({
//                 width: "100%"
//             }, 1000);
//             $('.slider').css({
//                 opacity: '0.4',
//             });
//             if (winWidth < 766) {
//                 $('.userName a').css({
//                     color: "#26344B",
//                 });
//                 $('.user').css({
//                     display: "block",
//                 });
//             }
//             click = 1;
//         } else {
//             $('.navbar-header').animate({
//                 width: navHeadWidth + "px"
//             }, 1000);
//             $('.navbar-form').delay(1000).fadeIn(400);
//             $('.slider').css({
//                 opacity: '1',
//             });
//             if (winWidth < 766) {
//                 $('.user').css({
//                     display: "none",
//                 });
//             }
//             click = 0;
//         }
     });

     $(window).resize(function () {
         var winHeight = $(window).height();
         var winWidth = $(window).width();
         var navHeight = $('.navbar').height();

         var container = $('.masonry-container');

         doc_width = $(document).width();

         container.css({
             maxWidth: 2500 + 'px'
         });

         container.css({
             minWidth: 2500 + 'px'
         });

         $('.navbar-collapse').css({
             minHeight: winHeight - navHeight + 'px',
         });


         $('.slider').css({
             height: winHeight - navHeight + 'px',
         });

//         if (winWidth > 766) {
//             $('.navbar-form').show();
//             $('.navbar-header').css({
//                 width: "205px",
//             });
//             $('.slider').css({
//                 opacity: '1',
//             });
//             $('.user').css({
//                 display: "block",
//             });
//             $('.userName a').css({
//                 color: "#17C4BB",
//             });
//         } else {
//             if (click == 0) {
//                 $('.navbar-header').css({
//                     width: "133px",
//                 });
//                 $('.user').css({
//                     display: "none",
//                 });
//             }
//         }
     });

//     var elems = $('.card-box');
//
//     var rightElems = [];
//
//     for (i = 0; i < elems.length; i++) {
//         rightElems.push(parseInt(elems.eq(i).css("right").replace(/[^-\d\.]/g, '')));
//     };
//
//     removeRepeatNumber(rightElems);
//
//     rightElems.sort(function (a, b) {
//         return a - b
//     });
//
//     for (i = 1; i < rightElems.length; i++) {
//         $('[style*="right: ' + rightElems[i] + 'px"]').css('display', 'none');
//     };

//
//     var scrollPosition = 0;
//     var z = 1;
//     var flag = 0;
//     $(window).bind('mousewheel', function (e) {
//         var winWidth = $(window).width();
//         var docWidth = $(document).width();
//         var scrollLeft = $(window).scrollLeft();
//         var start = -$(window).scrollLeft();
//         var end = $(window).width() - $(window).scrollLeft();
//         var elems = $('.card-box');
//         var elemsPosition;
//
//         if (e.originalEvent.wheelDelta / 120 > 0) {
//             //for up
//
//             if (scrollPosition == -285) {
//                 if (winWidth < 992) {
//                     scrollPosition += 275;
//                 } else {
//                     scrollPosition += 285;
//                 }
//             } else if (scrollPosition == 0) {
//                 scrollPosition = 0;
//             } else {
//                 scrollPosition += 244;
//                 flag++;
//             }
//
//             $('html,body').scrollTo(scrollPosition, 0);
//
//         } else {
//             //for down
//
//             if (winWidth < 992) {
//
//                 if (testDisplay(elems) || flag > 0) {
//                     if (scrollPosition == 0) {
//                         scrollPosition -= 275;
//                     } else if (!(docWidth < winWidth - scrollLeft + 100)) {
//                         scrollPosition -= 244;
//                         flag--;
//                     }
//
//                 } else {
//
//                     if ((rightElems[z] + $('[style*="right: ' + rightElems[z] + 'px"]').eq(0).width()) > winWidth - scrollLeft || (rightElems.length == 0)) {
//                         scrollPosition = -(rightElems[z - 1] + $('[style*="right: ' + rightElems[z - 1] + 'px"]').eq(0).width() + 40);
//                     } else {
//                         if (!(rightElems.length == 0)) {
//                             $('[style*="right: ' + rightElems[z] + 'px"]').effect("slide", {
//                                 direction: "left"
//                             }, 1200);
//                             z++;
//                         }
//                     }
//                 }
//
//             } else {
//
//                 if (testDisplay(elems) || flag > 0) {
//                     if (scrollPosition == 0) {
//                         scrollPosition -= 285;
//                     } else if (!(docWidth < winWidth - scrollLeft + 100)) {
//                         scrollPosition -= 244;
//                         flag--;
//                     }
//
//                 } else {
//
//                     if ((rightElems[z] + $('[style*="right: ' + rightElems[z] + 'px"]').eq(0).width() + 245) > winWidth - scrollLeft || (rightElems.length == 0)) {
//                         scrollPosition = -(rightElems[z - 1] + $('[style*="right: ' + rightElems[z - 1] + 'px"]').eq(0).width() + 40);
//                     } else {
//                         if (!(rightElems.length == 0)) {
//                             $('[style*="right: ' + rightElems[z] + 'px"]').effect("slide", {
//                                 direction: "left"
//                             }, 1200);
//                             z++;
//                         }
//                     }
//                 }
//             }
//             $('html,body').scrollTo(scrollPosition, 0);
//         }
//     });

//     var lastLeftLocation = 0;
//     $(window).scroll(function () {
         //         var documentScrollLeft = $(document).scrollLeft();
         //         var winWidth = $(window).width();
         //         var docWidth = $(document).width();
         //         var scrollLeft = $(window).scrollLeft();
         //         var start = -$(window).scrollLeft();
         //         var end = $(window).width() - $(window).scrollLeft();
         //         var elems = $('.card-box');
         //         var elemsPosition;
         //
         //
         //         if (lastLeftLocation > $(window).scrollLeft()) {
         //
         //             for (i = 0; i < elems.length; i++) {
         //                 rightPosition = parseInt(elems.eq(i).css("right").replace(/[^-\d\.]/g, '')) + 30 + 242;
         //
         //                 if (rightPosition > end && rightPosition < end + 30) {
         //                     elems.eq(i).css('display', 'none').effect("slide", {
         //                         direction: "left"
         //                     }, 1200);
         //                     elems.eq(i).addClass('leftofShow');
         //                 }
         //
         //             }
         //         } else if (lastLeftLocation < $(window).scrollLeft()) {
         //             for (i = 0; i < elems.length; i++) {
         //                 leftPosition = parseInt(elems.eq(i).css("right").replace(/[^-\d\.]/g, '')) + 30 + elems.eq(i).width();
         //
         //                 if (leftPosition > start && leftPosition < start + 30) {
         //                     elems.eq(i).css('display', 'none').effect("slide", {
         //                         direction: "right"
         //                     }, 1200);
         //                     elems.eq(i).addClass('rightofShow');
         //                 }
         //             }
         //
         //         }
//
//         var winWidth = $(window).width();
//         var docWidth = $(document).width();
//         var scrollLeft = $(window).scrollLeft();
//         var start = -$(window).scrollLeft();
//         var end = $(window).width() - $(window).scrollLeft();
//         var elems = $('.card-box');
//         var elemsPosition;
//
//         if (lastLeftLocation > $(window).scrollLeft()) {
//             //for down
//
//             if (winWidth < 992) {
//
//                 if ((rightElems[z] + $('[style*="right: ' + rightElems[z] + 'px"]').eq(0).width()) > winWidth - scrollLeft || (rightElems.length == 0)) {
//                     scrollPosition = -(rightElems[z - 1] + $('[style*="right: ' + rightElems[z - 1] + 'px"]').eq(0).width() + 40);
//                 } else {
//                     if (!(rightElems.length == 0)) {
//                         $('[style*="right: ' + rightElems[z] + 'px"]').effect("slide", {
//                             direction: "left"
//                         }, 1200);
//                         z++;
//                     }
//                 }
//
//
//             } else {
//
//                 if ((rightElems[z] + $('[style*="right: ' + rightElems[z] + 'px"]').eq(0).width() + 245) > winWidth - scrollLeft || (rightElems.length == 0)) {
//                     scrollPosition = -(rightElems[z - 1] + $('[style*="right: ' + rightElems[z - 1] + 'px"]').eq(0).width() + 40);
//                 } else {
//                     if (!(rightElems.length == 0)) {
//                         $('[style*="right: ' + rightElems[z] + 'px"]').effect("slide", {
//                             direction: "left"
//                         }, 1200);
//                         z++;
//                     }
//                 }
//             }
//
//             lastLeftLocation = $(window).scrollLeft();
//         }
//     });

 })

 function removeRepeatNumber(Num) {

     var size = Num.length;
     for (i = 0; i < size; i++) {
         for (j = i + 1; j < size;) {
             if (Num[j] == Num[i]) {
                 for (k = j; k < size; k++) {
                     Num[k] = Num[k + 1];
                 }
                 size--;
             } else
                 j++;
         }
     }
 }

 function testDisplay(selector) {
     for (i = 0; i < selector.length; i++) {
         if (selector.eq(i).css("display") == "none") {
             return false;
         }
     }
     return true;
 }



 var clicked = false,
     clickX;
 $(document).on({
     'mousemove': function (e) {
         clicked && updateScrollPos(e);
     },
     'mousedown': function (e) {
         clicked = true;
         clickX = e.pageX;
     },
     'mouseup': function () {
         clicked = false;
         $('.masonry-container').css('cursor', 'auto');
     }
 });

 var updateScrollPos = function (e) {
     $('.masonry-container').css('cursor', 'pointer');
     $(window).scrollLeft($(window).scrollLeft() + (clickX - e.pageX));
 }
