// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

function addQuantity(){
  var quantity =parseInt($(".quantity").text());
  $(".quantity").text(quantity+1);
}
function reduceQuantity(){
  var quantity =parseInt($(".quantity").text());
  if(quantity>0){
  $(".quantity").text(quantity-1);
}
}
function newCard(name,source){
var test = $($("#mainContainer").html());
var pizzaSource="images/"+source+".jpg";
$(".card-img-top",test).attr("src",pizzaSource);
$('.card-title', test).text(name);
test.insertBefore("#sampleCard");
};
newCard("Salami","salami");
