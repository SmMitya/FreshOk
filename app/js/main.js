$(function() {

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