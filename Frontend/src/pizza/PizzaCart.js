/**
 * Created by chaika on 02.02.16.
 */
var Templates = require('../Templates');
var Cart_List = require('../Cart_List');


//Перелік розмірів піци
var PizzaSize = {
    Big: "big",
    Small: "small"
};

//Змінна в якій зберігаються перелік піц в кошику
var Cart = [];
//Cart = Cart_List;


//HTML едемент куди будуть додаватися піци
var $cart = $("#cart");




function addToCart(pizza, size) {
    console.log(pizza.title);
    //Додавання однієї піци в кошик покупок
    for(var i = 0; i < Cart.length; i++)
        if(pizza == Cart[i].pizza && Cart[i].diametr == size ){
            Cart[i].quantity++;
            updateCart();
            return true;
        }
    //Приклад реалізації, можна робити будь-яким іншим способом
    Cart.push({
        pizza: pizza,
        size: size,
        quantity: 1
    });

    //Оновити вміст кошика на сторінці
    updateCart();

}

function removeFromCart(cart_item) {
    //Видалити піцу з кошика
    for(var i = 0; i < Cart.length; i++)
        if(cart_item.pizza == Cart[i].pizza && Cart[i].diametr == cart_item.diametr ){
            Cart.splice(i, 1);
        }
    //Після видалення оновити відображення
    save();
    updateCart();
}

//Обраховуємо кінцеву ціну
function totalPr(){
    var totalPrice = 0;

    Cart.forEach(function(pizza){
        if(pizza.size == "small")
            totalPrice += pizza.quantity * pizza.pizza.small.price;
        if(pizza.size == "big")
            totalPrice += pizza.quantity * pizza.pizza.big.price;
    });
    console.log(totalPrice);
    var tPr = document.getElementById('total-price');
    tPr.innerHTML = `Кінцева ціна: ${totalPrice} грн`;

}


function initialiseCart() {

    //Фукнція віпрацьвуватиме при завантаженні сторінки
    //Тут можна наприклад, зчитати вміст корзини який збережено в Local Storage то показати його

    if(localStorage.getItem('Cart')){
        retrievedObject = localStorage.getItem('Cart');

        var parsed = JSON.parse(retrievedObject);

        for(var x in parsed){
            Cart.push(parsed[x]);
        }
        updateCart();
    }

    updateCart();
}



function updateCart() {
    showCartList();
    save();
    totalPr();
}


function getPizzaInCart() {
    //Повертає піци які зберігаються в кошику
    return Cart;
}

function save(){
    localStorage.setItem('Cart', JSON.stringify(Cart));
    //очищення local storage
   // localStorage.setItem('Cart', JSON.stringify([]));
}

function showCartList() {
    //Функція викликається при зміні вмісту кошика
    //Тут можна наприклад показати оновлений кошик на екрані та зберегти вміт кошика в Local Storage

    //Очищаємо старі піци в кошику
    $cart.html("");

    //Онволення однієї піци
    function showOnePizzaInCart(cart_item) {

        var html_code = Templates.PizzaCart_OneItem(cart_item);

        var $node = $(html_code);

        $node.find(".plus").click(function(){
            //Збільшуємо кількість замовлених піц
            cart_item.quantity += 1;
            //Оновлюємо відображення
            save();
            updateCart();
        });

        //Зменшуємо кількість замовлених піц
        $node.find(".minus").click(function(){
            cart_item.quantity -= 1;
            //Якщо кількість конкретної піци у кошику < 1 - прибираємо її
            if(cart_item.quantity < 1)
                removeFromCart(cart_item);
            //Оновлюємо відображення
            save();
            updateCart();

        });

        //Прибираємо піцу з кошика
        $node.find(".count-clear").click(function(){
            removeFromCart(cart_item);
            //Оновлюємо відображення
            updateCart();
        });

        //"Очистити замовлення"
        $("body").on("click", ".clear-order", function(){
            Cart.forEach(function(pizza){
                removeFromCart(pizza);
            });
        });

        $cart.append($node);

    }

    Cart.forEach(showOnePizzaInCart);

}


exports.removeFromCart = removeFromCart;
exports.addToCart = addToCart;

exports.getPizzaInCart = getPizzaInCart;
exports.initialiseCart = initialiseCart;

exports.PizzaSize = PizzaSize;