var font;
var clock;
var sampleFactor = 0.15;

function preload() {

    font = loadFont("ROBOTO-BOLD.TTF");

}

function setup() {
    var canvas = createCanvas(900, 180);
    canvas.parent("canvas-parent");
    
    background(153, 0, 102);
    colorMode(HSB);
    textAlign(LEFT, TOP);
    clock = new Clock();
    clock.init();
}

function draw() {
    colorMode(RGB);
    // background(153, 0, 102);
    background(0);
    colorMode(HSB);
    clock.update();
    clock.show();
}
