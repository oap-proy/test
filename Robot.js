class Robot {

    constructor(x, y) {
        this.radius = 12;  // Radio del robot
        this.color = color(255, 0, 0);  // Color del robot
        let sensorAngle = [0, 45, 90, 135, 180, -45, -90, -135];  // Ángulos de los sensores grados
        this.sensors = [];
        for (let i = 0; i < sensorAngle.length; i++) {
            this.sensors.push(new Sensor(sensorAngle[i], 20, 8));
        }
        this.x = x;
        this.y = y;
        this.heading = random(0, TWO_PI);    // Ángulo de dirección aleatorio
        this.velLin = 0;    // Velocidad de movimiento
        this.velAng = 0;    // Velocidad de rotación
    }

    // controlador
    controller(obstacles) {
        this.sensorUpdate(obstacles);

        // Reiniciar velocidades
        this.velLin = 0;
        this.velAng = 0;

        // Control con teclas de flecha
        if (keyIsDown(UP_ARROW)) {
            this.velLin = 2;
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.velAng = -0.02;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.velAng = 0.02;
        }
    }

    sensorUpdate(obstacles) {
        for (let s of this.sensors) s.updateValue(obstacles);
    }
    
    // metodo para actualizar la posicion del robot
    updatePosition() {
        this.x += cos(this.heading) * this.velLin;
        this.y += sin(this.heading) * this.velLin;
        this.heading += this.velAng;
        // Asegurar que heading esté entre 0 y 2π
        this.heading = this.heading % TWO_PI;
        if (this.heading < 0) this.heading += TWO_PI;      
        // Actualizar posicion de todos los sensores
        for (let s of this.sensors) {
            s.updatePosition(this.x, this.y, this.radius, this.heading);
        }
    }

    // Método para dibujar el robot
    show() {
        push();
        translate(this.x, this.y);
        rotate(this.heading);
        // Dibujar el cuerpo del robot (círculo)
        fill(this.color);
        noStroke();
        circle(0, 0, this.radius * 2);
        // Dibujar la dirección (línea)
        stroke(0);
        strokeWeight(1);
        line(0, 0, this.radius, 0);
        pop();
        // Dibujar todos los sensores
        for (let s of this.sensors) {
            s.show();
        }
    }
} 