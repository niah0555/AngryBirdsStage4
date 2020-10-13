class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.s1=loadImage("sprites/sling1.png");
        this.s2=loadImage("sprites/sling2.png");
        this.s3=loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image (this.s1,150,20);
        image (this.s2,125, 23);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ();
            strokeWeight(4);
            stroke(color(84,40,16));
            line(pointA.x-15, pointA.y, pointB.x, pointB.y);
            line(pointA.x-15, pointA.y, pointB.x+25, pointB.y);
            image(this.s3, pointA.x-20, pointA.y-13, 10, 30);
            pop ();

            
        }
    }
    
}