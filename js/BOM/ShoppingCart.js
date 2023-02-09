var oCart = document.getElementById("cart");
var oGoods = document.getElementById("goods");
var Ginfor = document.querySelectorAll(".goods>.item>.infor");
// 加载商品数据
var data = [];
for (var i = 0; i < 5; i++) {
    data.push({ no: i, num: 0, img: i, title: "商品" + i });
}
// 生成商品item
function createGoods(img, title) {
    var item = document.createElement("div");
    item.setAttribute("class", "item");
    var html = '<div class="infor">' +
        '<img src="image/' + img + '.jpg" alt="?">' +
        '<div class="title">' + title + '</div></div>' +
        '<button id="remove">加入购物车</button>';
    item.innerHTML = html;
    return item;
}
// 生成商品列表
function fillGoods() {
    var item = data.map(function (i) {
        return createGoods(i.img, i.title);
    })
    item.forEach(function (i) {
        return oGoods.appendChild(i);
    })
}
fillGoods();
// 添加商品到购物车
function addItem(img, title, num) {
    var item = document.createElement("div");
    item.setAttribute("class", "item");
    var html = '<div class="infor">' +
        '<img src="image/' + img + '.jpg" alt="?">' +
        '<div class="title">' + title + '</div></div>' +
        '<button id="remove">删除</button>' +
        '<div id="num" class="num">x' + num + '</div>';
    item.innerHTML = html;
    return item;
}
//响应事件——加入购物车
var oAdd = document.querySelectorAll(".goods>.item>button");
var cItem = document.querySelectorAll(".cart>.item");
var cartGoods = [];
for (let i = 0; i < oAdd.length; i++) {
    oAdd[i].addEventListener("click", function () {
        var t = queryCart(data[i].no);
        console.log(t);
        if (t[0]) {
            var dom = cItem[t[1]];
            // oCart.removeChild(dom);
            data[i].num++;
            oCart.replaceChild(addItem(data[i].img, data[i].title, data[i].num), dom)
        }
        else {
            cartGoods.push(data[i].no);
            data[i].num++;
            oCart.appendChild(addItem(data[i].img, data[i].title, data[i].num));
        }

        cItem = document.querySelectorAll(".cart>.item");
        localStorage.buy = oCart.innerHTML;
        localStorage.cartGoods = JSON.stringify(cartGoods);
        localStorage.data = JSON.stringify(data);
        removeCart();
    })
}

// localStorage传值
var CartStorage = localStorage.buy;
var cartGoodsStorage = localStorage.cartGoods;
var dataStorage = localStorage.data;
var cItemStorage = localStorage.cItem;
if (CartStorage == undefined)
    oCart.innerHTML = '';
else {
    oCart.innerHTML = CartStorage;
    cItem = document.querySelectorAll(".cart>.item");
}
if (cartGoodsStorage != undefined)
    cartGoods = JSON.parse(cartGoodsStorage);
if (dataStorage != undefined)
    data = JSON.parse(dataStorage);

// 查询购物车是否有相同商品
function queryCart(goods) {
    var bool = [];
    bool[0] = false;
    for (let i = 0; i < cartGoods.length; i++) {
        if (cartGoods[i] == goods) {
            bool[0] = true;
            bool[1] = i;
        }
    }
    return bool;
}

//响应事件——删除
function removeCart() {
    var oRemv = document.querySelectorAll(".cart>.item>button");
    for (let i = 0; i < oRemv.length; i++) {
        oRemv[i].addEventListener("click", function () {
            var dom = cItem[i];
            data[cartGoods[i]].num = 0;
            cartGoods.splice(i, 1);
            oCart.removeChild(dom);
            localStorage.buy = oCart.innerHTML;
            localStorage.data = JSON.stringify(data);
            localStorage.cartGoods=JSON.stringify(cartGoods);
        })
    }
}