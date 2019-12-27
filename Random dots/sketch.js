var spot ={
   x:50,
   y:100

};
var coll={
  r:255,
  g:0,
  b:98

};
function setup() {

  createCanvas(600,400);
  background(0);
 
}

function draw() {
coll.r=random(100,255);
  coll.g=0;
  coll.b=random(100,190);
  spot.x=random(0,width);
  spot.y=random(0,height);
  noStroke()
  fill(coll.r,coll.g,coll.b,25);
  ellipse(spot.x,spot.y,25,25);
    
};