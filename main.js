x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_square="";
SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

function preload() {

}
function setup() {
    canvas = createCanvas(900, 600);
}
function draw() {
    if (draw_circle == "set") {
circle(x,y,50);
document.getElementById("status").innerHTML = "Circle is drawn";
draw_circle="";
    }

if (draw_rect == "set") {
        rect(x,y,70,40);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        draw_rect="";
            }
            if (draw_square == "set") {
                square(x,y,50);
                document.getElementById("status").innerHTML = "Square is drawn";
                draw_square="";
                    }
                   
}
function start() {
    document.getElementById("status").innerHTML = "System is listening, please speak!";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "THe speech has been recognised as " + content;
    if (content == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = "set";
    }

    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rect = "set";
    }
    if (content == "square") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing square";
        draw_square = "set";
    }
}