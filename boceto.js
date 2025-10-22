// --- PALETAS DE COLORES ---
let paletasColores = [
  ["#111827","#2563EB","#10B981","#F59E0B","#EF4444"],
  ["#0F172A","#22D3EE","#A78BFA","#34D399","#F472B6"],
  ["#1F2937","#60A5FA","#FBBF24","#F87171","#34D399"]
];

let paletaActual;
let diametro = 40;
let borrarEnCadaFrame = true; // si es true, el fondo se repinta cada frame

// --- SETUP ---
function setup() {
  let canvas = createCanvas(windowWidth, 420);
  canvas.parent("contenedor-p5");
  noStroke();
  background(245);

  // Paleta inicial aleatoria
  paletaActual = random(paletasColores);

  // Conectar botones del HTML
  document.getElementById("btn-paleta").addEventListener("click", cambiarPaleta);
  document.getElementById("btn-limpiar").addEventListener("click", limpiar);
  document.getElementById("btn-guardar").addEventListener("click", guardarPNG);
}

// --- FUNCIONES DE BOTONES ---
function cambiarPaleta() {
  paletaActual = random(paletasColores);
}

function limpiar() {
  background(245);
}

function guardarPNG() {
  saveCanvas("poster-molon", "png");
}

// --- DETECTAR TECLAS ---
function keyPressed() {
  // Si se pulsa "b" o "B", alternar el modo de borrado
  if (key === 'b' || key === 'B') {
    borrarEnCadaFrame = !borrarEnCadaFrame;
  }
}

// --- REDIMENSIONAR ---
function windowResized() {
  resizeCanvas(windowWidth, 420);
  background(245);
}

// --- DIBUJO PRINCIPAL ---
function draw() {
  if (borrarEnCadaFrame) background(245, 245, 245, 25); // fondo semitransparente

  // círculo principal
  fill(paletaActual[0] + "CC"); // color con transparencia
  circle(mouseX, mouseY, diametro);

  // anillos alrededor
  for (let i = 0; i < 8; i++) {
    let angulo = frameCount * 0.02 + i * TAU / 8;
    let radio = 60 + 20 * sin(frameCount * 0.03 + i);
    let x = mouseX + cos(angulo) * radio;
    let y = mouseY + sin(angulo) * radio;
    fill(paletaActual[i % paletaActual.length] + "AA");
    circle(x, y, 18);
  }
}
