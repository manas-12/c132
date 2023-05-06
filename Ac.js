Status = "";
AC_image = "";

function preload(){
    AC_image = loadImage("AC.jpg")
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
    objectDetector.detect(AC_image, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
function draw() {
    image(AC_image, 0, 0, 640, 350);
    fill("#FF0000");
    text("AC", 70, 70);
    noFill();
    stroke("#FF0000");
    rect(60, 90, 500, 200);
} 