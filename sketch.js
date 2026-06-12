// Paleta de cores originais da Monalisa
const CORES_MONALISA = {
    pele: { r: 219, g: 185, b: 155 },          // Tons de pele
    peleSombra: { r: 180, g: 145, b: 115 },    // Sombras
    cabelo: { r: 101, g: 67, b: 33 },          // Cabelo escuro
    olho: { r: 79, g: 39, b: 30 },             // Iris/pupila
    branco_olho: { r: 240, g: 235, b: 220 },   // Branco do olho
    labios: { r: 186, g: 100, b: 80 },         // Lábios/bochechas
    fundo: { r: 130, g: 120, b: 110 }          // Fundo (tons quentes)
};

let mouseX_global, mouseY_global;

function setup() {
    const container = document.getElementById('canvas-container');
    const width = Math.min(800, container.clientWidth - 40);
    const height = width;
    
    const canvas = createCanvas(width, height);
    canvas.parent('canvas-container');
    
    mouseX_global = width / 2;
    mouseY_global = height / 2;
    
    noLoop();
}

function draw() {
    background(CORES_MONALISA.fundo.r, CORES_MONALISA.fundo.g, CORES_MONALISA.fundo.b);
    
    // Desenhar Monalisa
    desenharMonalisa();
    
    // Adicionar informação
    fill(255);
    textSize(12);
    textAlign(LEFT);
    text(`Cursor: (${Math.round(mouseX_global)}, ${Math.round(mouseY_global)})`, 10, height - 10);
}

function desenharMonalisa() {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Cabeça
    fill(CORES_MONALISA.pele.r, CORES_MONALISA.pele.g, CORES_MONALISA.pele.b);
    noStroke();
    
    // Rosto ovalado
    ellipse(centerX, centerY - 20, 180, 220);
    
    // Pescoço
    rect(centerX - 35, centerY + 80, 70, 60);
    fill(CORES_MONALISA.peleSombra.r, CORES_MONALISA.peleSombra.g, CORES_MONALISA.peleSombra.b);
    ellipse(centerX - 40, centerY + 85, 30, 40);
    ellipse(centerX + 40, centerY + 85, 30, 40);
    
    // Sombras do rosto
    fill(CORES_MONALISA.peleSombra.r, CORES_MONALISA.peleSombra.g, CORES_MONALISA.peleSombra.b, 100);
    ellipse(centerX - 50, centerY, 50, 100);
    ellipse(centerX + 50, centerY, 50, 100);
    
    // Cabelo
    fill(CORES_MONALISA.cabelo.r, CORES_MONALISA.cabelo.g, CORES_MONALISA.cabelo.b);
    arc(centerX, centerY - 120, 190, 200, PI, TWO_PI);
    
    // Franja
    arc(centerX - 60, centerY - 80, 80, 100, 0, PI);
    arc(centerX + 60, centerY - 80, 80, 100, 0, PI);
    
    // Ombros
    fill(CORES_MONALISA.peleSombra.r, CORES_MONALISA.peleSombra.g, CORES_MONALISA.peleSombra.b);
    arc(centerX, centerY + 120, 300, 150, 0, PI);
    
    // Desenhar olhos com movimento
    desenharOlho(centerX - 50, centerY - 30);
    desenharOlho(centerX + 50, centerY - 30);
    
    // Sobrancelhas
    stroke(CORES_MONALISA.cabelo.r, CORES_MONALISA.cabelo.g, CORES_MONALISA.cabelo.b);
    strokeWeight(3);
    noFill();
    
    // Sobrancelha esquerda (curvada)
    beginShape();
    curveVertex(centerX - 65, centerY - 45);
    curveVertex(centerX - 70, centerY - 50);
    curveVertex(centerX - 45, centerY - 55);
    curveVertex(centerX - 30, centerY - 50);
    endShape();
    
    // Sobrancelha direita (curvada)
    beginShape();
    curveVertex(centerX + 30, centerY - 50);
    curveVertex(centerX + 45, centerY - 55);
    curveVertex(centerX + 70, centerY - 50);
    curveVertex(centerX + 65, centerY - 45);
    endShape();
    
    // Nariz
    noStroke();
    fill(CORES_MONALISA.peleSombra.r, CORES_MONALISA.peleSombra.g, CORES_MONALISA.peleSombra.b, 80);
    triangle(centerX - 10, centerY - 15, centerX + 10, centerY - 15, centerX, centerY + 15);
    
    // Narinas
    fill(CORES_MONALISA.cabelo.r, CORES_MONALISA.cabelo.g, CORES_MONALISA.cabelo.b, 120);
    ellipse(centerX - 8, centerY + 10, 4, 6);
    ellipse(centerX + 8, centerY + 10, 4, 6);
    
    // Boca (o famoso sorriso)
    stroke(CORES_MONALISA.labios.r, CORES_MONALISA.labios.g, CORES_MONALISA.labios.b);
    strokeWeight(2);
    noFill();
    
    // Contorno dos lábios
    arc(centerX, centerY + 45, 60, 30, 0, PI);
    arc(centerX - 5, centerY + 55, 50, 20, 0, PI);
    
    // Preenchimento dos lábios
    fill(CORES_MONALISA.labios.r, CORES_MONALISA.labios.g, CORES_MONALISA.labios.b, 150);
    noStroke();
    arc(centerX, centerY + 45, 55, 25, 0, PI);
    
    // Bochechas
    fill(CORES_MONALISA.labios.r, CORES_MONALISA.labios.g, CORES_MONALISA.labios.b, 100);
    ellipse(centerX - 70, centerY + 10, 40, 30);
    ellipse(centerX + 70, centerY + 10, 40, 30);
}

function desenharOlho(eyeX, eyeY) {
    const eyeSize = 25;
    const pupilSize = 10;
    
    // Branco do olho
    fill(CORES_MONALISA.branco_olho.r, CORES_MONALISA.branco_olho.g, CORES_MONALISA.branco_olho.b);
    noStroke();
    ellipse(eyeX, eyeY, eyeSize, eyeSize * 1.2);
    
    // Iris
    fill(CORES_MONALISA.olho.r, CORES_MONALISA.olho.g, CORES_MONALISA.olho.b);
    ellipse(eyeX, eyeY, eyeSize * 0.6, eyeSize * 0.7);
    
    // Calcular ângulo em direção ao mouse
    const angle = atan2(mouseY_global - eyeY, mouseX_global - eyeX);
    const distance = eyeSize * 0.25;
    
    // Posição da pupila seguindo o cursor
    const pupilX = eyeX + cos(angle) * distance;
    const pupilY = eyeY + sin(angle) * distance;
    
    // Pupila
    fill(0);
    ellipse(pupilX, pupilY, pupilSize, pupilSize);
    
    // Brilho nos olhos (specular highlight)
    fill(255);
    ellipse(pupilX - 3, pupilY - 3, 4, 4);
}

// Atualizar posição do mouse
function mouseMoved() {
    mouseX_global = mouseX;
    mouseY_global = mouseY;
    redraw();
}

// Redraw ao carregar
function windowResized() {
    const container = document.getElementById('canvas-container');
    if (container) {
        const width_new = Math.min(800, container.clientWidth - 40);
        const height_new = width_new;
        
        if (width_new !== width || height_new !== height) {
            resizeCanvas(width_new, height_new);
            redraw();
        }
    }
}