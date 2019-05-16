// video source: https://www.youtube.com/watch?v=L53gjP-TtGE
let img;
let vid;
let theta = 0;

function setup() {
  createCanvas(1000, 1000, WEBGL);

  img = loadImage('assets/lol.jpg');
  vid = createVideo(['assets/power.mp4']);
  vid.elt.muted = false;
  vid.loop();
  vid.hide();
}

function draw() {
  background(1000);
  translate(100, 100,);
  push();
  rotateZ(theta * mouseX * 0.0012);
  rotateX(theta * mouseX * 0.0012);
  rotateY(theta * mouseX * 0.0012);
  //pass image as texture
  texture(vid);
  sphere(220);
  pop();
  theta += 0.05;
}