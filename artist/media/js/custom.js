


$(document).ready(function(){

  $("#slider").owlCarousel({
  	items:1,
  	dots:true,
    nav:true
  });

    //Focus
    $('.br_input input').focus(function(){
    	$(this).parent().addClass('focus');
    });

  //Focus
    $('.br_input input').blur(function(){
    	if($(this).val()!=''){

    	}else{
    		$(this).parent().removeClass('focus');
    	}
    });


    $('.br_input input').change(function(){
    	if ($(this).val()!='') {
    		$(this).parent().addClass('focus');
    		$(this).parent().removeClass('error');
    		$(this).parent().find('label small').remove();
    	}else{
    		$(this).parent().addClass('error');
    		$(this).parent().find('label').append('<small>* - Заполните поле</small>');
    	}
    });


    jQuery(".artist h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '72px' });



















});


// items:1 - количество слайда
// autoplay:true/false - Автослайдер
// autoplayTimeout:1000 - Таймер слайда
// dots:true,false - Показать точки навигации
// nav:true, false - показать next/prev кнопки
// margin:10 - отступ между картинками (px)
// loop:true, false - бесконечность слайда
// merge:true.false - сливаться друг к другу
// autoplayHoverPause:true, false - пауза приноведении
// center:false,true - с центра начнется слайд