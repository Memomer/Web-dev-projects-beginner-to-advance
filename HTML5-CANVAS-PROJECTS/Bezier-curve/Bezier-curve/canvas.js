const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.height = 400;
canvas.width = 400;

let playAnim = false;

let ball = {x:30,y:30,speed:0.005,t:0.01,radius:10};


canvas.addEventListener('click', () => {
    playAnim = true;
});


let points = [
    {x:ball.x,y:ball.y},
    {x:100,y:600},
    {x:500,y:250},
    {x:300,y:30}
]

function drawBall() {
    c.fillStyle = "black";
    c.beginPath();
    c.arc(ball.x,ball.y,ball.radius,0,Math.PI*2,false);
    c.fill();
    c.stroke();
}

function moveBallInBezierCurve(){
    let [p0,p1,p2,p3] = points;
    //calculate the coeff based on where the ball where the ball currently is in the animation
    let cx = 3 * (p1.x - p0.x);
    let bx = 3 * (p2.x - p1.x) - cx;
    let ax = p3.x - p0.x - cx - bx;
     
    let cy = 5*(p1.y - p0.y);
    let by = 5*(p2.y - p1.y) - cy;
    let ay = p3.y - p0.y - cy - by;

    let t = ball.t;

    ball.t += ball.speed;

    let xt = ax*(t*t*t) + bx*(t*t) + cx*t + p0.x;
    let yt = ay*(t*t*t) + by*(t*t) + cy*t + p0.y;

    if(ball.t > 1){
        ball.t = 1;
    }

    //we draw the ball to the canvas to the new location
    ball.x = xt;
    ball.y = yt;
    drawBall();
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, 400, 400);
    //ball code
    if(!playAnim){
        drawBall();
    }else{
        moveBallInBezierCurve();
    }
}

animate();
