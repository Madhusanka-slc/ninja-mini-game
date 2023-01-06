console.log("working2");

const zombieElm = document.getElementById('zombie');


let X = 0;
let dX = 0;/* speed */

let imgs = 1;
let zombieAttack = false;
let zombieDie = false;
let count=0;

zombieElm.style.left = `${1000}px`
setInterval(() => {

    if (!zombieDie) {

        if (dX !== 0) {

            zombieElm.style.backgroundImage = `url('../img/zombiefiles/png/male/Walk (${imgs++}).png')`;


        } else {
            if (zombieAttack) {
                zombieElm.style.backgroundImage = `url('../img/zombiefiles/png/male/Attack (${imgs++}).png')`;

            } else {
                zombieElm.style.backgroundImage = `url('../img/zombiefiles/png/male/Idle (${imgs++}).png')`;

            }


        }

    } else {
        count++;
        if(count==1){
            for(let i=0;i<13;i++){

                zombieElm.style.backgroundImage = `url('../img/zombiefiles/png/male/Dead (${i}).png')`;
            }
        }else if(zombieElm.offsetLeft > (playerElm.offsetLeft+50) || zombieElm.offsetLeft < (playerElm.offsetLeft-50)){
            zombieDie=false;

        } 

    }

    if (imgs > 12) imgs = 1;

}, 30);


setInterval(() => {

    if ((zombieElm.offsetLeft + zombieElm.offsetWidth > innerWidth)) {
        dX = 0;
        zombieElm.style.left = `${innerWidth - zombieElm.offsetWidth}px`;
    } else if (zombieElm.offsetLeft < 0) {
        dX = 0;
        zombieElm.style.left = '0';
    }

    if(!zombieDie){
        if (zombieElm.offsetLeft == playerElm.offsetLeft) {
            dX = 0;
            if (dx == 0) {
                zombieAttack = true;
              
                console.log("zombieAttack:", zombieAttack);
                if (playerAttack) {
                    zombieAttack = false;
                    zombieDie = true;
                }
            }
    
    
    
        }
        else if (zombieElm.offsetLeft > playerElm.offsetLeft) {
            zombieElm.classList.add('turn');
            dX = -1;
            zombieAttack = false;
            zombieDie=false
            playerDie=false;
        } else if (zombieElm.offsetLeft < playerElm.offsetLeft) {
            zombieElm.classList.remove('turn');
            dX = 1;
            zombieAttack = false;
            zombieDie=false;
            playerDie=false;
    
        }

        zombieElm.style.left = `${zombieElm.offsetLeft + dX}px`
    }

    


}, 17);



