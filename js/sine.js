let x = 0;
let amplitude = 25;
let frequency = 30;
let heightMax = 0;
let width = 0;
let data = [];

function startAnimation() {
  console.info("Go...");
  width =
    document.querySelector("#sprite1").parentNode.parentElement.clientWidth -
    60;
  heightMax =
    document.querySelector("#sprite1").parentNode.parentElement.clientHeight;
  data.push({
    sprite: "sprite1",
    x: width,
    y: 0,
    direction: -1,
    amplitude: 45,
    frequency: 40,
    height: 0,
  });
  data.push({
    sprite: "sprite2",
    x: 0,
    y: 50,
    direction: 1,
    amplitude: 25,
    frequency: 30,
    height: 0,
  });
  goAgain();
}

function goAgain() {
  for (i = 0; i < data.length; i++) {
    h = Math.floor(Math.random() * (heightMax - 50));
    data[i].height = h;
    if (data[i].direction === 1) {
      data[i].x = width;
      data[i].direction = -1;
    } else {
      data[i].x = 0;
      data[i].direction = 1;
    }
  }
  loop();
}

function loop() {
  for (i = 0; i < data.length; i++) {
    move(data[i]);
    data[i].x = data[i].x + 1 * data[i].direction;
  }
  let x = getX();
  setTimeout(() => {
    if (x < width) {
      loop();
    } else {
      goAgain();
    }
  }, 10);
}

function move(spriteData) {
  let y =
    spriteData.height +
    spriteData.amplitude * Math.sin(spriteData.x / spriteData.frequency);
  let sprite = document.getElementById(spriteData.sprite);
  sprite.style.left = spriteData.x + "px";
  sprite.style.top = y + "px";
}

function getX() {
  if (data[0].direction === 1) return data[0].x;
  return data[1].x;
}
