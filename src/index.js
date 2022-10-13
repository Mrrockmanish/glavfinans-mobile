import './styles/index.scss'
import './styles/jquery-ui-date-picker.css'
import './styles/_ui-slider-custom.scss'
import $ from "jquery";

import slickCarousel from 'slick-carousel';
import ui from './js/jquery-ui';
import mask from '../node_modules/jquery.maskedinput/src/jquery.maskedinput'
import punch from './js/jquery-ui-toch-punch'



$(document).ready(function (){

  $('.input-dropdown__input-wrap').on('click', function (){
    $(this).closest('.input-dropdown').find('.input-dropdown__variants').show();
    $(this).closest('.input-dropdown').find('.dropdown-icon').addClass('open');


    $(document).mouseup(function (e){ // событие клика по веб-документу
      let div = $(".input-dropdown"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.input-dropdown__variants').hide(); // скрываем его
        $('.dropdown-icon').removeClass('open');
      }
    });


  })

  $('.input-dropdown__item').on('click', function (){
    let text = $(this).text();
    $(this).closest('.input-dropdown').find('.input-dropdown__input').val(text);
    $(this).closest('.input-dropdown').find('.input-dropdown__variants').hide();
    $('.dropdown-icon').removeClass('open');
  })


  $('.input-dropdown').on('click', '.dropdown-icon:not(.open)', function () {
    $(this).closest('.input-dropdown').find('.input-dropdown__variants').show();
    $(this).addClass('open');
  })

  $('.input-dropdown').on('click', '.dropdown-icon.open', function () {
    $(this).closest('.input-dropdown').find('.input-dropdown__variants').hide();
    $(this).removeClass('open');
  })

  // маски
  $('.phone-mask').mask("+7(999) 999-9999");
  $('.pass-serial-mask').mask("9999");
  $('.pass-number-mask').mask("999999");
  $('.serial-and-number').mask("9999 999999");
  $('.pass-number-mask').mask("999999");
  $('.date-mask').mask("99.99.9999");
  $('.pass-code-mask').mask("999-999");
  $('.card-mask').mask('9999-9999-9999-9999');
  $('.card-date-mask').mask('99/99');
  $('.cvv-mask').mask('999');
  $('.snils-mask').mask('999-999-99-99');


  // календарик

  /* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
  /* Written by Andrew Stromnov (stromnov@gmail.com). */
  ( function( factory ) {
    "use strict";

    if ( typeof define === "function" && define.amd ) {

      // AMD. Register as an anonymous module.
      define( [ "../widgets/datepicker" ], factory );
    } else {

      // Browser globals
      factory( jQuery.datepicker );
    }
  } )( function( datepicker ) {
    "use strict";

    datepicker.regional.ru = {
      closeText: "Закрыть",
      prevText: "&#x3C;Пред",
      nextText: "След&#x3E;",
      currentText: "Сегодня",
      monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
      monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
        "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
      dayNames: [ "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота" ],
      dayNamesShort: [ "вск", "пнд", "втр", "срд", "чтв", "птн", "сбт" ],
      dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
      weekHeader: "Нед",
      dateFormat: "dd.mm.yy",
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: "" };
    datepicker.setDefaults( datepicker.regional.ru );

    return datepicker.regional.ru;

  } );

  $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );

  $('.date-mask').datepicker({
    showOn: "button",
    buttonImage: require('./images/elements/calend.svg'),
    buttonImageOnly: true,
  });


// курсор при вводе вначале
  $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };


  $('.style-input').on('click', function (){
    $(this).focus();
  });

  $('.input-edit-icon').on('click', function (){

    const input = $(this).prev('.style-input');

    input.val('');

    input.removeClass('input-edit').focus();

  });


// калькулятор займов
  $('.calc-slider').each(function (){
    const sliderEl = $(this);
    const priceSlider = sliderEl.find('.calc-slider__price');
    const periodSlider = sliderEl.find('.calc-slider__period');

    priceSlider.slider({
      animate: "slow",
      range: "min",
      value: 6000,
      min: 1000,
      max: 30000,
      step: 1000,
      slide : function(event, ui) {
        sliderEl.find(".calc-slider__price-result").text(ui.value + ' руб.');
        sliderEl.find(".calc-slider__price-input").val(ui.value);
      }
    });

    sliderEl.find('.calc-slider__price-result').text(priceSlider.slider("value") + " руб.");

    periodSlider.slider({
      animate: "slow",
      range: "min",
      value: 12,
      min: 7,
      max: 30,
      step: 1,
      slide : function(event, ui) {
        sliderEl.find(".calc-slider__period-result").text(ui.value + ' дней');
        sliderEl.find(".calc-slider__period-input").val(ui.value);
      }
    });

    sliderEl.find('.calc-slider__period-result').text(periodSlider.slider("value") + " дней");

  });


// калькулятор займов вторая вариация

  $('.sum__count').on('change', function (){
    let count = $(this).val();

    if (count < 6000) {
      $(this).val('6000');
    } else if (count > 30000) {
      $(this).val('30000');
    }

  });

  $('.sum__plus').on('click', function (){
    let count = $(this).closest('.sum').find('.sum__count').val();
    if (count < 30000) {
      $(this).closest('.sum').find('.sum__count').val(+count + 1000);
    }
  });

  $('.sum__minus').on('click', function (){
    let count = $(this).closest('.sum').find('.sum__count').val();
    if (count > 6000) {
      $(this).closest('.sum').find('.sum__count').val(+count - 1000);
    }
  });

// дни

  $('.period__count').on('change', function (){
    let count = $(this).val();

    if (count < 7) {
      $(this).val('7');
    } else if (count > 30) {
      $(this).val('30');
    }

  });

  $('.period__plus').on('click', function (){
    let count = $(this).closest('.period').find('.period__count').val();
    if (count < 30) {
      $(this).closest('.period').find('.period__count').val(+count + 1);
    }
  });

  $('.period__minus').on('click', function (){
    let count = $(this).closest('.period').find('.period__count').val();
    if (count > 7) {
      $(this).closest('.period').find('.period__count').val(+count - 1);
    }
  });



// анимация телефона
  if ($('.offer__img')[0]) {
    $(window).scroll(function (){
      const scrollTop = $(window).scrollTop();

      if(scrollTop > 10) {
        $('.offer__img').addClass('scale-down')
      } else if (scrollTop < 10) {
        $('.offer__img').removeClass('scale-down')
      }


    })
  }


// карусель займов
  $('.loans-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    appendArrows: $('.loans-carousel-arrows'),
    prevArrow: `<div class="w-10 h-10 border-blue border rounded-full flex items-center justify-center text-main hover:text-white bg-transparent hover:bg-blue transition duration-300 cursor-pointer">
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L2 7L8 13" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>`,
    nextArrow: `<div class="w-10 h-10 border-blue border rounded-full flex items-center justify-center text-main hover:text-white bg-transparent hover:bg-blue transition duration-300 cursor-pointer">
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L7 7L0.999999 1" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>`
  })


// отказ от страховки
  $('.no-save').on('click', function (){
    $('.white-container-dialog').fadeIn();
  });

  $('.no-save-confirm').on('click', function (){
    $('.white-container-dialog').fadeOut();
  });


// вопросы
  $('.question__caption').on('click', function (){
    $(this).toggleClass('text-8A text-main font-semibold');
    $(this).find('.question__chevron').toggleClass('rotate-x-180');
    $(this).closest('.question').find('.question__content').slideToggle();
  })

// отображение фото при загрузке файла

// console.log($('.input-upload')[0].files);

  const readURL = (input, element) => {

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        element.closest('.upload-item').find('.show-img img').attr('src', e.target.result);
        element.closest('.upload-item').find('.show-img').fadeIn();
        element.closest('.upload-item').find('.upload-item__plus').hide();
        element.closest('.upload-item').find('.upload-item__cancel').show();
      };
      reader.readAsDataURL(input.files[0]);
    }
  }


  $('.input-upload').each(function (){
    $(this).change(function (){
      readURL(this, $(this));
    })
  });

// удаление фото из поля file

  $('.upload-item__cancel').on('click', function (){
    $(this).closest('.upload-item').find('.input-upload').val('');
    $(this).closest('.upload-item').find('.show-img img').attr('src', '');
    $(this).closest('.upload-item').find('.show-img').hide();
    $(this).closest('.upload-item').find('.upload-item__plus').show();
    $(this).closest('.upload-item').find('.upload-item__cancel').hide();
  });

// мобильное меню

  $('.header__bars').on('click', function (){
    $('body').toggleClass('overflow-hidden');
    $('.mobile-nav').fadeToggle();
  });


  // галочка при вооде смс
  $('.input-validate').on('keyup', '.style-input', function (){

    const count = $(this).val();

    if (count.length == 4) {
      $(this).closest('.input-validate').addClass('success')
    } else {
      $(this).closest('.input-validate').removeClass('success')
    }

  });

  // партнерские предложения

  $('.offers').on('change', '.checkbox-blue', function (){

    if (!$('.offers__sub-one').is(':checked')) {
      $(this).closest('.offers').find('.offers__main').prop('checked', false);
      $(this).closest('.offers').find('.offers__sub-two').prop('checked', false);
    }

    if ($('.offers__fail').is(':checked')) {
      $(this).closest('.offers').find('.offers__main').prop('checked', false);
      $(this).closest('.offers').find('.offers__sub-one').prop('checked', false);
      $(this).closest('.offers').find('.offers__sub-two').prop('checked', false);
    }

  });

  $('.offers .open').on('click', function (){
    $(this).closest('.offers').find('.offers__main-inner').slideToggle();
  });


  // соглашение с условиям кредита

  $('.credit-agree__check').on('change', function (){

    if ($(this).is(':checked')) {

      $(this).closest('.credit-agree').find('.credit-agree__open').find('input').prop('checked', true);

    } else {
      $(this).closest('.credit-agree').find('.credit-agree__open').find('input').prop('checked', false);
    }

  });

  $('.credit-agree__more-toggle').on('click', function (){
    $('.credit-agree__more-toggle-svg').toggleClass('rotate-180');
    $(this).closest('.credit-agree').find('.credit-agree__open').slideToggle();
  });

});

