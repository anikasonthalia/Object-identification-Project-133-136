status = "";

function preload() {
    loadImage("office.jpg");
}

function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded() {
        status = true;
        objectDetector.detect(video, gotResult);
}

function gotResult() {
    console.log(results);
}