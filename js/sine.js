let x = 0;
let amplitude = 25;
let frequency = 30;
let heightMax = 0;
let width = 0;
let data = [];

function startAnimation() {
  console.info("Go...");
  width =
    document.querySelector("#sprite1").parentNode.parentElement.clientWidth;
  heightMax =
    document.querySelector("#sprite1").parentNode.parentElement.clientHeight;
  data.push({
    sprite: "sprite1",
    x: 0,
    y: 0,
    amplitude: 45,
    frequency: 40,
    height: 0,
  });
  data.push({
    sprite: "sprite2",
    x: 0,
    y: 50,
    amplitude: 25,
    frequency: 30,
    height: 0,
  });
  goAgain();
}

function goAgain() {
  for (i = 0; i < data.length; i++) {
    h = Math.floor(Math.random() * (heightMax - 50));
    console.info("h...", h);
    data[i].height = h;
    data[i].x = 0;
  }
  // console.info(data);
  loop();
}

function loop() {
  for (i = 0; i < data.length; i++) {
    move(data[i]);
    data[i].x = data[i].x + 1;
  }
  let x = data[0].x;
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
  //console.info("x:y", spriteData.x, y);
  let sprite = document.getElementById(spriteData.sprite);
  sprite.style.left = spriteData.x + "px";
  sprite.style.top = y + "px";
}
