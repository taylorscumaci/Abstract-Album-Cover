var trianglex = 40;

function setup() {
  createCanvas(400, 400);
  x = random(250,400);            //makes sun "rise"
  y = random(0,100);
}

function draw() {
  background('#F2DCD8');          //hazey sky
  noStroke();
  
  fill('#868C56');
  rect(0,370,400,30);             //grass
  
  beginShape();                   //tree
  vertex(trianglex,370);
  vertex(trianglex + 20,300);
  vertex(trianglex + 40,370);
  endShape(CLOSE);
  
  beginShape();                  //tree
  vertex(trianglex + 80,370);
  vertex(trianglex + 100,290);
  vertex(trianglex + 120,370);
  endShape(CLOSE);
  
  beginShape();                  //tree
  vertex(trianglex + 140,370);
  vertex(trianglex + 160,270);
  vertex(trianglex + 180,370);
  endShape(CLOSE);
  
  beginShape();                   //tree
  vertex(trianglex + 210,370);
  vertex(trianglex + 230,310);
  vertex(trianglex + 250,370);
  endShape(CLOSE);
  
  beginShape();  //tree
  vertex(trianglex + 270,370);
  vertex(trianglex + 280,330);
  vertex(trianglex + 300,370);
  endShape(CLOSE);
  
  trianglex = trianglex -0.5;  //makes trees move
  
  fill('#FFFFC8');
  ellipse(x,y,100,100);        //rising sun
  
  ellipseMode(CENTER);
  fill('#FFCB8C');
  ellipse(50,50,60,30);        //orange clouds
  ellipse(60,30,60,30);
  ellipse(90,50,60,30);
  ellipse(156,156,83,15);
  ellipse(190,150,83,15);
  ellipse(220,160,83,20);
  ellipse(330,70,70,50);
  ellipse(360,50,70,40);
  ellipse(380,76,100,40);
  
  fill('#E7ECFF');
  ellipse(90,70,90,30);       //blue clouds
  ellipse(140,60,90,20);
  ellipse(300,130,100,30);
  ellipse(330,110,100,30);
  ellipse(380,140,120,50);
  ellipse(5,170,80,40);
}