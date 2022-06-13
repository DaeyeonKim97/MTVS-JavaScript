//border-width
window.addEventListener('load',function(){
    var leftBox = document.querySelector(".left-box");
    var width = leftBox.querySelector(".width>input");
    var styledSquare = document.querySelector("#styled-square");

    width.oninput = function(e){
        styledSquare.style["border-width"] = width.value + "px";
        changed();
    }
})

//border-style
window.addEventListener('load',function(){
    var leftBox = document.querySelector(".left-box");
    var style = leftBox.querySelector(".style>select");
    var styledSquare = document.querySelector("#styled-square");

    style.onchange = function(e){
        styledSquare.style["border-style"] = style.value;
        changed();
    }
})

//border-color
window.addEventListener('load',function(){
    var leftBox = document.querySelector(".left-box");
    var color = leftBox.querySelector(".color>input");
    var styledSquare = document.querySelector("#styled-square");

    color.oninput = function(e){
        styledSquare.style["border-color"] = color.value;
        changed();
    }
})

//CSS text
function changed(){
    var leftBox = document.querySelector(".left-box");
    var styledSquare = document.querySelector("#styled-square");
    var cssText = leftBox.querySelector(".css-text>div")

    cssText.innerHTML = styledSquare.style.cssText;
}