console.log("working");

const playerElm=document.getElementById('ninja');
const groundElm=document.getElementById('ground');
console.log(playerElm);
let x=0;
let dx=0;/* speed */

let dy=0;
let acceleration=0.3;
let index=0;
let playerAttack=false;
let playerDie=false;

setInterval(() => {
    if(!playerDie){
        if(dy!==0){ 
            playerElm.style.backgroundImage= `url('../img/ninjaadventurenew/png/Jump__00${index++}.png')`;
         
    } else if(dx!==0){
      
            playerElm.style.backgroundImage= `url('../img/ninjaadventurenew/png/Run__00${index++}.png')`;

    }else{
        if(playerAttack){
            playerElm.style.backgroundImage= `url('../img/ninjaadventurenew/png/Attack__00${index++}.png')`;

        }else{
            playerElm.style.backgroundImage= `url('../img/ninjaadventurenew/png/Idle__00${index++}.png')`;

        }
       
        }

    }else{
        playerElm.style.backgroundImage= `url('../img/ninjaadventurenew/png/Dead__00${index++}.png')`;

    }

    if(index>10) index=1;
    
}, 30);


setInterval(() => {

    if((playerElm.offsetLeft + playerElm.offsetWidth > innerWidth)){
        dx=0;
        playerElm.style.left=`${innerWidth - playerElm.offsetWidth}px`;
    }else if(playerElm.offsetLeft <0){
        dx=0;
        playerElm.style.left='0';
    }
    if(!playerDie){
        if(dy<-10) dy=-10;
        dy +=acceleration;
        if((playerElm.offsetTop+playerElm.offsetHeight)> groundElm.offsetTop ){
            dy=0;
            playerElm.style.top=  `${groundElm.offsetTop - playerElm.offsetHeight}px`
            acceleration=0;
        }


  
    playerElm.style.left=  `${playerElm.offsetLeft +dx}px`
    playerElm.style.top=  `${playerElm.offsetTop + dy}px`
    

    }


}, 17);
 

addEventListener(('keydown'),({key})=>{
    console.log('up');
    console.log(key);

    if(key==="ArrowRight" ){
        index=1;
        console.log("Right Arrow Down");
        playerElm.classList.remove('turn');
        dx=10;

    }else if(key==="ArrowLeft" ){
        index=1;
        console.log("Left Arrow Down");
        playerElm.classList.add('turn');
        dx=-10;
    }else if (key === "f"){
        playerAttack = true;
     
    }
  
});

addEventListener(('keyup'),({key})=>{
    console.log('down');
    console.log(key);

    if(key==="ArrowRight" || key === "ArrowLeft"){
        console.log("Arrow up");
        dx=0;
    }else if (key === "f"){
        playerAttack = false;
    }
   
});

addEventListener(('keypress'),({key})=>{
    console.log(key);

    if(key===' '){
        dy=-10;
        acceleration=0.3;
    }

});


