function Circle(xPos, yPos, radius, color ) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
    this.color = color;
}

Circle.prototype.render = function(canvasid) {
    let ctx = document.getElementById(canvasid).getContext("2d");
    ctx.beginPath();
    ctx.arc(this.xPos, this.yPos, this.radius, 0,2*Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
}


let myCircle = new Circle(10, 10, 100, "#000000");
myCircle.render("myCanvas");