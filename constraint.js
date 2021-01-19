class Rope{
    constructor(pointA, objectB){
        var options ={
            pointA: pointA,
            bodyB: objectB,
            stiffness: 0.02,
            length: 5
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope)
        this.pointA = pointA;
    }
display(){
   fill("white");
    line(this.rope.bodyB.position.x, this.rope.bodyB.position.y, this.pointA.x, this.pointA.y);
}
}