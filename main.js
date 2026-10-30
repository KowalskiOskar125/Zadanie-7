
const kontener = document.getElementById("kontener");

kontener.onclick = function() {
    this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
};

kontener.onmouseover = function() {
    this.style.fontSize = "2em";
};

kontener.onmouseout = function() {
    this.style.fontSize = "16px";
};


const paragraf = document.querySelector(".wyroznione");

paragraf.ondblclick = function() {
    this.textContent = "powiat radomski";
};

paragraf.onmouseover = function() {
    console.log(this.textContent);
};


const artykul = document.getElementById("artykul");
const liczba = document.getElementById("liczba");

artykul.onkeydown = function(event) {
    this.style.width = (this.offsetWidth + 1) + "px";

    if (event.key >= "0" && event.key <= "9") {
        liczba.textContent += event.key;
    }
};
