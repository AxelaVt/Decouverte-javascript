// déplacement des ennemis
var frame = 0;
function loop(){  //60x par seconde
if (frame === 60) {
  //let ennemi = document.querySelectorAll('div.ennemi');
  for(i = 0; i < blockEnnemi.length; i++ ){
    //console.log(blockEnnemi);
    let ennemi = blockEnnemi[i];
    let xEnnemi = ennemi.posX;
    let yEnnemi = ennemi.posY;

    let direction = ennemi.direction;
    // console.log("xEnnemi =" + xEnnemi);
    // console.log("yEnnemi =" + yEnnemi);
    blockGrid[xEnnemi][yEnnemi].traverser = true;

      switch(direction){
         case "up":
         if (yEnnemi > 0 && blockGrid[xEnnemi][yEnnemi-1].traverser)
         yEnnemi --;
         // console.log("xEnnemi =" + xEnnemi);
         // console.log("yEnnemi =" + yEnnemi);
           break;
         case "right":
         if (xEnnemi < H_GRID && blockGrid[xEnnemi + 1][yEnnemi].traverser)
         xEnnemi ++;  //(x < H_GRID-1 && blockGrid[x+1][y].traverser)
         // console.log("xEnnemi =" + xEnnemi);
         // console.log("yEnnemi =" + yEnnemi);
           break;
         case "down":
         if (yEnnemi < V_GRID && blockGrid[xEnnemi][yEnnemi + 1].traverser)
         yEnnemi ++;
         // console.log("xEnnemi =" + xEnnemi);
         // console.log("yEnnemi =" + yEnnemi);
           break;
         case "left":
         if (xEnnemi > 0 && blockGrid[xEnnemi-1][yEnnemi].traverser)
         xEnnemi --;
         // console.log("xEnnemi =" + xEnnemi);
         // console.log("yEnnemi =" + yEnnemi);
           break;
      }
       ennemi.style.left = String(xEnnemi * GRID_SIZE) + 'px';
       ennemi.style.top = String(yEnnemi * GRID_SIZE) + 'px';


       let random = random100();
       //console.log(random);
       if (0 < random < 25 ) {
         direction = "left";
       }
       if (25 <= random < 50 ){
         direction = "right";
       }
       if (50 <= random < 75 ){
         direction = "up";
       }
       if (random > 75){
         direction = "down";
       }
       ennemi.xEnnemi = xEnnemi ;
       ennemi.yEnnemi = yEnnemi ;
       ennemi.direction = direction;
       blockGrid[xEnnemi][yEnnemi].traverser = false ;
     }
   frame = 0;
   }
   frame++;
   window.requestAnimationFrame(loop);
 }
 window.requestAnimationFrame(loop);
