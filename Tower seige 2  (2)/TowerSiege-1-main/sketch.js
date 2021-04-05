const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

const Constraint=Matter.Constraint;

var thrower;
function preload(){

}



function setup(){

var canvas=createCanvas(1800,800);
engine=Engine.create();
world=engine.world;

//ground
ground=new Platform(900,785,1800,20);

//ball
thrower=new Ball(200,500,70);


//both platforms
platform1=new Platform(800,400, 350,20);
platform2=new Platform(1500,600,400,20);

box1=new Box(700,355,50,70);
box2=new Box(750,355,50,70);
box3=new Box(800,355,50,70);
box4=new Box(850,355,50,70);
box5=new Box(900,355,50,70);
box6=new Box(750,285,50,70);
box7=new Box(800,285,50,70);
box8=new Box(850,285,50,70);
box9=new Box(800,215,50,70);
//platform 2 line no .1
box10=new Box(1370,555,50,70);
box11=new Box(1420,555,50,70);
box12=new Box(1470,555,50,70);
box13=new Box(1520,555,50,70);
box14=new Box(1570,555,50,70);
box15=new Box(1620,555,50,70);
//platform 2 second line
box16=new Box(1420,485,50,70);
box17=new Box(1470,485,50,70);
box18=new Box(1520,485,50,70);
box19=new Box(1570,485,50,70);
//platform 2 line no.3
box20=new Box(1470,415,50,70);
box21=new Box(1520,415,50,70);
chain=new Slingshot(thrower.body,{x:200,y:350});

}


function draw(){

    Engine.update(engine);
    background(204,204,0);
thrower.display();
platform1.display();
platform2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
ground.display();
chain.display();
}

function mouseDragged(){
Matter.Body.setPosition(thrower.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
chain.fly();


}

function keyPressed(){
if(keyCode===32){

chain.attach(thrower.body);

}


}