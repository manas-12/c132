Status = "";
Bottle_image = "";

function preload(){
    Bottle_image = loadImage("Bottle.jpg")
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}


function modelLoaded() {
    console.log("Model Loaded!")
    Status = true;
    objectDetector.detect(Bottle_image, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
function draw() {
    image(Bottle_image, 0, 0, 640, 350);
    fill("#FF0000");
    text("Bottle", 70, 70);
    noFill();
    stroke("#FF0000");
    rect(60, 90, 450, 550);
} 