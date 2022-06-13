//border-width
window.addEventListener('load',function(){
    var leftBox = document.querySelector(".left-box");
    var width = leftBox.querySelector(".width>input");
    var styledSquare = document.querySelector("#styled-square");

    width.oninput = function(e){
        styledSquare.style["border-width"] = width.value + "px";
    }
})
