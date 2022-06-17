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

//add function
window.addEventListener('load',function(){
    var calculator = document.querySelector(".calculator");
    var btn = calculator.querySelector("add");
    var bod = calculator.querySelector(".board");
    
    btn.onclick = function(e){
        
    }
})

//sub function
window.addEventListener('load',function(){
    var calculator = document.querySelector(".calculator");
    var btn = calculator.querySelector("sub");
    var bod = calculator.querySelector(".board");
    
    btn.onclick = function(e){
        
    }
})

//mul function
window.addEventListener('load',function(){
    var calculator = document.querySelector(".calculator");
    var btn = calculator.querySelector("mul");
    var bod = calculator.querySelector(".board");
    
    btn.onclick = function(e){
        
    }
})

//div function
window.addEventListener('load',function(){
    var calculator = document.querySelector(".calculator");
    var btn = calculator.querySelector("div");
    var bod = calculator.querySelector(".board");
    
    btn.onclick = function(e){

    }
})
