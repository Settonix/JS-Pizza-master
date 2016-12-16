/**
 * Created by chaika on 25.01.16.
 */

$(function(){
    //This code will execute when the page is ready
    var PizzaMenu = require('./pizza/PizzaMenu');
    var PizzaCart = require('./pizza/PizzaCart');
    var Pizza_List = require('./Pizza_List');
    var Cart_List = require('./Cart_List');


    PizzaCart.initialiseCart();
    console.log(PizzaMenu.initialiseMenu);
    PizzaMenu.initialiseMenu();


});