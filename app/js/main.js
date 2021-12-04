$(function() {

  // Search button for mobile
  $('.user-nav__link--search').on('click', function (){
    $('.search-mob__form').toggleClass('search-mob__form--active');
  });

  // Burger menu
  const burgerBtn = $('.header-top__burger'),
        mobMenu = $('.mob-menu'),
        mobBtnClose = $('.mob-menu__btn-close');

  burgerBtn.on('click', function() {
    $('body').addClass('bg-gray');
    mobMenu.slideToggle();
  });

  $('.mob-menu a, .mob-menu button').on('click', function (){
    $('body').removeClass('bg-gray');
    mobMenu.slideUp();
  });

  mobBtnClose.on('click', function (){
    mobMenu.slideUp();
    $('body').removeClass('bg-gray');
  });

  $(document).on('click', function (e) {
    if ( !burgerBtn.is(e.target) && !mobMenu.is(e.target) && mobMenu.has(e.target).length === 0) {
      mobMenu.slideUp();
      $('body').removeClass('bg-gray');
    };
  });

  // Cart-box btn function
  const cartBtn = $('.user-nav__link--cart'),
        cartBtnClose = $('.cart-box__btn-close');
        cartBox = $('.cart-box');

  cartBtn.on('click', function (){
    cartBox.addClass('cart-box--visible');
  });

  cartBtnClose.on('click', function (){
    cartBox.removeClass('cart-box--visible');
  });

  $(document).on('click', function (e) {
    if ( !cartBtn.is(e.target) && !cartBox.is(e.target) && cartBox.has(e.target).length === 0) {
      cartBox.removeClass('cart-box--visible');
    };
  });


  // Form-styler button
  $('.counter-btn').styler();
  
   // Header-catalog for desktop
  const menuBtn = $('.header-catalog__btn'),
        menu    = $('.header-catalog__list');

  menuBtn.on('click', function (){
    menu.slideToggle();
  });

  $('.header-catalog__link').on('click', function (){
    menu.slideUp();
  });

  $(document).on('click', function (e) {
      if ( !menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
        menu.slideUp();
      };
  });


  // Sliders
  $('.slider-brands__wrapper').slick({
    arrows: false,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  });

  $('.slider-promotion__wrapper').slick({
    prevArrow: $('.slider-promotion__prev'),
    nextArrow: $('.slider-promotion__next'),
    infinite: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          dots: true,
          arrows: false
        }
      },
    ]
  });

  // MixiiUP
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