const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let isJumping = false;
let position = 0;

function handleKeyUp(event){
  if(event.keyCode === 32){
    jump();
  }
}

function jump(){
  
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
              //isJumping = false;
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
  let randomTime = Math.random()*6000;

  cactus.classList.add("cactus");
  cactus.style.left = 1000 + "px";
  background.appendChild(cactus);

  let leftInterval = setInterval(function(){
    if(cactusPosition <= -60){//foi colocado 60 devido ao tamanho do cactus;
      clearInterval(leftInterval);
      background.removeChild(cactus);
    }
    else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
      clearInterval(leftInterval);
      document.body.innerHTML= "<h1 class='game-over'>Fim de jogo</h1>";
    }
    else{
      cactusPosition -=10;
      cactus.style.left = cactusPosition +"px";
    }
  },20);
  
  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener("keyup", handleKeyUp);

