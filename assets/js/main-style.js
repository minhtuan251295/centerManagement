$(document).ready(function(){

    "use strict";
    $('#slider-carousel').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:1000,
            pauseOnHover:true,
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1,
            },
            height:'variable',
        },
        pagination:{
            container:".sliderpager",
            pageAnchorBuilder:false,
        }
    });

});

$(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      // more then one submenu open?
      this.multiple = multiple || false;
      
      var dropdownlink = this.el.find('.dropdownlink');
      dropdownlink.on('click',
                      { el: this.el, multiple: this.multiple },
                      this.dropdown);
    };
    
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          //this is the ul.submenuItems
          $next = $this.next();
      
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if(!e.data.multiple) {
        //show only one menu at the same time
        $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
      }
    }
    
    var accordion = new Accordion($('.accordion-menu'), false);
})