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
};

function newCard(name,source,addTo){
  var original = document.querySelector("#sampleCard");
  var copy =original.cloneNode("true");
  var pizzaSource = "images/"+source+".jpg";
  $(".card-img-top",copy).attr("src",pizzaSource);
  $('.card-title', copy).text(name);
  $(copy).attr("id",name);
  document.getElementById(addTo).appendChild(copy);


};

newCard("Pepperoni","pizzas/pepperoni","pizzaContainer");
newCard("Soganli","pizzas/onions","pizzaContainer");
newCard("Ananasli","pizzas/pineapple","pizzaContainer");
newCard("Sezar salati","salads/caesar-salad","saladContainer");
newCard("Coban salati","salads/choban-salad","saladContainer");
newCard("Kartof salati","salads/potato-salad","saladContainer");
