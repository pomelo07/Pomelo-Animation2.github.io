let count = 0;
function changeImage(src) {
    document.querySelector("img").src = "../image/" + src + ".png";
}

document.body.onmousedown = function () {
    count += 1;
    document.querySelector("#pop").textContent = count;
    changeImage("chicken-ya2");
}
document.body.onmouseup = function () {
    changeImage("chicken-ya");
}
