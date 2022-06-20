//next-btn
window.addEventListener('load',function(){
    // var mainSection = document.querySelector(".main-section");
    var cards = document.querySelectorAll(".card-section>div");
    // var btnSection = mainSection.querySelector(".btn-section");
    var btn = document.querySelector("#btn-next");
    console.log("btn");

    var offset = 1;
    var size = cards.length;

    btn.onclick = function(e){
        cards[(0+offset)%size].className = "first";
        cards[(1+offset)%size].className = "second";
        cards[(2+offset)%size].className = "third";

        offset++;
    }
    
})