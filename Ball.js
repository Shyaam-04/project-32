class Ball{
    constructor(x,y,radius){
        var options = {
            'isStatic':true,
            'density':1,
            'friction':0.1,
            'restitution':0.4
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("blue");
        circle(0,0,this.radius);
        pop();
    }
}