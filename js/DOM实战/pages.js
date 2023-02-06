function createItem(no, title, clicktimes, replytimes) {
    var item = document.createElement("div");
    item.setAttribute("class", "item");
    var html = '<div class="no">' + no + '</div>' +
        '<div class="title">' + title + '</div><div class="info">' +
        '<span class="iconfont">&#xe6e2; ' + clicktimes + '</span>' +
        '<span class="iconfont">&#xe63c; ' + replytimes + '</span></div>' +
        '<span class="iconfont smile">&#xe614;</span>'
    item.innerHTML = html;
    return item;
}
var oList = document.getElementById("list");

var data = [];
for (var i = 0; i < 100; i++) {
    data.push({ no: i, title: "标题" + i, clicktimes: i * 10, replytimes: i * 11 });
}

function getDate(pages) {
    return data.slice(pages * 12, pages * 12 + 12);
}

function fillDom(pages) {
    //清除当前页面的item
    while (oList.hasChildNodes()) {
        oList.removeChild(oList.lastChild);
    }

    var data = getDate(pages);
    var item = data.map(function (i) {
        return createItem(i.no, i.title, i.clicktimes, i.replytimes);
    })
    item.forEach(function (i) {
        return oList.appendChild(i);
    })

}
var pages = document.getElementById("page")
//动态生成翻页链接
function createPage(pagenum) {
    var a = document.createElement("a");
    a.setAttribute("href", "#");
    a.innerHTML = pagenum + 1;
    return a;
}
function fillPage() {
    for (var i = 0; i < Math.ceil(data.length / 12); i++) {
        pages.appendChild(createPage(i));
    }
}
fillDom(0);
fillPage();

var page = document.querySelectorAll(".page a");
var pagePre = document.getElementById("page_pre");
var pageNext = document.getElementById("page_next");
var p = 0;
for (let i = 0; i < page.length; i++) {
    page[i].addEventListener("click", function () {

        for (let j = 0; j < page.length; j++) {
            page[j].className = "";
        } p = i;
        page[i].className = "onpage";
        fillDom(i);

    })

}
pagePre.onclick = function () {
    for (let i = 0; i < page.length; i++) {
        page[i].className = "";
    }
    page[p - 1].className = "onpage";
    fillDom(p - 1);
    p = p - 1;
}
pageNext.onclick = function () {
    for (let i = 0; i < page.length; i++) {
        page[i].className = "";
    }
    page[p + 1].className = "onpage";
    fillDom(p + 1);
    p = p + 1;
}
page[0].className = "onpage";


