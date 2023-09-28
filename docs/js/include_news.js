let renew2Html = new XMLHttpRequest();
renew2Html.open("get", "./renew2.html", false);
renew2Html.send(null);
let renew2 = document.getElementById("renew2");
renew2.innerHTML = renew2Html.responseText;
