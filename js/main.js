var will = document.getElementById('Will');
var Taylor = document.getElementById('Taylor');
var Keanu = document.getElementById('Keanu');

will.addEventListener('click', picLink)
Taylor.addEventListener('click', picLink)
Keanu.addEventListener('click', picLink)

function picLink() {
    var allimage = document.querySelectorAll("img");

    for (var i = 0; i < allimage.length; i++) {
        allimage[i].className = "hide";
    }

    var picId = this.attributes['data-img'].value;
    var pic = document.getElementById(picId);
    // if (pic.className === "hide") {
    //     pic.className = "";
    // }else {
    //     pic.className = "hide";
    // }
    // 根据实际情况以上注释代码可以更换为下一行代码：
    pic.className = "";
}