//button input
window.addEventListener('load',function(){
    var calculator = document.querySelector(".calculator");
    var btns = calculator.querySelector(".btns");
    var bod = calculator.querySelector(".board");

    btns.onclick = function(e){
        if(e.target.nodeName != "INPUT")
            return;

        console.log(e.target.value);
        bod.value += e.target.value;
    }
})