var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle1;
var count = 0;
var divisionHeight=300;
var score = 0;
var gameState = "play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  gameState = "play";
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
   ground.display();
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
 
  //for (var j = 0; j < particles.length; j++) {
   
    // particles[j].display();
   //}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


   if(particle1!=null)
   {
     particle1.display();
     if(particle1.body.position.y > 700)
     {
      if(particle1.body.position.x<300)
      {
          score = score + 500;
          particle1 = null;
      }
      else if((particle1.body.position.x>301)&&(particle1.body.position.x<600))
      {
          score = score + 100;
          particle1 = null;
      }
      else if((particle1.body.position.x>601)&&(particle1.body.position.x<900))
      {
          score = score + 200;
          particle1 = null;
      }
     }

   }
   textSize(20);
   text("Score :" + score,690,25);

   if(count>=5)
   {
      gameState = "end";
   }
   text("500",25,780);
   text("500",100,780);
   text("500",180,780);
   text("100",260,780);
   text("100",340,780);
   text("100",420,780);
   text("100",500,780);
   text("200",580,780);
   text("200",660,780);
   text("200",740,780);
  }

function mousePressed()
{
  if(gameState == "play")
  {
  console.log("hello");
  particle1 = new Particle(mouseX,10,10); 
  count++;
  }
  
  }
   

