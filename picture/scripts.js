(function() {
  var __sections__ = {};
  (function() {
    for(var i = 0, s = document.getElementById('sections-script').getAttribute('data-sections').split(','); i < s.length; i++)
      __sections__[s[i]] = true;
  })();
  (function() {
  if (!__sections__["about"]) return;
  try {
    

jQuery(document).ready(function() {
jQuery("#testimonial-car").owlCarousel({   
navigation: false,
items : 2,
itemsDesktop : [1200,2],
itemsTablet: [767,2],
itemsTabletSmall: [721,1]
});


jQuery("#client-car").owlCarousel({   
navigation: false,
items : 5,
itemsDesktop : [1200,4],
itemsTablet: [767,4],
itemsTabletSmall: [721,3],
itemsMobile : [479,1],
});
});


  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["client-logos"] && !window.DesignMode) return;
  try {
    



$(document).ready(function() {
 		var brandCarousel = $("#client-car");
                                         brandCarousel.owlCarousel({
                                         loop:false,                                        
                                         nav:false,                                                                                 
                                         dots: true,
                                         smartSpeed : 1000,
                                         navSpeed : 1000,
                                         items:5,
                                          responsive:{
                                                0:{
                                                  items:1
                                                },
                                                600:{
                                                  items:3
                                                },
                                                720:{
                                                  items:5
                                                }
                                              }
                                         });     

});





  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["cms-8"] && !window.DesignMode) return;
  try {
    
$(document).ready(function(){

$('#carousel_img').owlCarousel({       
items:1,
loop:true,      
dots: true, 
autoplay: true,
autoplayTimeout: 3000,
responsive:{
0:{
items: 1
},
600:{
items:1
},
1000:{
items: 1
}
}
});
});



  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["home-sidebar-deals"]) return;
  try {
    
 $(document).ready(function(){
     var homeSidedeals = $(".sidebar-deal-products");
      homeSidedeals.owlCarousel({
      items:1,
         loop:true,              
         dots: false,
         navContainer: ".home_sidebar--deal-nav",
         navText: [' <a class="prev active btn"><i class="icon-arrow-left icons"></i></a>','<a class="next btn"><i class="icon-arrow-right icons"></i></a>'],
         responsive:{
           0:{
             items: 1
           },
           600:{
             items:1
           },
           700:{
             items:1
           },
           
           1000:{
             items: 1
           }
         }
  			});
        });

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["product-sidebar-promoimage"]) return;
  try {
    
$(document).ready(function(){
     $("#promo-carousel").owlCarousel({ 
      autoPlay: 3000, //Set AutoPlay to 3 seconds 
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [630, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false,
        pagination:true
 
  });
});
      

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["sidebar-category"]) return;
  try {
    
$(document).ready(function(){
  $(".dt-menu-expand").click(function(event){
    event.preventDefault();
    if( $(this).hasClass("dt-mean-clicked") ){
$(this).html('<i class="zmdi zmdi-plus"></i>');
      if( $(this).prev('ul').length ) {
        $(this).prev('ul').slideUp(400);
      } else {
        $(this).prev('.megamenu-child-container').find('ul:first').slideUp(600);
      }
    } else {
     $(this).html('<i class="zmdi zmdi-minus"></i>');
      if( $(this).prev('ul').length ) {
        $(this).prev('ul').slideDown(400);
      } else{
        $(this).prev('.megamenu-child-container').find('ul:first').slideDown(2000);
      }
    }

    $(this).toggleClass("dt-mean-clicked");
    return false;
  });

});
      

  } catch(e) { console.error(e); }
})();

})();
