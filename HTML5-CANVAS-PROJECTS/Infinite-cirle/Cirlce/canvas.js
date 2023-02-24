const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
// //rect
// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100,100,100,100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(400, 100, 1000, 10);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)'
// c.fillRect(400, 300, 30, 30);
//          x, y, height, width


//line
// c.beginPath();
// c.moveTo(50,40);
// c.lineTo(300,40);  //x,y
// c.strokeSyle = "#fa34a3";
// c.stroke();

// let array = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];


// //arc
// while(true){
//   let limit = Math.floor(Math.random()*100);
//  for(let i = 0;i < limit; i++){
//    let l = 0;
//    let color = '#';
//    while(l != 6){
//      let n = Math.floor(Math.random() * 15);
//      color += array[n];
//      l++;
//    }
//    console.log(color);
//    let x = Math.random() * window.innerWidth;
//    let y = Math.random() * window.innerHeight;
//    let z = Math.random() * 100;
//    c.beginPath();
//    c.arc(x, y, z, 0, Math.PI * 2, false);
//    c.strokeStyle = color;
//    c.stroke();
//  }
// // }
// let x = 40;
//   c.beginPath();
//   c.arc(x, 100, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = 'blue';
//   c.stroke();


let circleArray = [];
let i = 0;
while(1){
  let x = Math.random() * innerWidth;
  let y = Math.random() * innerHeight;
  let dx = (Math.random() - 0.5)*8;
  let dy = (Math.random() - 0.5)*8;
  let radius = Math.floor(Math.random()*100);
  circleArray.push(new Circle(x, y, dx, dy, radius));
  i++;
  if (i === 0){
    break;
  }
};

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for(let i = 0; i++; i < 100){
    circleArray[i].update();
  };
};


animate();

//circle object

function Circle(x, y, dx, dy, radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue'
    c.stroke();
  }

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0 ){
      this.dx = -this.dx;
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    
    this.draw();
  }
}


