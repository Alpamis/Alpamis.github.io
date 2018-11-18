$(document).ready(function(){

	$('input:radio,input:checkbox,input:file, select').styler({
	});


// burger------------------------------------------------------------
	$('.click-menu').on('click', function() {

		$('.center-menu').slideToggle(300, function(){

			if($(this).css('display')==='none'){
				$(this).removeAttr('style');
			}
		});
	});


//Topsearch--------------------------------------
	  $('.center-ico .icon-search2').click(function(){
	  	
	    if ( $(this).hasClass('current')) {
	      $(this).removeClass('current');
	      $('.search').slideUp(400);
	    } else {
	      $(this).addClass('current');
	        $('.search').slideDown(400);
	    }
	    return false;
	  });

// Модальное окно----------------------------------------------
		// открыть по кнопке
		$('.user').click(function() { 
		  
		  $('.js-overlay-campaign').fadeIn();
		  $('.js-overlay-campaign').addClass('disabled');
		});

		// закрыть на крестик
		$('.js-close-campaign').click(function() { 
		  $('.js-overlay-campaign').fadeOut();
		  
		});

		// закрыть по клику вне окна
		$(document).mouseup(function (e) { 
		  var popup = $('.js-popup-campaign');
		  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		    $('.js-overlay-campaign').fadeOut();
		    
		  }
		});

		// открыть по таймеру 
		/*$(window).on('load', function () { 
		  setTimeout(function(){
		    if($('.js-overlay-campaign').hasClass('disabled')) {
		      return false;
		    } else {
		      
		      $(".js-overlay-campaign").fadeIn();
		    }
		  }, 5000);
		});*/



// вкладки------------------------------------------------
	$( "#tabs" ).tabs();


//Accordion-----------------------------------------------------
    $('.br_sidelist > li > a').click(function(){
        if ($(this).parent('li').hasClass('current')){
            $(this).parent('li').removeClass('current');
            $(this).next().slideUp();
        }else{
            $('.br_sidelist > li').removeClass('current');
            $(this).parent('li').addClass('current');
            $('.br_sideblock .br_sidelist li ul').slideUp();
            $(this).next().slideDown();
        }
    });

    $('.br_input input').focus(function(){
        $(this).parent().addClass('current');
    });


    $('.br_input input').blur(function(){
        if($(this).val()!=''){
            
        }else{
            //$(this).parent().find('label').hide();
            $(this).parent().removeClass('current');
        }
    });








});

// input:radio  - пример как подключить инпуты с (type)ом
// input:checkbox - пример как подключить инпуты с (type)ом
// input:file - пример как подключить инпуты с (type)ом
// <option data-placeholder="Выберите город"></option> - текст по умолчанию