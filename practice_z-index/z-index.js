/*
var z = 10;

document.querySelector("div").addEventListener("click",function(event){
   z += 1;
   var st = z.toString();

   console.log(st);
   event.target.style.zIndex = st;
});
*/
var beforeNode = null;
var currentNode = null;

var elements = document.querySelector(".wrap1").childNodes;
for( var index = 0; index < elements.length; index++ )
{
    elements[index].addEventListener("click",function(event){
        if( currentNode == null )
        {
            currentNode = event.target;
            currentNode.style.zIndex = "1000";
        }
        else
        {
            beforeNode = currentNode;
            
            currentNode = event.target;
            currentNode.style.zIndex = "1000";

            beforeNode.style.zIndex = "999";
        }
    });
}
//z-index를 같은 크기로 지정하면 소스코드 작성 순서대로 정렬됨.. 아놔..