$(window).scroll(scrollFunction);

function scrollFunction() {
  if ( $(window).scrollTop() > 20 ) {
    $("#Button").show();
  } else {
    $("#Button").hide();
  }
};

function topFunction() {
    $(window).scrollTop(0);
  }
