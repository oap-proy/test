class Obstacle {
    constructor() {
        this.vertex = [];
    }

    addVertex(x,y) {
        this.vertex.push(createVector(x,y));
    }

    show() {
        push();
        fill(200);  // Color de relleno gris claro
        stroke(0);  // Color del borde negro
        strokeWeight(2);  // Grosor de la línea
        
        // Comenzar a dibujar el polígono
        beginShape();
            for (let v of this.vertex) {
                vertex(v.x, v.y);
            }
        endShape(CLOSE);  // Cerrar el polígono conectando el último vértice con el primero
        
        pop();
    }
}