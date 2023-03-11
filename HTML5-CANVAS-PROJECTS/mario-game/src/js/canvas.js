/* eslint-disable */
import platform from '../img/platform.png'
import hills from '../img/hills.png'
import background from '../img/background.png'
import standRight from '../img/spriteStandRight.png'
import runRight from '../img/spriteRunRight.png'

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.height = 576;
canvas.width = 1024;
const gravity = 0.5;
let scrollOffset = 0;

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

class Player {
  constructor(width, height, color, speed) {
    this.position = {
        x: 100,
        y: 100,
    }
    this.speed = speed;
    this.width = 66;
    this.height = 150;
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(standRight),
        cropWidth: 177,
        width: 66,
      },
      run: {
        right: createImage(runRight),
        cropWidth: 341,
        width: 127.875
      }
    }
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
    console.log(this.currentSprite);
    }

  draw() {
    c.drawImage(
      this.currentSprite,
      this.currentCropWidth * this.frames,
      0,
      this.currentCropWidth,
      400,
      this.position.x, 
      this.position.y,
      this.width,
      this.height
      )
    }

  update() {
    this.frames++;
    if(this.frames > 59 && this.currentSprite === this.sprites.stand.right){
      this.frames = 0;
    }
    else if (this.frames > 29 && this.currentSprite === this.sprites.run.right){
      this.frames = 0;
    }
    // this.position.x += this.speed.x;\\
    this.position.y += this.speed.y;
    this.position.x += this.speed.x;
    // if (this.position.y < 0 || this.position.y + this.height > canvas.height) {
    //     gravity = -
    // }
    if (this.position.y + this.height + this.speed.y <= canvas.height) {
      this.speed.y += gravity;
      if(0 <= this.position.y + this.height + this.speed.y && this.position.y + this.height + this.speed.y <= 10){
        this.speed.y = -this.speed.y;
      }
    }

    this.draw();
  }
}

function createImage(ImageSrc) {
  const image = new Image();
  image.src = ImageSrc;
  return image;
}

class Platform {
  constructor({x, y, image}){
    this.position = {
      x,
      y,
    }
    this.image = image;
    this.width = image.width;
    this.height = image.height;

  }
  draw(){
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

class GenericObject {
  constructor({x, y, image}){
    this.position = {
      x,
      y, 
    }
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  draw(){
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}



let player = new Player(40, 40, 'red', {
  x: 0,
  y: 1,
});

let platformImage = createImage(platform);
let backgroundImage = createImage(background);
let hillsImage = createImage(hills);
let platforms = [];
let genericObject = [];

function init(){
  scrollOffset = 0;
  function createImage(ImageSrc) {
    const image = new Image();
    image.src = ImageSrc;
    return image;
  }

  player = new Player(40, 40, 'red', {
    x: 0,
    y: 1,
  });

  platformImage = createImage(platform);
  backgroundImage = createImage(background);
  hillsImage = createImage(hills);
  platforms = [new Platform({x:0, y:470, image: platformImage}), new Platform({x:platformImage.width * 1 + 100, y:470, image: platformImage}), new Platform({x:platformImage.width * 2 + 50, y:470, image: platformImage}), new Platform({x:platformImage.width * 3 + 200, y:470, image: platformImage}), new Platform({x:platformImage.width * 4 + 200, y:470, image: platformImage})]

  genericObject = [new GenericObject({x:-1, y:-1, image: backgroundImage}), new GenericObject({x: 0, y: 47, image: hillsImage})];

}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);

  genericObject.forEach((genObject) => {
    genObject.draw();
  }) 

  platforms.forEach(platform => {
    platform.draw();
  })

  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.speed.x = 5;
  }
  else if (keys.left.pressed && player.position.x > 0) {
    player.speed.x = -5;
  }
  else {
    player.speed.x = 0;
    if(keys.right.pressed){
      scrollOffset += 5;
      platforms.forEach((platform) => {
        platform.position.x -= 5;
      })
      genericObject.forEach((genObject) => {
        genObject.position.x -= 1;
        console.log(genObject.position.x);
      })
    }
    else if(keys.left.pressed){
      scrollOffset -= 5;
      platforms.forEach((platform) => {
        platform.position.x += 5;
      })
    }
  }
  //platform collision detection
  platforms.forEach((platform) => {
    if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.speed.y >= platform.position.y) {
      if(platform.position.x < player.position.x && (player.position.x < (platform.position.x + platform.width))){
        player.speed.y = 0;
      }
      else{
        player.speed.y = player.speed.y;
      }
    }
  });
  
  if (player.position.y >= canvas.height){
    init();
  }
}

animate();
init();

window.addEventListener('keydown', (e)=>{
  switch(e.keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = true;
      break;
    case 87:
      console.log('up');
      player.speed.y -= 15;
      break;
    case 83:
      console.log('down');
      break;
    case 68:
      console.log('right');
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth; 
      player.width = player.sprites.run.width;
      break;
    default:
      break;
  }
});


window.addEventListener('keyup', (e)=>{
  switch(e.keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = false;
      break;
    case 87:
      console.log('up');
      break;
    case 83:
      console.log('down');
      break;
    case 68:
      console.log('right');
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth; 
      player.width = player.sprites.stand.width;
      break;
    default:
      break;
  }
});

