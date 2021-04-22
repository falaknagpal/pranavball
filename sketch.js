var ball;
var hypBall, database;
var position;

function setup(){
    database= firebase.database();
    console.log(database)
    createCanvas(500,500);
    hypBall = createSprite(250,250,10,10);
    hypBall.shapeColor = "red";

var hypBallPosition= database.ref('ball/position');
hypBallPosition.on("value",readPosition,showError)
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
position= data.val();
hypBall.x=position.x;
hypBall.y=position.y;
}
function writePosition(x,y){
    database.ref('ball/posiiton').set({
        'x': position.x+x,
        'y': position.y+y
    })
}

function showError(){
    console.log("error")
}