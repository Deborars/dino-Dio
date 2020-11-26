const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let isJumping = false;


function handleKeyUp(event){
  if(event.keyCode === 32){
    jump();
  }
}

function jump(){
  let position = 0;
  isJumping = true;
  //inicio de upInterval
  let upInterval = setInterval(
    function(){
      if(position >= 150){
        clearInterval(upInterval);

        //descendo
        let downInterval = setInterval(
          function(){
            if(position <= 0 ){
              clearInterval(downInterval);
              isJumping = false;
            }
            else{
              position -= 20;
              dino.style.bottom = position +"px";
            }
          }
          ,20)
      }
      else{
        //subindo
        position+=20;
        dino.style.bottom = position+"px";
      }
},20)
//fim da upInterval
}

function createCactus(){
  let cactus = document.createElement("div");
  let cactusPosition = 1000;

  cactus.classList.add("cactus");
  cactus.style.left = cactusPosition + "px";
  background.appendChild(cactus);
}

createCactus();
document.addEventListener("keyup", handleKeyUp);

