PIXI.utils.sayHello('hello there!');
var renderer = PIXI.autoDetectRenderer(512,512, { //width, height, options
    transparent: true,
    resolution: 1
});
document.getElementById('display').appendChild(renderer.view);

var stage = new PIXI.Container(); // creates stage element -- can have multiple and swap them
// console.log('PIXI:', PIXI, PIXI.Loader.shared);

renderer.render(stage);
PIXI.Loader.shared
    .add("spritesheet", "images/oga_preview.png")
    .load(setup);
var sprite;
function setup(loader, resources) {
    stage.interactive = true;
    let rect = new PIXI.Rectangle(120,5,24,30);
    let texture = PIXI.Loader.shared.resources["spritesheet"].texture;
    texture.frame = rect;

    sprite = new PIXI.Sprite(texture);

    var idle = setInterval(function() {
        if (rect.y > 95) rect.y = 5;
        sprite.texture.frame = rect;
        rect.y += 29;
    }, 500);
    sprite.scale.set(3,3);
    sprite.vx = 3;
    stage.addChild(sprite);
    animationLoop();
}

function animationLoop() {
    requestAnimationFrame(animationLoop); // makes animation play smoothly
    renderer.render(stage);
}

window.addEventListener("keydown", function(event) {
    event.preventDefault();
    sprite.x += sprite.vx;
});