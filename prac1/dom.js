//border-width
window.addEventListener('load',function(){
    var leftBox = document.querySelector(".left-box");
    var width = leftBox.querySelector(".width>input");
    var styledSquare = document.querySelector("#styled-square");

    width.oninput = function(e){
        styledSquare.style["border-width"] = width.value + "px";
    }
})

//border-style
window.addEventListener('load',function(){
    var leftBox = document.querySelector(".left-box");
    var style = leftBox.querySelector(".style>select");
    var styledSquare = document.querySelector("#styled-square");

    style.onchange = function(e){
        styledSquare.style["border-style"] = style.value;
    }
})