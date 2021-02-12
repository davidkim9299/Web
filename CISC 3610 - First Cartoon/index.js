var canvas = document.getElementById("myCanvas");

//Background
var background = canvas.getContext("2d");
	//background color and position
	background.fillStyle = "cyan";
	background.fillRect(0, 0, 500, 500);

	//insert text in backgroud
	background.font = "20px Arial";
	background.fillStyle = "black";
	var line = 1;
	var height = 130;
	background.fillText("This is DONGRYUL KIM's First cartoon", 80, height*line);
	var height = 170;
	background.fillText("Included Object: ", 80, height*line);
	var height = 190;
	background.fillText("Sky, Sun, Mountain, Ground", 80, height*line);
	var height = 210;
	background.fillText("House, Grass, Fence, Window, Car", 80, height*line);
	var height = 290;
	background.fillText("Press HOME to return to this page", 80, height*line);
	var height = 330;
	background.fillText("Press START to see cartoon", 80, height*line);
	var height = 370;
	background.fillText("Press PORTFOLIO to visit my portfolio site", 80, height*line);

