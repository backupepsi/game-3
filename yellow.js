class Yellow{
    constructor(x,y,radius){
       var options={
           isStatic: true
       }
       this.body = Bodies.circle(x,y,radius,options)
       this.radius = radius;
       World.add(world, this.body);
       this.image = loadImage("pics/3yellow.png");
    }

display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x,pos.y,this.radius,this.radius);
}
}