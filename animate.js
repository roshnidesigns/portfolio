jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 400) {
        const d = document.querySelector('.item-image');
        d.classList.remove('full');
        d.classList.add('half');

      } else if (ww >= 401) {
        const d = document.querySelector('.item-image');
        d.classList.remove('half');
        d.classList.add('full');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });