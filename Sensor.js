class Sensor {
    constructor(angle, distance, width) {
        this.color = color(255, 255, 255);
        this.angle = radians(angle); // relativo al heading del robot
        this.distance = distance; // altura del triangulo
        this.width = width; // ancho del triangulo
        this.position = createVector(0, 0); // vertice superior del triangulo
        this.vLeft = createVector(0, 0);    // vertices del triangulo
        this.vRight = createVector(0, 0);
        this.value = false;
    }

    updateValue(obstacles) {
        let s = [this.position, this.vLeft, this.vRight];
        this.color = color(255, 255, 255);
        this.value = false;
        for (let o of obstacles) {
            this.value = collidePolyPoly(s, o.vertex, true);
            if (this.value == true) {
                this.color = color(0, 0, 0);
                break;
            }
        }
    }

    updatePosition(x, y, r, heading) { // heading: angulo del robot en radianes
        let a = heading + this.angle;
        // Asegurar que angulo del sensor esté entre 0 y 2π
        a = a % TWO_PI;
        if (a < 0) a += TWO_PI;

        let xp= x + r*cos(a);
        let yp= y + r*sin(a);
        this.position = createVector(xp, yp);

        // Punto medio de la base
        let mx = xp + this.distance * cos(a);
        let my = yp + this.distance * sin(a);

        // Perpendicular
        let dx = (this.width / 2) * sin(a);
        let dy = (this.width / 2) * cos(a);

        // Puntos del triángulo
        this.vRight = createVector(mx - dx, my + dy);
        this.vLeft = createVector(mx + dx, my - dy);
    }   

    show() {
        push();
        fill(this.color);
        triangle(this.position.x, this.position.y, this.vLeft.x, this.vLeft.y, this.vRight.x, this.vRight.y);
        pop();
    }
}
