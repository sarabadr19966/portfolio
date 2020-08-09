    if($(window).width() >=992)
{
    $('.navbar-collapse').toggleClass('collapse');
}
else{
    $('nav ul li').click(()=>{
        $('.navbar-toggler').click()
    })
}
$('li').click(function(){
    $('li .triangle-left').addClass('d-none');
    $('li a').removeClass('current');
    $(this).find('a').addClass('current');
    $(this).find('.triangle-left').removeClass('d-none');
    if($(this).hasClass('skll')){
      
        commonStuff('.Skils',' .skl')
    }
    else if($(this).hasClass('edu')){
      
        commonStuff('.Education',' .edc')
    }
    else if($(this).hasClass('prj')){
      
        commonStuff('.Projects','.p1')
    }
    else if($(this).hasClass('cnts')){
        commonStuff('.Contact',' .ct')
    }
    else if($(this).hasClass('abt')){
        $('section').addClass('d-none');
        $('.About').removeClass('d-none');
        $('nav .info2').addClass('d-none')
    }
})

function commonStuff(elmp,elm){
    $('section').addClass('d-none');
    $(elmp).removeClass('d-none');
    $('nav .info2').removeClass('d-none');

    setTimeout(
        function() 
        {
            $(elm).css({
                'animation':'fadeInRight',
                'animation-duration': '1s',
                'opacity':'1'  }
            )
        }
    ,600);
}

