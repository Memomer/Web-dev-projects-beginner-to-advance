const canvas = document.querySelector('canvas');
const modalTwo = document.querySelector('#modalTwo');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');
const sl = document.querySelector('#sl')
const playerX = canvas.width/2;
const playerY = canvas.height/2;
const startGameBtn = document.querySelector('#start');
const modal = document.querySelector('#modal');
let score = 0;
const scoreTwo = document.querySelector('#scoreTwo')
//random color
const colors =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function randomColor(){
   let genC = '#' 
   for(let j = 0; j < 6; j++){
        i = Math.floor(Math.random()*colors.length);
        genC = genC + colors[i];
    }
    if(genC === '#000000'){
        genC = 'green'
    }
    return genC;
}

let speed;

//enemy object
class Enemy{
    constructor(x, y, velocity, color){
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.radius = (Math.random()*30) + 10;
        this.color = color;
    }
    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    update(){
        this.draw();
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
    }
 
}
let y;
let x;
let angle;
let radius = (Math.random()*20) + 10
//span enemies


setInterval(function(){
        let color = '';
        color = randomColor();
        console.log(color);
        if(Math.random() < 0.5){
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
            y = Math.random() * canvas.height;
        }else {
            x = Math.random() * canvas.width;
            y = Math.random() * 0.5 ? 0 - radius : canvas.height + radius;
        }

        angle = Math.atan2(canvas.height/2 - y, canvas.width/2 - x);
        const velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }
        enemies.push(new Enemy(x, y, velocity, color));
    }, 1000);



//player object
class Player{
    constructor(radius, color){
        this.x = playerX;
        this.y = playerY;
        this.radius = radius;
        this.color = color;
    }

    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle=this.color;
        c.fill();
    } 

}

const projectileSize = 10;


//projectile class

class Projectile{
    constructor(x, y, velocity){
        this.x = x;
        this.y = y;
        this.radius = projectileSize;
        this.color = 'white';
        this.velocity = velocity;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    update() {
        this.draw();
        this.x = this.x + this.velocity.x*4;
        this.y = this.y + this.velocity.y*4;
        
        this.draw();
    }
}
const friction = 0.98
// Particle explosion class
class Particle{
    constructor(x, y,color,velocity){
        this.x = x;
        this.y = y;
        this.radius = Math.random()*2 + 2;
        this.color = color;
        this.velocity=velocity;
        this.alpha = 1;

    }
    draw() {
        c.save();
        c.globalAlpha = this.alpha;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
        c.restore();
    }
    update() {
        this.draw();
        this.velocity.x *= friction;
        this.velocity.y *= friction;
        this.x = this.x + this.velocity.x*(Math.random()*10);
        this.y = this.y + this.velocity.y*(Math.random()*10);
        this.alpha -= 0.01;
    }
}

let player = new Player(20, 'White');
let enemies = [];
let projectiles = [];
let particles = [];

function init(){
    player = new Player(20, 'White');
    enemies = [];
    projectiles = [];
    particles = [];
    score = 0;
    sl.innerHTML = score;
    scoreTwo.innerHTML = score;
}
let time = 0;
function animate(){
    let animationID = requestAnimationFrame(animate);
     c.fillStyle = 'rgba(0, 0, 0, 0.1)';
     c.fillRect(0, 0, canvas.width, canvas.height);
     player.draw();

    
     projectiles.forEach((projectile, index) =>
     {
            projectile.update(); 
        if(projectile.x - projectile.radius < 0 || projectile.x + radius > canvas.width || projectile.y - radius > canvas.height|| projectile.x + projectile.radius < 0){
            projectiles.splice(index, 1);
        }
     })
     enemies.forEach((enemy, index) => {
        enemy.update();
        projectiles.forEach((projectile, projectileIndex) =>
        {
            const dis = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);
            if(dis - enemy.radius - projectile.radius < 1)
            {
                score += 100;
                sl.innerHTML = score;
                for(i = 0; i < 8; i++){
                    particles.push(new Particle(projectile.x, projectile.y, enemy.color, {
                        x: Math.random() - 0.5,
                        y: Math.random() - 0.5,
                    }));
                    console.log(particles[i]);
                }

                if(enemy.radius - 20  > 10){
                     setTimeout(() => {
                        enemy.radius -= 10;
                        projectiles.splice(projectileIndex, 1);
                    }, 0);
                } else{
                    setTimeout(() => {
                        score += 250;
                        enemies.splice(index, 1);
                        projectiles.splice(projectileIndex, 1)
                    }, 0);
                }
        }
        })
        const dis_enemy_player = Math.hypot(player.x - enemy.x, player.y - enemy.y);
        if(dis_enemy_player - enemy.radius - player.radius < 1){
            cancelAnimationFrame(animationID);
            modal.style.display = 'flex';
            scoreTwo.innerHTML = score;
        }
        particles.forEach((particle, index ) => {
            if(particle.alpha < 0){
                particles.splice(index, 1);
            }
            else{
                particle.update();
            }

        })
     })
}

canvas.addEventListener('click', (e) => {
    console.log(projectiles);
    const angle = Math.atan2(e.clientY - canvas.height/2, e.clientX - canvas.width/2);
    const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
    }
    projectiles.push(new Projectile(canvas.width/2, canvas.height/2, velocity));
  }
);

startGameBtn.addEventListener('click', function(){
    init();
    animate();
    modal.style.display = 'none';
    
});

