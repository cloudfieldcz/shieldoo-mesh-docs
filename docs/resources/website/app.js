function compactizeNav() {
  var $logo = $(".logo-menu"); $logo.toggleClass('scrolled', $(this).scrollTop() > $logo.height());
  var $bg = $(".section-header"); $bg.toggleClass('scrolled', $(this).scrollTop() > $logo.height());
  var $nav = $(".nav"); $nav.toggleClass('scrolled', $(this).scrollTop() > $logo.height());
  var $logo_compact = $(".logo-compact"); $logo_compact.toggleClass('scrolled', $(this).scrollTop() > $logo.height());
  var $ham = $("#ham"); $ham.toggleClass('scrolled', $(this).scrollTop() > $logo.height());

};
compactizeNav();
$(document).scroll(function () { compactizeNav(); });

/* toggle mobile menu */
menuon = false;
$('#ham').click(function () {
  if (menuon == false) {
    menuon = true;
    //$('body').addClass("fixedPosition");
    //disableScroll();
    $(this).addClass('open');
    $('.mobile-menu').addClass('open-menu');
  }
  //if menu is ON
  else { closemenu(); }
});

function closemenu() {
  menuon = false;
  //enableScroll();
  $('#ham').removeClass('open');
  $('.mobile-menu').removeClass('open-menu');
  //$('body').removeClass("fixedPosition"); 
}

$(window).on('scroll', function () {
  if (menuon) {
    // console.log('close menu');
    closemenu();
  }
})

// Hide ham on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#ham').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('#ham').removeClass('ham-down').addClass('ham-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('#ham').removeClass('ham-up').addClass('ham-down');
    }
  }

  lastScrollTop = st;
}

//toggle read-mores
$('.toggle-more').click(function () {
  $(this).prev().slideToggle(200);
  $(this).next().addClass('scale-x');
  $(this).parent().addClass('mb');
  $(this).toggleClass('toggle-more-rotate');

});

//glossary menu
$('.alphabet-menu a').each(function () {
  l = $(this).text();
  console.log(l);
  $(this).attr('href', '#' + l);
  $(this).attr('data-letter', l);
});

//glossary big letters inicials
alphabet = [];
$(".glossary-item .glossary-term").each(function (index) {
  //console.log( index + ": " + $( this ).text() );
  term = $(this).text();
  letter = term.charAt(0); letter = letter.toUpperCase();
  //console.log(letter);
  wasAlready = jQuery.inArray(letter, alphabet);
  if (wasAlready == '-1') { wasAlready = false } else { wasAlready = true };
  if (!wasAlready) {
    alphabet.push(letter);
    $(this).before('<a id="' + letter + '" class="anchor"></a><h3>' + letter + '</h3>');
    $('[data-letter="' + letter + '"]').addClass('active');
  }
});

$('.glossary-term').click(function () {
  console.log('click');
  $('.glossary-desc').slideUp();
  $(this).parent().find('.glossary-desc').slideDown();
});


/*tooltip*/
/*var mouseX, mouseY;
$('.glossary-span').mouseover(function(e) {
  //pos = $(this).offset();
  th =  $('.tooltip').height();
  mouseX = e.pageX;
  mouseY = e.pageY;
  //console.log(mouseX);
  console.log(mouseY);
  //x = pos.left - 250;
  //y = pos.top - th - 380;

  //console.log(th);
  $('.tooltip').css({top: mouseY, left: mouseX, display: 'block'});
   
})  

$('.glossary-span').mouseout(function() {
  $('.tooltip').css({display:'none'});
})*/

$('.glossary-span').mousemove(function (event) {
  th = $('.tooltip').height();
  var left = event.pageX - $(this).offset().left + 400;
  var top = event.pageY - $(this).offset().top - th + 150;
  $('.tooltip').css({ top: top, left: left }).show();
  console.log(left, top);
});
$('.glossary-span').mouseout(function () {
  $('.tooltip').hide();
});

//pricing
$('.punto').mouseover(function () {
  $('.tooltip-pricing').show();
});
$('.punto').mouseout(function () {
  $('.tooltip-pricing').hide();
});

$('.x-early').click(function () {
  $('.early').hide();
});

$('.early-close-but').click(function () {
  $('.early').hide();
});
