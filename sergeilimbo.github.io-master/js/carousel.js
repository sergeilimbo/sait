/*------Scroller--------*/

var d = document;
var wrap = d.querySelector('.wrap');
var items = d.querySelector('.items');
var itemCount = d.querySelectorAll('.item').length;
var scroller = d.querySelector('.scroller');
var pos = 0;
var transform = Modernizr.prefixed('transform');

function setTransform() {
 items.style[transform] = 'translate3d(' + (-pos * (items.offsetWidth+2)) + 'px,0,0)';
}

function prev() {
 pos = Math.max(pos - 1, 0);
 setTransform();
}
function next() {
 pos = Math.min(pos + 1 , itemCount - 1);
 setTransform();
}
window.addEventListener('resize', setTransform);﻿

/*-------To-top-------*/
 $(function() { 
    $(window).scroll(function() { 
    if($(this).scrollTop() != 0) { 
    $('#toTop').fadeIn(); 
    } else { 
    $('#toTop').fadeOut();
    }
    }); 
    $('#toTop').click(function() { 
        $('body,html').animate({scrollTop:0},800); 
        }); 
        });
 
 /*------Jakor-----*/
 $(document).ready(function(){
    $("#refOnButton").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready(function(){
    $("#refOnButton2").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
