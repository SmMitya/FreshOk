$(function() {

  const menuBtn = $('.header-catalog__btn'),
        menu    = $('.header-catalog__list');

  menuBtn.on('click', function (){
    menu.toggleClass('header-catalog__list--active');
  });

  $('.header-catalog a').on('click', function (){
    menu.removeClass('header-catalog__list--active');
  });

  $(document).click(function (e) {
      if ( !menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
          menu.removeClass('header-catalog__list--active');
      };
  });

  $('.slider-brands__wrapper').slick({
    arrows: false,
    slidesToShow: 6
  });

  $('.slider-promotion__wrapper').slick({
    prevArrow: $('.slider-promotion__prev'),
    nextArrow: $('.slider-promotion__next'),
    infinite: false,
    fade: true
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    },
    classNames: {
      block: 'filter-nav',
      elementFilter: 'btn',
      delineatorElement: '__',
      delineatorModifier: '--'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});