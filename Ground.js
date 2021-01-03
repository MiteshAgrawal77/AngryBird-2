class Ground{
    constructor(x,y,w){
        var options = {
            density:1,
            isStatic: true,
            restitution:0.8,
            friction:1
          }
          this.body = Bodies.rectangle(x,y,w,30,options)
          World.add(myworld, this.body) 
          this.w = w
          this.h = 30

          this.image=loadImage("sprites/ground.png")
    }

    display(){

        push()
        imageMode(CENTER)
        fill("brown")
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
        pop()
    
    }
      
}