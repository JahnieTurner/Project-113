function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO)
    video.hide();
}

function draw() {
    image(video, 110, 130, 370, 260)

    fill('red')
    stroke('red')
    circle(90, 110, 80)

    fill('red')
    stroke('red')
    circle(90, 410, 80)

    fill('red')
    stroke('red')
    circle(500, 110, 80)

    fill('red')
    stroke('red')
    circle(500, 410, 80)

    fill('green')
    stroke('green')
    rect(128, 90, 335, 40)

    fill('green')
    stroke('green')
    rect(128, 390, 335, 40)

    fill('green')
    stroke('green')
    rect(70, 145, 40, 235)

    fill('green')
    stroke('green')
    rect(480, 145, 40, 235)
}

function take_snapshot() {
    save('student_name.png');
}