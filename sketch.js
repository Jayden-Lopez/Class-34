var ball;
function setup(){
createCanvas(400, 400);
ball = createSprite(50, 60, 40, 20);
ball.shapeColor = "black";

}
function draw(){
background("white");
if (keyDown(UP_ARROW)){
changePosition(0, -1);

}else if(keyDown(DOWN_ARROW)){
changePosition(0, 1)


}
else if (keyDown(LEFT_ARROW)){
changePosition(-1, 0)

}else if(keyDown(RIGHT_ARROW)){
changePosition(1, 0)

}
drawSprites();




}
function changePosition(x, y){
ball.x = ball.x + x
ball.y = ball.y + y





}
