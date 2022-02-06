$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

themeLinks = document.querySelectorAll(".theme")


document.getElementById("mode").addEventListener("click", function(){
  mode = document.getElementsByTagName("body");
  theme = document.getElementById("theme")
  if(mode[0].id === "light"){
    mode[0].removeAttribute("id")
    theme.classList.remove("fas");
    theme.classList.remove("fa-moon");
    theme.classList.remove("fa-2x");
    theme.classList.add("fas");
    theme.classList.add("fa-sun");
    theme.classList.add("fa-2x");
  }
  else{
    mode[0].setAttribute("id","light")
    theme.classList.remove("fas");
    theme.classList.remove("fa-sun");
    theme.classList.remove("fa-2x");
    theme.classList.add("fas");
    theme.classList.add("fa-moon");
    theme.classList.add("fa-2x");
  }

})
