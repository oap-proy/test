
let robot;
const obstacles = [];

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('canvas-container');
    background(255);
    
    // Crear un robot
    robot = new Robot(width/2, 50);

    // Crear paredes y obstáculos
    createObstacles();
}

function draw() {
    background(255);
    
    // Actualizar la posición del robot
    robot.updatePosition();

    // Aplicar el controlador al robot
    robot.controller(obstacles);

    // Dibujar
    for (let o of obstacles) o.show();
    robot.show();
}

function createObstacles() {
    // pared
    let o1 = new Obstacle();
    o1.addVertex(0,0);
    o1.addVertex(width,0);
    o1.addVertex(width,height);
    o1.addVertex(width-4,height);
    o1.addVertex(width-4,4);
    o1.addVertex(0,4);
    obstacles.push(o1);

    // otra pared
    let o2 = new Obstacle();
    o2.addVertex(0,0);
    o2.addVertex(0,height);
    o2.addVertex(width,height);
    o2.addVertex(width,height-4);
    o2.addVertex(4,height-4);
    o2.addVertex(4,0);
    obstacles.push(o2);

    // obstáculo
    let k = 100;
    let o3 = new Obstacle();
    o3.addVertex(2*k,k);
    o3.addVertex(width-k,k);
    o3.addVertex(width-k,height-2*k);
    o3.addVertex(width-2*k,height-k);
    o3.addVertex(k,height-k);
    o3.addVertex(k,2*k);
    obstacles.push(o3);
}
