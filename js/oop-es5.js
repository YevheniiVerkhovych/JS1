// cast
function Person(height, weight) {
    var p = this;
    p.height = height;
    p.weight = weight;

    p.getInfo = function() {
        console.log(this);
        console.log(p.height, p.weight);
    }
 
    $(".btn").click(p.getInfo);
}
//cast Animal
function Animal(type, nik, sound, eat) {
    var p = this;
    p.type = type;
    p.nik = nik;
    p.sound = sound;
    p.eat = eat;
    
    p.getInfo = function() {
        console.log(p.type, p.nik, p.sound, p.eat);
    }
    p.getEat = function() {
        console.log(p.eat);
    }
 
}

var 
    a1 = new Animal("cat", "Tom", "myau", "fish");
    
    a1.getInfo();
    a1.getEat();

    




//  BUTTON

function Button(width, heigh, background, text) {
    this.width = width;
    this.heigh = heigh;
    this.background = background;
    this.text = text;
}

var
    myBtn1 = new Button(150, 50, "#c0c0c0", "OK");
    myBtn1.type = "submit";
    console.log(myBtn1);
