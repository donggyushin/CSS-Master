$(document).ready(() => {
  $(".topBtn").fadeOut();
});

$(window).scroll(() => {
  if ($(window).scrollTop() > 40) {
    $(".topBtn").fadeIn();
  } else {
    $(".topBtn").fadeOut();
  }
});

$(".topBtn").click(() => {
  $("html, body").animate({ scrollTop: 0 }, 800);
});
