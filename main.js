
    nosex = 0;
    nosey = 0; 

function preload(){
    clownnose = loadImage("https://i.postimg.cc/nrr3Cj88/11649-raw.png");
}

function setup(){
    canvas = createCanvas(400, 275);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 275);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("model initiated");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x - 15;
        nosey = results[0].pose.nose.y - 15;
        console.log("nose x = " + nosex);
        console.log("nose y = " + nosey);
    }
}

function draw(){
    image(video, 0, 0, 400, 275);
    image(clownnose, nosex, nosey, 35, 35);

}

function Snapshot(){
    save("My_filter_image.png");
}