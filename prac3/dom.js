var offset = 1;

//next-btn
window.addEventListener('load',function(){
    // var mainSection = document.querySelector(".main-section");
    var cards = document.querySelectorAll(".card-section>div");
    // var btnSection = mainSection.querySelector(".btn-section");
    var btn = document.querySelector("#btn-next");
    console.log("btn");

    // var offset = 1;
    var size = cards.length;

    btn.onclick = function(e){
        cards[(0+offset)%size].className = "first";
        cards[(1+offset)%size].className = "second";
        cards[(2+offset)%size].className = "third";

        offset++;
    }
    
})

//prev-btn
window.addEventListener('load',function(){
    // var mainSection = document.querySelector(".main-section");
    var cards = document.querySelectorAll(".card-section>div");
    // var btnSection = mainSection.querySelector(".btn-section");
    var btn = document.querySelector("#btn-prev");
    console.log("btn");

    // var offset = 1;
    var size = cards.length;

    btn.onclick = function(e){
        cards[(0+offset)%size].className = "third"; //card2
        cards[(1+offset)%size].className = "first"; //card3
        cards[(2+offset)%size].className = "second"; //card1

        if(offset<1){
            offset+=3;
        }

        offset--;
    }
    
})