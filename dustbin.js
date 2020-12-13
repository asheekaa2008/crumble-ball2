class Dustbin{
constructor(x,y){
this.x=x
this.y=y
this.width=200
this.height=100
this.thickness=20
this.angle=0
this.image=loadImage("dustbingreen.png");
this.bottombody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true});
World.add(world,this.bottombody)
this.leftbody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});
World.add(world,this.leftbody)
this.rightbody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});
World.add(world,this.rightbody)


}
display(){

    rectMode(CENTER)
    rect(this.bottombody.position.x,this.bottombody.position.y,this.width,this.thickness)
    rectMode(CENTER)
    rect(this.leftbody.position.x,this.leftbody.position.y,this.width,this.height)
    rectMode(CENTER)
    rect(this.rightbody.position.x,this.rightbody.position.y,this.width,this.thickness)
}






}