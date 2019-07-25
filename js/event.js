var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", editfuc);
    inputs[i].addEventListener("blur", editupdate);
    // 此处添加一个按下enter键完成修改的便利操作
    inputs[i].addEventListener("keypress", itemkeypress);
};

function editfuc() {
    this.className = "edit";
    // 聚集光标，并选中所有内容，方便接下来的修改
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function editupdate(){
    // 将input中修改的值更新至前一个元素（这里即span，为input前一个元素）
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function itemkeypress(event){
    // 此处13为entry键的code值，当按下这个键时回调editupdate函数
    if (event.which === 13) {
        editupdate.call(this);
    }
}
