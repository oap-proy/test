function setup() {
    createCanvas(400, 400);
    background(220);
}

function draw() {
    // Dibuja un círculo que sigue al mouse
    fill(0, 0, 255);
    noStroke();
    circle(mouseX, mouseY, 50);
} 