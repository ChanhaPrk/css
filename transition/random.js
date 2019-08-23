//브라우저가 시작하였을때 카드의 위치는 랜덤
//실제 작업 영역 크기를 먼저 구함 
var windowInner = [ window.innerWidth, window.innerHeight ];
//카드가 위치할 랜덤 위치
var cardRect = [];
//카드 객체 
var cards = document.querySelectorAll(".card > div");

//swap버튼 누르면 카드가 흐터짐
document.querySelector(".scatter").addEventListener("click",function(event){
    
    //카드의 위치는 windowInner x, y내에서 랜덤으로 위치 
    for( var index = 0; index < cards.length; index++ )
    {
        var width = Math.floor( Math.random() * ((windowInner[0]-100) - 0)) + 0;
        var height = Math.floor(Math.random() * ((windowInner[1]-200) - 0)) + 100;
        
        cards[index].style.top = height + "px";
        cards[index].style.left = width + "px";
    }
});