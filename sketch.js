const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball;
var reds=[];
var oranges = [];
var yellows = [];
var greens = [];
var blues = [];

function setup(){
    var canvas = createCanvas(1500,1000);
    engine = Engine.create();
    world = engine.world;
    for(var i=300;i<1130;i=i+50){
        reds.push(new Red(i,100, 50));
    }
    for(var i=300;i<1130;i=i+50){
        oranges.push(new Orange(i,200, 50));
    }
    for(var i=300;i<1130;i=i+50){
        yellows.push(new Yellow(i,300, 50));
    }
    for(var i=300;i<1130;i=i+50){
        greens.push(new Green(i,400, 50));
    }
    for(var i=300;i<1130;i=i+50){
        blues.push(new Blue(i,500, 50));
    }
var options ={
    isStatic: true
}
 ground = Bodies.rectangle(width/2, 980, width, 10, options);
World.add(world, ground);
   
leftborder = Bodies.rectangle(0, height/4, 5, height/2, options);
leftborder.Visiblity = 0;
World.add(world, leftborder);

topborder = Bodies.rectangle(width/2, 0, width, 5, options);
World.add(world, topborder);

rightborder = Bodies.rectangle(width, height/2, 2, height, options);
World.add(world, rightborder);

centerline = Bodies.rectangle(width/2, 650, width, 7, options);
World.add(world, centerline);

cannon = new Cannon(width/2, 930, 150);
bigball = new Player(width/2, 900, 60);
cannonconstraint = new Rope({x: width/2, y:900}, bigball.body);
//leftborder = Bodies.rectangle(0, height/4, 5, height/2, options);

//World.add(world, leftborder);
   
}

function draw(){
    background(0);
    Engine.update(engine);
 
 
 for(var i=0; i<reds.length; i++){
     reds[i].display();
 } 

 for(var i=0; i<oranges.length; i++){
    oranges[i].display();
} 
for(var i=0; i<yellows.length; i++){
    yellows[i].display();
} 
for(var i=0; i<greens.length; i++){
    greens[i].display();
} 
for(var i=0; i<blues.length; i++){
    blues[i].display();
} 

rectMode(CENTER);
fill("black");
 rect(leftborder.position.x,leftborder.position.y, 5, height)

 rectMode(CENTER);
fill("black");
 rect(topborder.position.x,topborder.position.y, width, 5)

 
 rectMode(CENTER);
fill("black");
 rect(rightborder.position.x,rightborder.position.y, 5, height)

 rectMode(CENTER)
 fill("yellow");
 rect(centerline.position.x, centerline.position.y, width, 7)
 cannon.display();
 bigball.display();

 bigball.body.position.x = cannon.body.position.x;

cannonconstraint.display(); 
 
rectMode(CENTER);
 fill(69, 127, 28);
 rect(ground.position.x, ground.position.y, 1500,30 );

 if(cannon.body.position.x<250){
     cannon.body.position.x = 255;
 }
 if(cannon.body.position.x>1180){
    cannon.body.position.x = 1175;
}
 
}
function keyPressed(){
    if(keyCode === 39){
        cannon.body.position.x = cannon.body.position.x + 1;
    }
    
    if(keyCode === 37){
        cannon.body.position.x = cannon.body.position.x - 1;
    }
    if(keyCode===32){
        //Matter.Body.applyForce(bigball.body, {x:0, y:-50});
        bigball.body.velocity.y = -500;
    }
}