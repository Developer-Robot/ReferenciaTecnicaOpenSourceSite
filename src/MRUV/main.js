let box_s = 0

function setup() {
  // Cria o canvas normalmente
  let canvas = createCanvas(300, 100);
  
  // Move o canvas para dentro da div com ID "meu-container-do-canvas"
  canvas.parent('canvas_1');
}

function mruv_formula(s, v, t, a) {
  return s + v * t + (pow(t, 2) * a) / 2
}

function draw() {
  background(220);
  let slider_s = Number(document.querySelector("#pos").value)
  let slider_v = Number(document.querySelector("#vel").value)
  let slider_a = Number(document.querySelector("#accel").value)
  
  line(0, 80, 300, 80)
  for (var i = 5; i >= 0; i--) {
    fill(255, 255, 255)
    let t = i / 10
    box_s = mruv_formula(slider_s, slider_v, t, slider_a)
    rect((box_s * 260), 50, 40, 30)
    fill(2)
    text("time=" + i, (box_s * 260), 70)
  }
}