$(document).foundation();
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['3idees', 'ganarmas', 'resultadosreales','crecerrapido', 'quieresmejorar','footer'],
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 900,
        responsiveWidth: 1100,
        scrollOverflow: false,
        onLeave: function(index, nextIndex, direction){
        //leaving 1st section
        if((nextIndex == 2)||(nextIndex == 4)){
           $('.arrow-black').addClass('white');
           $('#fp-nav ul li, .fp-slidesNav ul li').addClass('dotwhite');
           $('#fp-nav ul li .fp-tooltip.right').removeClass('textblack');
           $('.top-bar-left a').addClass('logo3ideeswhite');
           $('.top-bar-right ul li a').addClass('textwhite');
        }
        //back to the 1st section
        if((index == 2)||(index == 4)){
            $('.arrow-black').removeClass('white');
            $('#fp-nav ul li, .fp-slidesNav ul li').removeClass('dotwhite');
            $('#fp-nav ul li .fp-tooltip.right').addClass('textblack');
            $('.top-bar-left a').removeClass('logo3ideeswhite');
            $('.top-bar-right ul li a').removeClass('textwhite');
        }
        if(index == 2){
            $('.top-bar .gradient-border .text').removeClass('goalsbg');
        }
        //back to the 1st section
        if(nextIndex == 2){
            $('.top-bar .gradient-border .text').addClass('goalsbg');
        }
        if(index == 4){
            $('.top-bar .gradient-border .text').removeClass('moreworkbg');
        }
        //back to the 1st section
        if(nextIndex == 4){
            $('.top-bar  .gradient-border .text').addClass('moreworkbg');
        }
    }
            });
        });

$(document).on('click', '.arrow-black', function(){
  $.fn.fullpage.moveSectionDown();
});

function getCookie(c_name){
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1){
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1){
        c_value = null;
    }else{
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1){
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}

function setCookie(c_name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

if(getCookie('tiendaaviso')!="1"){
    document.getElementById("barraaceptacion").style.display="block";
}
function PonerCookie(){
    setCookie('tiendaaviso','1',365);
    document.getElementById("barraaceptacion").style.display="none";
}
