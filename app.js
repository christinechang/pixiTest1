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
    .add("octo", "images/octo.PNG")
    .load(setup);
//     .load((loader, resources) => {
//         const sprite = new PIXI.Sprite(resources.myImage.texture);
//         stage.addChild(sprite);
//     });
// const texture = PIXI.Texture.from('images/octo.PNG');
// const img = new PIXI.Sprite(texture);
let octo;
function setup(loader, resources) {
    stage.interactive = true;
    octo = new PIXI.Sprite(
        PIXI.Loader.shared.resources.octo.texture
    );

    octo.interactive = true;
    octo.scale.set(2,2);
    octo.anchor.set(0.5, 0.5);
    octo.pivot.set(200,0); // pivot around point
    octo.x = renderer.width/2;
    octo.y = renderer.height/2;

    octo.click = function() { // everytime click scales down
        octo.scale.x -= 0.1;
        octo.scale.y -= 0.1;
    }
    stage.addChild(octo);
    animationLoop();
}

function animationLoop() {
    requestAnimationFrame(animationLoop); // makes animation play smoothly

    octo.rotation += 0.01;
    renderer.render(stage);
}
