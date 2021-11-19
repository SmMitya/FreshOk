$(function() {
  $('.slider__wrapper').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    infinite: false,
    fade: true
  });

  var mixer = mixitup('.product__catalog', {
    classNames: {
      block: 'menu',
      elementFilter: 'link',
      delineatorElement: '__',
      delineatorModifier: '--'
    }
});
});