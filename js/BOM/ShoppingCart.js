var oCart = document.getElementById("cart");
var oGoods = document.getElementById("goods");

// 加载商品数据
var data = [];
for (var i = 0; i < 5; i++) {
    data.push({ no: i, num: 1, img: i, title: "商品" + i });
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

//生成购物车数据
var cartD = [];
function getCartData(no, img, title, num) {
    cartD.push({ no: no, num: num, img: img, title: title });
}

// 生成购物车item
function createCart(img, title, num) {
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
// 生成购物车列表
function fillCart() {
    //清除当前页面的item
    while (oCart.hasChildNodes()) {
        oCart.removeChild(oCart.lastChild);
    }
    // 生成item
    var item = cartD.map(function (i) {
        return createCart(i.img, i.title, i.num);
    })
    item.forEach(function (i) {
        return oCart.appendChild(i);
    })
}
// 删除购物车数据
function removeItem(title) {
    cartD.splice(cartD.findIndex(item => item.title = title), 1);
}

//响应事件——加入购物车
var oAdd = document.querySelectorAll(".goods>.item>button");
for (let i = 0; i < oAdd.length; i++) {
    oAdd[i].addEventListener("click", function () {
        if (cartD.find(item => item.title == data[i].title) != undefined) {
            // console.log(data[i].title);
            var j = cartD.findIndex(item => item.title == data[i].title);
            cartD[j].num++;
        }
        else {
            getCartData(data[i].no, data[i].img, data[i].title, data[i].num);
        }
        fillCart();
        Remove();
        // oRemv=document.querySelectorAll(".cart>.item>button");
        localStorage.buy = oCart.innerHTML;
        localStorage.data = JSON.stringify(data);
        localStorage.cartD = JSON.stringify(cartD);
    })
}

//响应事件——删除
// var oRemv = document.querySelectorAll(".cart>.item>button");
function Remove() {
    var oRemv = document.querySelectorAll(".cart>.item>button");
    for (let i = 0; i < oRemv.length; i++) {
        oRemv[i].addEventListener("click", function () {
            removeItem(cartD[i].no);
            fillCart();
            Remove();
            // oRemv=document.querySelectorAll(".cart>.item>button");
            localStorage.buy = oCart.innerHTML;
            localStorage.data = JSON.stringify(data);
            localStorage.cartD = JSON.stringify(cartD);
        })
    }
}

// localStorage传值
var CartStorage = localStorage.buy;
var dataStorage = localStorage.data;
var cartDStorage = localStorage.cartD;
if (CartStorage == undefined)
    oCart.innerHTML = '';
else {
    oCart.innerHTML = CartStorage;
    data = JSON.parse(dataStorage);
    cartD = JSON.parse(cartDStorage);
}
fillCart();

Remove();
