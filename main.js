
	var trippleFive = function(){	
	}
	for (var i = 0; i < 3; i++)
	{
		console.log ("five")
	}


var num1 = (3)
var num2 = (4)
var square = function(x, y) {
	return (x*y)

}
console.log(square(num2, num1))

var myString = "Hello";
var otherString = "This is goods"
var stringLength = myString.length;
var otherStringLength = otherString.length;
var lastChar = myString.charAt(stringLength - 1);
var lastChar2 = otherString.charAt(otherStringLength - 1);

var Stringers = function(a, b){
	// lastChar = a, b.charAt(stringLength - 1);
	return [lastChar, lastChar2]
}
console.log(Stringers(myString, otherString))

var nums = (10)
var negNums = (-1)
var wildcard =  function(x, y){
	return (x*y)
	}
console.log(wildcard(nums, negNums))

var Arrays = function( x, y, z){
	var array =[]
	array.push(x)
	array.push(y)
	array.push(z)

	return array
} 

console.log(Arrays(1,2,3))
console.log(Arrays(8,9,10))

var startsWithA = function (str){
	if (str.charAt(0) === "a" )
		return true


else { 
	return false
}
}
console.log(startsWithA("aardvark"))
console.log(startsWithA("bear"))

var excite = function(strs){
	
	return strs +"!!!"
	
}
console.log(excite("yes"))
console.log(excite("go"))

var sun = function(str){
	if (str.includes("sun"))
	
	return true

else return false
}
console.log(sun("sundries"))
console.log(sun("asunder"))
console.log(sun("catapult"))

var tiny = function(x){
	if ((x > 0)&&( x < 1))
		return true
	
	else return false	
}
console.log(tiny(0.3))
console.log(tiny(14))
console.log(tiny(-5))

function hmsToSecondsOnly(tim) {
    var p = tim.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s;
}
console.log(hmsToSecondsOnly("01:30"))
console.log(hmsToSecondsOnly("10:25"))
