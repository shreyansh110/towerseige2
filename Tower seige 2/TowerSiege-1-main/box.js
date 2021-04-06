class Box{
constructor(x,y,width,height){
var options={

'restitution':0.4,
'friction':0.9,
'density':1.2,
isStatic:false

}

this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.image=loadImage("wood1.png");
World.add(world,this.body);

}

display(){
    
    
    push();
if(this.body.speed<3){

this.body.visible=true
}else{
 World.remove(world,this.body)
 
this.Visibility=this.Visibility-5
tint(0,this.Visibility);


}
translate(this.body.position.x,this.body.position.y)
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);

pop();
}

}