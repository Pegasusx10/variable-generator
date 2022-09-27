//  Print the text
function pr() {
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"<li>"+document.getElementById('name').value+"</li>"; 
  }

// Kebab case generator
function kebabcase() {
var sentence = document.getElementById('name').value;
// var words = sentence.split("A-Z")
var x = sentence.split(" ").join("-");
document.getElementById("preview").innerHTML = x;
}

// Snake case generator
function snakecase() {
var sentence = document.getElementById('name').value;
// var words = sentence.split("A-Z")
var x = sentence.split(" ").join("_");
document.getElementById("preview").innerHTML = x;
}

// camel case generator
function cAMELCASE(){}

camelize = function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
}
