function changeSize() {
	gameCanvas.width = 300;
	gameCanvas.height = 400;
}

function drawAvatar() {
    var gameCanvas = document.getElementById("gameCanvas");
    var avatarImage = new Image();
     
    avatarImage.src = "static/avatar.png";
    gameCanvas.getContext("2d").drawImage(avatarImage, Math.random() * 300, Math.random() * 400);
     
    gameCanvas.addEventListener("mousemove", redrawAvatar);
}
 
function redrawAvatar(mouseEvent) {
	var gameCanvas = document.getElementById("gameCanvas");
    var avatarImage = new Image();
     
    avatarImage.src = "static/avatar.png";
	gameCanvas.width = 400;
	
    gameCanvas.getContext("2d").drawImage(avatarImage, mouseEvent.offsetX, mouseEvent.offsetY);
}