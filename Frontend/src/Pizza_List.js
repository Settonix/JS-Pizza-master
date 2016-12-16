/**
 * Created by diana on 12.01.16.
 */

var pizza_info = [
    {
        id:1,
        icon:'img/pizza_7.jpg',
        title: "Імпреза",
        type: 'М’ясна піца',
        content: {
            meat: ['балик', 'салямі'],
            chicken: ['куриця'],
            cheese: ['сир моцарелла', 'сир рокфорд'],
            pineapple: ['ананаси'],
            additional: ['томатна паста', 'петрушка']
        },
        small:{
            gram: 370,
            diametr: 30,
            price: 99
        },
        big:{
            gram: 660,
            diametr: 40,
            price: 169
        },
        is_new:true,
        is_popular:true

    },
    {
        id:2,
        icon:'img/pizza_2.jpg',
        title: "BBQ",
        type: 'М’ясна піца',
        content: {
            meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
            cheese: ['сир домашній'],
            mushroom: ['шампінйони'],
            additional: ['петрушка', 'оливки']
        },
        small:{
            gram: 460,
            diametr: 30,
            price: 139
        },
        big:{
            gram: 840,
            diametr: 40,
            price: 199
        },
        is_popular:true
    },
    {
        id:3,
        icon:'img/pizza_1.jpg',
        title: "Міксовий поло",
        type: 'М’ясна піца',
        content: {
            meat: ['вітчина', 'куриця копчена'],
            cheese: ['сир моцарелла'],
            pineapple: ['ананаси'],
            additional: ['кукурудза', 'петрушка', 'соус томатний']
        },
        small:{
            gram: 430,
            diametr: 30,
            price: 115
        },
        big:{
            gram: 780,
            diametr: 40,
            price: 179
        }
    },
    {
        id:4,
        icon:'img/pizza_5.jpg',
        title: "Сициліано",
        type: 'М’ясна піца',
        content: {
            meat: ['вітчина', 'салямі'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            additional: ['перець болгарський',  'соус томатний']
        },
        small:{
            gram: 450,
            diametr: 30,
            price: 111
        },
        big:{
            gram: 790,
            diametr: 40,
            price: 169
        }
    },
    {
        id:17,
        icon:'img/pizza_3.jpg',
        title: "Маргарита",
        type: 'Вега піца',
        content: {
            cheese: ['сир моцарелла', 'сир домашній'],
            tomato: ['помідори'],
            additional: ['базилік', 'оливкова олія', 'соус томатний']
        },
        small:{
            gram: 370,
            diametr: 30,
            price: 89
        }
    },
    {
        id:43,
        icon:'img/pizza_6.jpg',
        title: "Мікс смаків",
        type: 'М’ясна піца',
        content: {
            meat: ['ковбаски'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            pineapple: ['ананаси'],
            additional: ['цибуля кримська', 'огірки квашені', 'соус гірчичний']
        },
        small:{
            gram: 470,
            diametr: 30,
            price: 115
        },
        big:{
            gram: 780,
            diametr: 40,
            price: 180
        }
    },
    {
        id:90,
        icon:'img/pizza_8.jpg',
        title: "Дольче Маре",
        type: 'Морська піца',
        content: {
            ocean: ['криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        big:{
            gram: 845,
            diametr: 40,
            price: 399
        }
    },
    {
        id:6,
        icon:'img/pizza_4.jpg',
        title: "Россо Густо",
        type: 'Морська піца',
        content: {
            ocean: ['ікра червона', 'лосось копчений'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        small:{
            gram: 400,
            diametr: 30,
            price: 189
        },
        big:{
            gram: 700,
            diametr: 40,
            price: 299
        }
    }
];

module.exports = pizza_info;