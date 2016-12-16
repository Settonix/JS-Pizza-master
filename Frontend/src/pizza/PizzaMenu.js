/**
 * Created by chaika on 02.02.16.
 */
var Templates = require('../Templates');
var PizzaCart = require('./PizzaCart');
var Pizza_List = require('../Pizza_List');

//HTML едемент куди будуть додаватися піци
var $pizza_list = $("#pizza_list");

function showPizzaList(list) {
    //Очищаємо старі піци в кошику
    $pizza_list.html("");

    //Онволення однієї піци
    function showOnePizza(pizza) {
        var html_code = Templates.PizzaMenu_OneItem({pizza: pizza});

        var $node = $(html_code);

        $node.find(".buy-button-big").click(function(){
            PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Big);
        });
        $node.find(".buy-button-small").click(function(){
            PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Small);
        });

        $node.find()

        $pizza_list.append($node);
    }

    list.forEach(showOnePizza);
}

//Показуємо меню піц
function initialiseMenu() {
    showPizzaList(Pizza_List);
    $("body").on("click", ".pizza-filter-button", function() {
        $this  = $(this);
        var filter = $this.attr("id");
        console.log(filter);
        filterPizza(filter);
    })


}






function filterPizza(filter) {
    //Масив куди потраплять піци які треба показати
    var pizza_shown = [];

    Pizza_List.forEach(function(pizza){
        //Якщо піка відповідає фільтру
         if(pizza.type = filter) {
             pizza_shown.push(pizza);
         }


    });

    //Показати відфільтровані піци
    showPizzaList(pizza_shown);
}



exports.filterPizza = filterPizza;
exports.initialiseMenu = initialiseMenu;