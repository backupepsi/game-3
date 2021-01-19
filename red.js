class Red{
    constructor(x,y,radius){
       var options={
           isStatic: true
,           restitution: 1
,           density: 1.2,
            friction: 1
       }
       this.body = Bodies.circle(x,y,radius,options)
       this.radius = radius;
       World.add(world, this.body);
       this.image = loadImage("pics/1red.png");
    }

display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x,pos.y,this.radius,this.radius);
}
}