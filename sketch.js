var p1;
var p2;
var p3;

var r1;
var r2;
var r3;

var rr1;
var rr2;
var rr3;

var rrr1;
var rrr2;
var rrr3;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noFill();
    
    p1 = createGraphics(400, 100);
    p2 = createGraphics(400, 100);
    p3 = createGraphics(400, 100);
    
    r1 = random(150);
    r2 = random(150); 
    r3 = random(150);
    
    rr1 = random(1, 5);
    rr2 = random(2, 6); 
    rr3 = random(1, 5);
    
    rrr1 = random(70, 170);
    rrr2 = random(100, 200); 
    rrr3 = random(100, 200);

}

function draw() {
    var r = random(2);
    
    p1.background(255);
    p1.stroke(0);
    p1.noFill();
    p1.ellipse(200, 50, 0+r1, 100);
        p1.strokeWeight(rr1+r);
    p1.ellipse(200, 50, 50+r1, 100);
        p1.strokeWeight(rr2+r);
    p1.ellipse(200, 50, 100+r1, 100);
        p1.strokeWeight(rr3+r);
    p1.ellipse(200, 50, 170+r1, 100);
    image(p1, window.innerWidth/2-200, window.innerHeight/2-250);
    
    p2.background(255);
    p2.stroke(0);
    p2.noFill();
    p2.ellipse(200, 50, 50+r2, 50+r2);
        p2.strokeWeight(rr3+r+r);
    p2.ellipse(200, 50, 100+r2, 100+r2);
        p2.strokeWeight(rr2+r+r);
    p2.ellipse(200, 50, 170+r2, 170+r2);
        p2.strokeWeight(rr1+r+r);
    p2.ellipse(200, 50, 200+r2, 200+r2);
    image(p2, window.innerWidth/2-200, window.innerHeight/2-150);
    
    p3.background(255);
    p3.stroke(0);
    p3.noFill();
    p3.ellipse(200, 50, 0+r3, 100);
        p3.strokeWeight(rr2+r);
    p3.ellipse(200, 50, 50+r3, 100);
        p3.strokeWeight(rr3+r);
    p3.ellipse(200, 50, 100+r3, 100);
        p3.strokeWeight(rr1+r);
    p3.ellipse(200, 50, 170+r3, 100);
    image(p3, window.innerWidth/2-200, window.innerHeight/2-50);
    
    strokeWeight(rr2);
    line(window.innerWidth/2-rrr1, window.innerHeight/2-250, window.innerWidth/2+rrr1, window.innerHeight/2-250);
    line(window.innerWidth/2-rrr2, window.innerHeight/2-150, window.innerWidth/2+rrr2, window.innerHeight/2-150);
    line(window.innerWidth/2-rrr3, window.innerHeight/2-50, window.innerWidth/2+rrr3, window.innerHeight/2-50);
    line(window.innerWidth/2-rrr1, window.innerHeight/2+50, window.innerWidth/2+rrr1, window.innerHeight/2+50);
    
}