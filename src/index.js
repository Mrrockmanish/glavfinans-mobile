import './styles/index.scss'
import './styles/_query-ui-slider.scss'
import $ from "jquery";
import slickCarousel from 'slick-carousel';
import uiSlider from './js/jquery-ui-slider';
import mask from '../node_modules/jquery.maskedinput/src/jquery.maskedinput'


$('.phone-mask').mask("+7(999) 999-9999");
$('.pass-serial-mask').mask("9999");
$('.pass-number-mask').mask("999999");
$('.date-mask').mask("99.99.9999");
$('.pass-code-mask').mask("999-999");
$('.card-mask').mask('9999-9999-9999-9999');
$('.card-date-mask').mask('99/99');
$('.cvv-mask').mask('999');
$('.snils-mask').mask('999-999-99-99');


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

})



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