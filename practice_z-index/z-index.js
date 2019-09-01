//div들에게 순서를 부여함
//부여하지않으면 모두 순서가 같음 
var wrap1s = document.querySelectorAll(".wrap1 > div");

for( var index = 0; index < wrap1s.length; index++ )
{
    
    wrap1s[index].style.zIndex = index;
}

//올라와야할 요소를 클릭했다면
for( var index = 0; index < wrap1s.length; index++ )
{
    wrap1s[index].addEventListener("click",function(event){
        
        //일단 모든 요소의 zindex값을 -1씩함
        for( var index = 0; index < wrap1s.length; index++ )
        {
             wrap1s[index].style.zIndex -= 1;
        }
        
        //클릭한 요소의 zindex를 최상위로 올림 
        event.target.style.zIndex = wrap1s.length;
        
        //그런데 이미 zindex가 가장 높다면 가장 높은 zindex으로 갈 필요없음
        if( event.target.zIndex ==wrap1s.length )
        {
            return;
        }
    });
}