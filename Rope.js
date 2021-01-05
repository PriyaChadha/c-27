class Rope{
    constructor(bodyA,bodyB){
        var options={
            length:20,
            stiffness:0.3,
            bodyA:bodyA,
            bodyB:bodyB
                      
            }
           this.rope=Constraint.create(options)
            World.add(world,this.rope)
            

            
    }

    display()
    {
        stroke("black")
        strokeWeight(4)
        line(this.rope.bodyA.position.x,
            this.rope.bodyA.position.y,
            this.rope.bodyB.position.x,
            this.rope.bodyB.position.y)
        
    }
}
