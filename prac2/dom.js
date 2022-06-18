var done = false;

//button input
window.addEventListener('load',function(){
    var calculator = document.querySelector(".calculator");
    var btns = calculator.querySelector(".btns");
    var bod = calculator.querySelector(".board");

    btns.onclick = function(e){
        if(done == true){
            bod.value = "";
        }

        if(e.target.nodeName != "INPUT")
            return;
        
        if(e.target.value == "="){
            // console.log(bod.value);
            bod.value = eval(bod.value);
            done = true;
            return;
        }

        if(e.target.value == "AC"){
            bod.value = "";
            return;
        }

        // console.log(e.target.value);
        bod.value += e.target.value;
        done = false;
    }
})
