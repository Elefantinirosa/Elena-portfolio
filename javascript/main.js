/*let videoData = [{title: "Despacito", amount: 5.68},
         {title: "Shape of You", amount: 3.89},
         {title: "See You Again", amount: 3.85},
         {title: "Uptown Funk", amount: 3.32},
         {title: "Masha and the Bear: Recipe for Disaster", amount: 3.31},
         {title: "Gangam Style", amount: 3.23},
         {title: "Sorry", amount: 3.03},
         {title: "Sugar", amount: 2.80},
         {title: "Shake it Off", amount: 2.67},
         {title: "Roar", amount: 2.65},
         {title: "Bailando", amount: 2.63},
         {title: "Thinking Out Loud", amount: 2.53},
         {title: "Counting Stars", amount: 2.51},
         {title: "Dark Horse", amount: 2.46},
         {title: "Lean On", amount: 2.43}
 ];
 let videoData2 = [{title: 1, amount: 5.68},
         {title: 2, amount: 3.89},
         {title: 3, amount: 3.85},
         {title: 4, amount: 3.32},
         {title: 5, amount: 3.31},
         {title: 6, amount: 3.23},
         {title: 7, amount: 3.03},
         {title: 8, amount: 2.80},
         {title: 9, amount: 2.67},
         {title: 10, amount: 2.65},
         {title: 11, amount: 2.63},
         {title: 12, amount: 2.53},
         
 ];
 
let divSelection = d3.select("body") 
    .selectAll("div");

 divSelection
    .data(videoData)
    .enter()
  .append('div')
    .text(function(d) { 
       return d.title + ": " + d.amount + " views";
	  })
    .attr("class", "bar")
    .style("width", function(d) { return d.amount * 50 + "px"; })
    .datum(function() { return this.dataset; })    ;*/
//.translate(0,200).on("mouseover")
   /* function setup() {
      let canva = 400;
     
      createCanvas( canva , 1400);
    }
    let valore = 255;

    function draw() {
      background(220);
      fill(0,2, valore);
      rect(mouseX, mouseY,23,40); 
     
    }
 
    function mouseClicked(){
       if (valore===255){
         valore=2;
         
       } else {valore =255;}
    }
   
    d3.select("body").transition().delay(function(d,i){return i*10})
    .on("start",function repeat() {
      d3.active(this).transition().style("background-color", "black")
    .delay(3000).transition()
    .style("background-color","white").transition().on("start",repeat)
    })
    ;
    function setup() {
      createCanvas(100, 100, WEBGL);
      noFill();
    }
    
    function draw() {
      background(200);
      rotateY(PI / 6);
      stroke(153);
      box(35);
      let rad = millis() / 1000;
      // Set rotation angles
      let ct = cos(rad);
      let st = sin(rad);
      // Matrix for rotation around the Y axis
      applyMatrix(  ct, 0.0,  st,  0.0,
                   0.0, 1.0, 0.0,  0.0,
                   -st, 0.0,  ct,  0.0,
                   0.0, 0.0, 0.0,  1.0);
      stroke(255);
      box(50);
    }*/

    //draw a spinning teapot
let teapot;

function preload() {
  // Load model with normalise parameter set to true
  teapot = loadModel('farfalla.stl', true);
}

function setup() {
  createCanvas(20,20);
  createCanvas(screen.width, screen.height, WEBGL);
}

function draw() {
  background(200);

 // scale(0.4);  Scaled to make model fit into canvas
// rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  orbitControl(5,5);
  rotateY(10);
  model(teapot); 
 
}
/*
function mousePressed(){
  loop();
}

function mouseReleased(){
  noLoop()
}*/