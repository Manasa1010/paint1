var canavs;

var database;
var paint= [];
var currentPath=[];

function setup() {
    database=firebase.database();
    canvas = createCanvas(800, 800);
    canvas.mousePressed(startPath);
    //canvas.mouseReleased(endPath);
   
}
function getpaint(){
  var paintRef=database.ref('currentPath')
  paintRef.on(value,(canvas)=>{
    currentPath=canvas.val();
  })
}
 function update(){
  database.ref('/').update({
    currentPath:currentPath
  })
}
function startPath(){
  currentPath=[];
  paint.push(currentPath);
}

//function endPath(){
 


function draw() {
  background(0) ;



if(mouseIsPressed){
  var point={
    x:mouseX,
    y:mouseY
  }
  currentPath.push(point);
}
 stroke(255);
 strokeWeight(4)
 noFill();

for (i=0; i<paint.length; i++){
  var path=paint[i];
  beginShape();
  for (j=0; j<path.length; j++) {
   vertex(path[j].x,path[j].y)
}
  endShape();
}

}




