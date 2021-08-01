class Ground{
    
    constructor(x,y,width,height){

        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height
        this.body=Bodies.rectangle(this.x,this.y,this.width, this.height, options)
    }
    display(){

        var Groundpos=this.body.position;

        push();
        translate(Groundpos.x, Groundpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("red");
        rect(0,0,this.width, this.height);
        pop();
    }
}
