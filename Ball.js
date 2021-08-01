class Ball{
    constructor(x,y,r){

        var ball_options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2 
        }
       this.x=x;
       this.y=y;
       this.r=r;
       this.body=Bodies.circle(this.x,this.y,this.r/2,ball_options)
    }

 display(){
     var ballpos=this.body.position;

     push();
     translate(ballpos.x, ballpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(250,0,250);
        ellipse(0,0,this.r);
        pop();
 }
}