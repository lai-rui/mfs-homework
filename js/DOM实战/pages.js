//生成一个item
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
//生成一个翻页的a链接
function createPage(pagenum) {
    var a = document.createElement("a");
    a.setAttribute("href", "#");
    a.innerHTML = pagenum + 1;
    return a;
}
//获取父元素dom
var oList = document.getElementById("list");
var pages = document.getElementById("page")
//定义item数据
var data = [];
for (var i = 0; i < 100; i++) {
    data.push({ no: i, title: "标题" + i, clicktimes: i * 10, replytimes: i * 11 });
}
//获取一页中所有item数据
function getDate(pages) {
    return data.slice(pages * 12, pages * 12 + 12);
}
//将创建的item铺满页面
function fillDom(pages) {
    //清除当前页面的item
    while (oList.hasChildNodes()) {
        oList.removeChild(oList.lastChild);
    }
    //在list中插入item
    var data = getDate(pages);
    var item = data.map(function (i) {
        return createItem(i.no, i.title, i.clicktimes, i.replytimes);
    })
    item.forEach(function (i) {
        return oList.appendChild(i);
    })

}
//将翻页铺上画面
function fillPage() {
    for (var i = 0; i < Math.ceil(data.length / 12); i++) {
        pages.appendChild(createPage(i));
    }
}
fillDom(0);
fillPage();
//翻页响应事件
var page = document.querySelectorAll(".page a");
var pagePre = document.getElementById("page_pre");
var pageNext = document.getElementById("page_next");
var p = 0;//当前页数
for (let i = 0; i < page.length; i++) {
    page[i].addEventListener("click", function () {

        for (let j = 0; j < page.length; j++) {
            page[j].className = "";
        } p = i;
        page[i].className = "onpage";
        fillDom(i);

    })

}
//左右箭头翻页
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


