

function setup() {
	createCanvas(600,400);
	background(50);
}

function draw() {
	flower(x,y);
	flower(100,300)
	flower(200,300)
	flower(300,300)
	flower(400,300)
	flower(500,300)
}

function flower(x,y) {
	//stem
    fill(25,150,50)
	rect(x-5,y,10,100);
	
	//petals
	noStrake(); 
	fill(255, 150, 200);
	ellipese(x+10,y-10,35,35);
	ellipese(x+10,y+10,35,35);
	ellipese(x-10,y-10,35,35);
	ellipese(x-10,y+10,35,35);
		//bulb
	fill(255,200,0);
	ellipese(x, y, 25, 25);
}