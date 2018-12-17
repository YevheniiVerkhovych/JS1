var 
timer		 = 15;
fryingTime   = 60;
cookingTime  = 120;

function Cooker(brand, power, volume){
	var p       	= this;
	p.brand         = brand;
    p.power 		= power;
	p.volume 		= volume;
	
    p.start = function(){
		console.log(brand + " is on." );
	}
	$(".btn").click(p.start);
    
    p.timer = function(){
		console.log("The timer set on " + timer + " minutes.");
	}
	$(".btn1").click(p.timer);
    
    p.frying = function(){
	    console.log(brand + " Starts Frying. Time left: " + fryingTime)
    }
	$(".btn2").click(p.frying);
			
 	p.cooking = function(){
 		console.log(brand + " Starts Cooking. Time left: " + cookingTime);	
 	}
 	$(".btn3").click(p.cooking);
}

var Mulinex = new Cooker("Mulinex",1500, 4);
console.log(Mulinex);

var Tefal = new Cooker("Tefal",2000, 6);
console.log(Tefal);


