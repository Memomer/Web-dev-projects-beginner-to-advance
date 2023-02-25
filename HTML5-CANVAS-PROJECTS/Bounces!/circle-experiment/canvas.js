const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let circleArray = [];
let color = ['blue','black','red','yellow','red'];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Dynamic resizing of canvas


window.addEventListener('resize', function(){
     canvas.width = window.innerWidth - 30;
     canvas.height = window.innerHeight - 30;
 });

//Circle class

function Circle(x, y, radius, dx, dy){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    let i = Math.floor(Math.random() * 5);

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = color[i];
        ctx.fillStyle = color[i];
        ctx.stroke();
        ctx.fill();

    }

    this.update = function(){
        if(this.x + radius >  window.innerWidth || this.x - radius < 0){
            this.dx = -this.dx;
        }
        if(this.y + radius > window.innerHeight || this.y - radius < 0){
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    }
}

 //make objects and initialize

for(i = 0; i < 500; i++){
    let dx = (Math.random() * 5) - 1;
    let dy = (Math.random() * 5) - 1;
    let radius = Math.floor(Math.random() * 30);
    let x = Math.random() * innerWidth + radius;
    if(!x){
        x += radius;
    }
    else if(x == innerWidth){
        x -= radius;
    }
    let y = Math.random() * innerHeight + radius;
    if(!y){
        x += radius;
    }
    else if(y == innerHeight){
        x -= radius;
    }
    circleArray.push(new Circle(x, y, radius, dx, dy));
};

let Length = circleArray.length;

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0, innerWidth, innerWidth);
    for(let i = 0; i < Length ; i++){
        circleArray[i].update();
    }   
}

animate();