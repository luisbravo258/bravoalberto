$(document).ready(function() {
  //CATALOG PICS ANMIATION
  $(".timeline-image").hover(
    function() {
      $(this).find(".img-circle").animate({
        padding: '20px'
      }, '5000')
    },
    function() {
      $(this).find(".img-circle").animate({
        padding: '0px'
      }, '1000')
    });
  //CATALOG PICS ANIMATION



  //  $('.brand-name').hover(function() {
  //    $main_text = $(this).text();
  //    $(this).text("Luis Alberto Bravo Santiago");
  //  }, function() {
  //    $(this).text($main_text);
  //  });


});

$(document).ready(function() {
  $("body").css("display", "none");

  $("body").fadeIn(1000);

  $("a.transition").click(function(event) {
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(300, redirectPage);
  });

  function redirectPage() {
    window.location = linkLocation;
  }
});
