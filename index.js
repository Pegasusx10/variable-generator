//  Print the
var option='f';
var x;
function pr() {
    switch(option){
      case 'k':
      case 's':
      case 'c':
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"<li>"+x+"</li>"; 
        break;
      default:
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"<li>"+document.getElementById('name').value+"</li>"; 
    
      }
      option='f';
  }

// Kebab case generator
function kebabcase() {
  option='k';
var sentence = document.getElementById('name').value;
x = sentence.split(" ").join("-");
document.getElementById("preview").innerHTML = x;
}

// Snake case generator
function snakecase() {
  option='s';
var sentence = document.getElementById('name').value;
x = sentence.split(" ").join("_");
document.getElementById("preview").innerHTML = x;
}

// camel case generator
function camelcase() {
  option='c';
  var sentence = document.getElementById('name').value;
  var x = sentence.split(" ");
  var camel=x['0'].toLocaleLowerCase();
  for (let index = 1; index < x.length; index++) {
      var temp=x[index];
      temp=temp.toLocaleLowerCase();
      var temp2=temp.charAt(0);
      temp2=temp2.toUpperCase();
      temp2=temp2+temp.slice(1);
      camel=camel+temp2;
  }
  document.getElementById("preview").innerHTML = camel;
}
