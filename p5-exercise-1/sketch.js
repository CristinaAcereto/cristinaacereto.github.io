//look as notebook for different functions on can use to enhance the webpage,
//also check online
//p5 doesn't check coordinates from bottom, only top.
//blue dot means it hasn't saved yet.
//atom beautify will auto align eveyrthing
//in this ex we will be making a car and giving it a 'vroom' noise



let carX = 50;
//you do not need to call it x, you can call it anything. Here, we called it carX. (but eventually change back to x)
//instead of writing 50 down in draw, we made x a particular variable and left it up here to keep it more organized




function setup() {
  createCanvas(500, 500);
  background(0, 255, 0);
  //one value is greyscale, three is RGB
  //DRAW RACECAR BODY//
  noStroke();
  fill(40, 225, 255);
  rect(mouseX, mouseY, 50, 30);
  //mouseX and mouseY will move the object with your mouse, X and Y must be capital
// 0 is black
//if you put stroke and strokeweight under NOSTROKE it will create a stroke on the rectangle as well as the circles
//DRAW RACECAR WHEELS//
  fill(0);
  stroke (255);
  strokeWeight(2);
  ellipse(60, 350, 20, 20)
  ellipse(90, 350, 20, 20)
  //

  //little rectangle should appear on lower left side of green box
}



//Movement has to happen in the draw function, so if you want your car to drive must be done down here.
function draw() {
background(0, 255, 0, 15);

carx= mouseX;
//when you add a fourth value to RGB, it represents transparency. SO THIS^^^^ will show the car moving around, but will be MUCH
//more transparent instead of leaving "tire marks"
//this will give it a constant movement across x plane
carX = carX + 1;
//if it is plus 3 or 10 or 100, it will move much faster
//carX = carX + 1; IS THE SAME AS carx++
// carX+=3; it wll incrementally go up
//carX-+3; it will do the same thing but go backwards
if(carX > 500){
  carX = -50;
}  else if (carX > 400){


  //this translates to: if carX is more than 500 on the coordinate, then it will restart at 50.
  //NOW it should be a looping rectangle
  //
}else{
  carX+=3;
}

  //DRAW RACECAR BODY//
  noStroke();
  fill(40, 225, 255)
  rect(x, 300, 50, 30)
  console.log('sup internet!');
  // sup internet keeps looping because it is under draw, it is nonstop


}



function mousePressed(){
  carX = 0;

  console.log("mouse IS CLICKED");
}
