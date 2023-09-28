//header
let menuHtml = new XMLHttpRequest();
menuHtml.open("get", "./menu.html", false);
menuHtml.send(null);
let header = document.getElementById("header_menu");
header.innerHTML = menuHtml.responseText;

//footer
let footerHtml = new XMLHttpRequest();
footerHtml.open("get", "./footer.html", false);
footerHtml.send(null);
let footer = document.getElementById("footer");
footer.innerHTML = footerHtml.responseText;

let renewHtml = new XMLHttpRequest();
renewHtml.open("get", "./renew2.html", false);
renewHtml.send(null);
let renew = document.getElementById("renew");
renew.innerHTML = renewHtml.responseText;

document.write("<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>");