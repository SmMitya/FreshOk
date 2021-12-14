$(function() {

  //Rate star 
  $(".rate").rateYo({
    readOnly: true,
    starWidth: "16px",
    spacing: "6px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#FFB800",
    halfStar: true,
    starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">'+
             '<path d="M0.0229731 5.79566C0.0780973 5.62595 0.224753 5.50226 0.401315 5.47663L5.36139 4.75586L7.57966 0.26128C7.6586 0.101281 7.82157 0 7.99997 0C8.17841 0 8.34135 0.101281 8.42032 0.26128L10.6387 4.75586L15.5987 5.47663C15.7752 5.50226 15.9219 5.62595 15.977 5.79563C16.0322 5.96535 15.9862 6.15163 15.8584 6.27616L12.2694 9.77471L13.1165 14.7148C13.1467 14.8907 13.0744 15.0683 12.9301 15.1733C12.8484 15.2326 12.7517 15.2628 12.6545 15.2628C12.5799 15.2628 12.505 15.245 12.4365 15.2089L8 12.8765L3.56374 15.2089C3.40577 15.2919 3.21443 15.2781 3.07009 15.1732C2.92574 15.0683 2.8534 14.8906 2.88356 14.7147L3.73096 9.77471L0.141566 6.27613C0.0138168 6.15163 -0.0322151 5.96535 0.0229731 5.79566Z"/>'+
            '</svg>'
  });

  // Btn filter
  const filterBtn = $('.top-filters__btn--filter'),
        filterMenu = $('.catalog-page__filter');
        filterBtnClose = $('.filter-catalog__btn-close');

  filterBtn.on('click', function (){
    filterMenu.addClass('catalog-page__filter--active');
    $('body').addClass('bg-gray hidden');
    $('.header').addClass('bg-gray');
  });

  filterBtnClose.on('click', function (){
    filterMenu.removeClass('catalog-page__filter--active');
    $('body').removeClass('bg-gray hidden');
    $('.header').removeClass('bg-gray');
  });

    // Burger menu
  const burgerBtn = $('.header-top__burger'),
        mobMenu = $('.mob-menu');
        mobMenuItem = $('.burger__item');

  burgerBtn.on('click', function() {
    $('body').addClass('bg-gray hidden');
    $('.header').addClass('bg-gray');
    mobMenu.slideToggle();
  });

  $('.mob-menu a, .mob-menu button').on('click', function (){
    mobMenu.slideUp();
    $('body').removeClass('bg-gray hidden');
    $('.header').removeClass('bg-gray');
  });

  $(document).on('click', function (e) {
    if ( !burgerBtn.is(e.target) && !mobMenuItem.is(e.target) && !mobMenu.is(e.target) && mobMenu.has(e.target).length === 0 && !filterBtn.is(e.target) && !filterMenu.is(e.target) && filterMenu.has(e.target).length === 0) {
      filterMenu.removeClass('catalog-page__filter--active');
      mobMenu.slideUp();
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
    $('.catalog-page__product-card').addClass('catalog-page__product-card--list');
    $('.catalog-page__grid-item').addClass('catalog-page__grid-item--list');
    $('.catalog-page__grid-list').addClass('catalog-page__grid-list--list');
  });

  $('.top-filters__btn--grid').on('click', function() {
    $('.catalog-page__product-card').removeClass('catalog-page__product-card--list');
    $('.catalog-page__grid-item').removeClass('catalog-page__grid-item--list');
    $('.catalog-page__grid-list').removeClass('catalog-page__grid-list--list');
  });

  $(window).resize(function(){

    if($(window).width() <= 992){
      $('.catalog-page__product-card').removeClass('catalog-page__product-card--list');
      $('.catalog-page__grid-item').removeClass('catalog-page__grid-item--list');
      $('.catalog-page__grid-list').removeClass('catalog-page__grid-list--list');
    }
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
  $('.filter-catalog__btn--categories').on('click', function (){
    $('.filter-catalog__list--categories').slideToggle();
    $('.filter-catalog__btn--categories').toggleClass('filter-catalog__btn--down')
  });

  $('.filter-catalog__btn--offer').on('click', function (){
    $('.filter-catalog__form--offer').slideToggle();
    $('.filter-catalog__btn--offer').toggleClass('filter-catalog__btn--down')
  });

  $('.filter-catalog__btn--brand').on('click', function (){
    $('.filter-catalog__form--brand').slideToggle();
    $('.filter-catalog__btn--brand').toggleClass('filter-catalog__btn--down')
  });

  $('.filter-catalog__btn--price').on('click', function (){
    $('.filter-catalog__form--price').slideToggle();
    $('.filter-catalog__btn--price').toggleClass('filter-catalog__btn--down')
  });

  // Search button for mobile
  $('.user-nav__link--search').on('click', function (){
    $('.header-bottom__form').toggleClass('header-bottom__form--active');
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
  $('.counter-btn__input').styler();
  
   // Header-catalog for desktop
  const menuBtn = $('.header-catalog__btn'),
        menu    = $('.header-catalog__list');

  menuBtn.on('click', function (){
    menu.slideToggle();
    menuBtn.toggleClass('header-catalog__btn--up')
  });

  $('.header-catalog__link').on('click', function (){
    menu.slideUp();
    menuBtn.removeClass('header-catalog__btn--up')
  });

  $(document).on('click', function (e) {
      if ( !menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
        menu.slideUp();
        menuBtn.removeClass('header-catalog__btn--up')
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

  // MixitUP
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