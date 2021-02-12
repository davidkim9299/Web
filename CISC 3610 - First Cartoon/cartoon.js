var canvas = document.getElementById("myCanvas");

//Background
function background() {

	var background = canvas.getContext("2d");
		background.fillStyle = "#6cdef5";
		background.fillRect(0, 0, 500, 500);
		background.font = "20px Arial";
		background.fillStyle = "#000000";
		var line = 1;
		var height = 20;
		background.fillText("SKY", 0, height*line);
}

//Ground
function ground() {
	var ground = canvas.getContext("2d");
		ground.fillStyle = "#8f5335";
		ground.fillRect(0, 450, 500, 500);
		ground.font = "20px Arial";
		ground.fillStyle = "#000000";
		var line = 1;
		var height =490;
		ground.fillText("GROUND", 0, height*line);
}

//Mountain
function mountain() {
	var mountain = canvas.getContext("2d");
		mountain.beginPath();
		mountain.moveTo(0, 300);
		mountain.lineTo(100,200);
		mountain.lineTo(200,270);
		mountain.lineTo(250,250);
		mountain.lineTo(300,180);
		mountain.lineTo(450,320);
		mountain.lineTo(500,290);
		mountain.lineTo(500,450);
		mountain.lineTo(0,450);
		mountain.closePath();
		mountain.lineWidth = 2;
		mountain.strokeStyle = "#5af533";
		mountain.stroke();
		mountain.fillStyle = "#5af533";
		mountain.fill();
		mountain.font="20px Arial";
		mountain.fillStyle = "#000000";
		var line=1;
		var height=300;
		mountain.fillText("Mountain",300,height*line);
}

//sun
function sun() {
	var sun = canvas.getContext("2d");
		sun.beginPath();
		sun.arc(430,70, 50, 50, 100*Math.PI, false);
		sun.closePath();
		sun.strokeStyle = "yellow";
		sun.stroke();
		sun.fillStyle = "yellow";
		sun.fill();
		sun.font="20px Arial";
		sun.fillStyle = "#000000";
		var line=1;
		var height=75;
		sun.fillText("Sun",410,height*line);
}

//fence
function fence() {
	var fence = canvas.getContext("2d");
		var step;
		for (step = 0; step <=canvas.width; step +=40) {
			fence.beginPath();
			fence.moveTo(step, 452);
			fence.lineTo(step, 427);
			fence.lineTo(step+20, 427);
			fence.lineTo(step+20, 452);
			fence.moveTo(step+20, 439.5);
			fence.lineTo(step+40,439.5);
			fence.closePath();
			fence.lineWidth = 1;
			fence.strokeStyle = "#000000";
			fence.stroke();	
			fence.fillStyle = "#000000";
			fence.fill();
		}
}

//house
function house() {
	var house = canvas.getContext("2d");
		house.beginPath();
		house.moveTo(75, 450);
		house.lineTo(75, 350);
		house.lineTo(200, 350);
		house.lineTo(200, 450);
		house.moveTo(50, 350);
		house.lineTo(137.5, 280);
		house.lineTo(225, 350);
		house.closePath();
		house.lineWidth = 2;
		house.strokeStyle = "#cc2929";
		house.stroke();
		house.fillStyle = "#cc2929";
		house.fill();
		house.font="20px Arial";
		house.fillStyle = "#000000";
		var line=1;
		var height=350;
		house.fillText("house",110,height*line);
}

//glass
function glass() {
	var glass = canvas.getContext("2d");
		glass.beginPath();
		glass.moveTo(100, 410);
		glass.lineTo(100, 360);
		glass.lineTo(175, 360);
		glass.lineTo(175, 410);
		glass.lineTo(100, 410);
		glass.closePath();
		glass.lineWidth = 3;
		glass.strokeStyle = "#FFFFFF";
		glass.stroke();	
		glass.fillStyle = "#6cdef5";
		glass.fill();
		glass.font="10px Arial";
		glass.fillStyle = "#000000";
		var line=1;
		var height=390;
		glass.fillText("Window",120,height*line);
}

//grass
function grass() {
	var grass = canvas.getContext("2d");
		var step;
		for (step = 0; step <=canvas.width; step +=20) {
			grass.beginPath();
			grass.moveTo(step,452);
			grass.lineTo(step+10, 442);
			grass.lineTo(step+20, 452);
			grass.lineWidth = 1;
			grass.strokeStyle = "#69911d";
			grass.stroke();	
			grass.fillStyle = "#69911d";
			grass.fill();
		}
}


var car = canvas.getContext("2d");
	var x = -50;
	var y = 450;
	var dx = 2;
	function drawCar() {
   		car.beginPath();
    		car.arc(x, y, 5, 0, Math.PI*2);
		car.arc(x+40, y, 5, 0, Math.PI*2);
		car.lineTo(x-8, y);
		car.lineTo(x-8,y-22);
		car.lineTo(x+20,y-22);
		car.lineTo(x+20,y-12);
		car.lineTo(x+50,y-12);
		car.lineTo(x+50,y);
		car.lineTo(x-8, y);
    		car.closePath();
		car.lineWidth = 2;
		car.strokeStyle = "#000000";
		car.stroke();
    		car.fillStyle = "#ffffff";
    		car.fill();
	}
	function draw() {
    		car.clearRect(0, 0, canvas.width, canvas.height);
    		background();
		ground();
		mountain();
		sun();
		fence();
		house();
		glass();
		grass();
    		drawCar();
		
    		if(x >= 530){
    			x = -50;
    		}
    		else {
    			x += dx;
    		}
	}

	setInterval(draw, 50);

