let turn=1;
let way=0;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let id_ai;

function randId(){
    let randnum=getRandomInt(1,9);    
    if(randnum==1){
        id_ai='left_top'
    }
    if(randnum==2){
        id_ai='center_top'
     }
     if(randnum==3){
        id_ai='right_top'
     }
     if(randnum==4){
        id_ai='left'
     }
     if(randnum==5){
        id_ai='center'
     }
     if(randnum==6){
        id_ai='right'
     }
     if(randnum==7){
        id_ai='left_bottom'
     }
     if(randnum==8){
        id_ai='center_bottom'
     }
     if(randnum==9){
        id_ai='right_bottom'
     }
    if(document.getElementById(id_ai).classList.contains('cross')||document.getElementById(id_ai).classList.contains('zero')){
        randId();
    }
}
function AiTurn(){
    randId();
    if(turn==0){
        document.getElementById(id_ai).classList.add("zero")
        turn=1;
        document.getElementById('body').classList.remove("alt")
        document.getElementById('body').classList.add("based")
        way++;
    if(document.getElementById('left_top').classList.contains('zero') && document.getElementById('center_top').classList.contains('zero')&&document.getElementById('right_top').classList.contains('zero')
        ||document.getElementById('left').classList.contains('zero') && document.getElementById('center').classList.contains('zero')&&document.getElementById('right').classList.contains('zero')
        ||document.getElementById('left_bottom').classList.contains('zero') && document.getElementById('center_bottom').classList.contains('zero')&&document.getElementById('right_bottom').classList.contains('zero')
        ||document.getElementById('left_bottom').classList.contains('zero') && document.getElementById('left').classList.contains('zero')&&document.getElementById('left_top').classList.contains('zero')
        ||document.getElementById('center_bottom').classList.contains('zero') && document.getElementById('center').classList.contains('zero')&&document.getElementById('center_top').classList.contains('zero')
        ||document.getElementById('right_bottom').classList.contains('zero') && document.getElementById('right').classList.contains('zero')&&document.getElementById('right_top').classList.contains('zero')
        ||document.getElementById('right_bottom').classList.contains('zero') && document.getElementById('center').classList.contains('zero')&&document.getElementById('left_top').classList.contains('zero')
        ||document.getElementById('left_bottom').classList.contains('zero') && document.getElementById('center').classList.contains('zero')&&document.getElementById('right_top').classList.contains('zero')
    ){
        alert('win red player')
        setTimeout(function(){ location.reload(); }, 500);}
    
    if(way==9){
        alert('все клетки заняты, никто не победил')
        setTimeout(function(){ location.reload(); }, 500);}    
}
}
  function TicTacToe(id){
    if(turn==1){
       if(document.getElementById(id).classList.contains('cross')||document.getElementById(id).classList.contains('zero')){
           alert('Клетка уже занята');
       }
       else{
               document.getElementById(id).classList.add("cross")
               turn=0;
               document.getElementById('body').classList.remove("based")
               document.getElementById('body').classList.add("alt")
               way++;
           }
       }
   if(document.getElementById('left_top').classList.contains('cross') && document.getElementById('center_top').classList.contains('cross')&&document.getElementById('right_top').classList.contains('cross')
       ||document.getElementById('left').classList.contains('cross') && document.getElementById('center').classList.contains('cross')&&document.getElementById('right').classList.contains('cross')
       ||document.getElementById('left_bottom').classList.contains('cross') && document.getElementById('center_bottom').classList.contains('cross')&&document.getElementById('right_bottom').classList.contains('cross')
       ||document.getElementById('left_bottom').classList.contains('cross') && document.getElementById('left').classList.contains('cross')&&document.getElementById('left_top').classList.contains('cross')
       ||document.getElementById('center_bottom').classList.contains('cross') && document.getElementById('center').classList.contains('cross')&&document.getElementById('center_top').classList.contains('cross')
       ||document.getElementById('right_bottom').classList.contains('cross') && document.getElementById('right').classList.contains('cross')&&document.getElementById('right_top').classList.contains('cross')
       ||document.getElementById('right_bottom').classList.contains('cross') && document.getElementById('center').classList.contains('cross')&&document.getElementById('left_top').classList.contains('cross')
       ||document.getElementById('left_bottom').classList.contains('cross') && document.getElementById('center').classList.contains('cross')&&document.getElementById('right_top').classList.contains('cross')
   ){
       alert('win blue player')
       setTimeout(function(){ location.reload(); }, 500);
   }
   else if(way==9){
       alert('все клетки заняты, никто не победил')
       setTimeout(function(){ location.reload(); }, 500);}    
    else{
    AiTurn();
    }
}
   
