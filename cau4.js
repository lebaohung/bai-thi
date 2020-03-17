function Circle(xPos, yPos, radius ) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
    this.color = "#000000";
}

Circle.prototype.render = function() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.arc(this.xPos, this.yPos, this.radius, 0,2*Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
}


let myCircle = new Circle(10, 10, 100);
myCircle.render();