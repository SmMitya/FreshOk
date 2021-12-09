$(function() {

  // Btn filter
  $('.top-filters__btn--filter').on('click', function (){
    $('.catalog-page__filter').addClass('catalog-page__filter--active');
    $('body').addClass('bg-gray hidden');
    $('.header').addClass('bg-gray');
  });

  $('.filter-catalog__btn-close').on('click', function (){
    $('.catalog-page__filter').removeClass('catalog-page__filter--active');
    if ( $('body').hasClass('bg-gray hidden') && $('.header').hasClass('bg-gray') ) {
      $('body').removeClass('bg-gray hidden');
      $('.header').removeClass('bg-gray');
    };
  });

  // Active grid or list button
  $('.top-filters__btn').on('click', function() {
    $('.top-filters__btn').removeClass('top-filters__btn--active');
    $(this).addClass('top-filters__btn--active');
  });

  $('.top-filters__btn--list').on('click', function() {
    $('.catalog-page__product-card').addClass('catalog-page__product-card--list')
    $('.catalog-page__grid-item').addClass('catalog-page__grid-item--list')
    $('.catalog-page__grid-list').addClass('catalog-page__grid-list--list')
  });

  $('.top-filters__btn--grid').on('click', function() {
    $('.catalog-page__product-card').removeClass('catalog-page__product-card--list')
    $('.catalog-page__grid-item').removeClass('catalog-page__grid-item--list')
    $('.catalog-page__grid-list').removeClass('catalog-page__grid-list--list')
  });

  // Form-styler form select
  $('.top-filters__select').styler({
    selectSmartPositioning: false
  });

  // Range slider
  var $range = $(".filter-catalog__range-input"),
    $inputFrom = $(".filter-catalog__range-from"),
    $inputTo = $(".filter-catalog__range-to"),
    instance,
    min = 40,
    max = 1100,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    skin: "round",
      type: "double",
      min: min,
      max: max,
      from: 100,
      to: 1000,
      onStart: updateInputs,
      onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs (data) {
    from = data.from;
      to = data.to;
      
      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);	
  }

  $inputFrom.on("input", function () {
      var val = $(this).prop("value");
      
      // validate
      if (val < min) {
          val = min;
      } else if (val > to) {
          val = to;
      }
      
      instance.update({
          from: val
      });
  });

  $inputTo.on("input", function () {
      var val = $(this).prop("value");
      
      // validate
      if (val < from) {
          val = from;
      } else if (val > max) {
          val = max;
      }
      
      instance.update({
          to: val
      });
  });

  // Filter catalog-page
  $('.categories-btn').on('click', function (){
    $('.categories-btn__list').slideToggle();
    $('.categories-btn').toggleClass('filter-catalog__btn--down')
  });

  $('.offer-btn').on('click', function (){
    $('.offer-btn__list').slideToggle();
    $('.offer-btn').toggleClass('filter-catalog__btn--down')
  });

  $('.brand-btn').on('click', function (){
    $('.brand-btn__list').slideToggle();
    $('.brand-btn').toggleClass('filter-catalog__btn--down')
  });

  $('.price-btn').on('click', function (){
    $('.price-btn__list').slideToggle();
    $('.price-btn').toggleClass('filter-catalog__btn--down')
  });

  // Search button for mobile
  $('.user-nav__link--search').on('click', function (){
    $('.header-bottom__form').toggleClass('header-bottom__form--active');
  });

  // Burger menu
  const burgerBtn = $('.header-top__burger'),
        mobMenu = $('.mob-menu');

  burgerBtn.on('click', function() {
    $('body').addClass('bg-gray hidden');
    $('.header').addClass('bg-gray');
    mobMenu.slideToggle();
  });

  $('.mob-menu a, .mob-menu button').on('click', function (){
    if ( $('body').hasClass('bg-gray hidden') && $('.header').hasClass('bg-gray') ) {
      $('body').removeClass('bg-gray hidden');
      $('.header').removeClass('bg-gray');
    };
    mobMenu.slideUp();
  });

  $(document).on('click', function (e) {
    if ( !burgerBtn.is(e.target) && !$('.burger__item').is(e.target) && !mobMenu.is(e.target) && mobMenu.has(e.target).length === 0 && !$('.top-filters__btn--filter').is(e.target) && !$('.catalog-page__filter').is(e.target) && $('.catalog-page__filter').has(e.target).length === 0) {
      $('.catalog-page__filter').removeClass('catalog-page__filter--active');
      mobMenu.slideUp();
      if ( $('body').hasClass('bg-gray hidden') && $('.header').hasClass('bg-gray') ) {
        $('body').removeClass('bg-gray hidden');
        $('.header').removeClass('bg-gray');
      };
    };
  });

  // Cart-box btn function
  const cartBtn = $('.user-nav__link--cart'),
        cartBtnClose = $('.cart-box__btn-close'),
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