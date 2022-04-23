function setup(){
    canvas=createCanvas(900,700);
    canvas.position(140,400);
    video=createCapture(VIDEO);
    video.hide();
    
}

function draw() {
    image(video,240,150,440,400);
    
    stroke(168, 10, 10);
    fill(139, 58, 251);

    circle(60, 60, 75);
    circle(60, 640, 75);
    circle(840, 60, 75);
    circle(840, 640, 75);
    
    stroke(255,215,0);
    fill(255,215,0);

    rect(90, 35, 720, 50);
    rect(90, 615, 720, 50);
    rect(33, 88, 50, 525);
    rect(815, 88, 50, 525);

      
    
    }

function take_snapshot(){
    save('picture.png');   
}

