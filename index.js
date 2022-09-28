//  Print the input string
var option = 'submit';
var text;
function submitbutton() {
    switch(option){
      case 'Kebab':
      case 'Snake':
      case 'Camel':
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "<li>" + text + "</li>"; 
        break;
      default:
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "<li>" + document.getElementById('name').value + "</li>"; 
    
      }
      option ='submit';
  }

// Kebab case generator
function kebabcase() {
  option = 'Kebab';
var sentence = document.getElementById('name').value;
text = sentence.split(" ").join("-");
document.getElementById("preview").innerHTML = text;
}

// Snake case generator
function snakecase() {
  option='Snake';
var sentence = document.getElementById('name').value;
text = sentence.split(" ").join("_");
document.getElementById("preview").innerHTML = text;
}

// camel case generator
function camelcase() {
  option='Camel';
  var sentence = document.getElementById('name').value;
  var text = sentence.split(" ");
  var camel=text['0'].toLocaleLowerCase();
  for (let index = 1; index < text.length; index++) {
      var temp=text[index];
      temp=temp.toLocaleLowerCase();
      var temp2=temp.charAt(0);
      temp2=temp2.toUpperCase();
      temp2=temp2+temp.slice(1);
      camel=camel+temp2;
  }
  document.getElementById("preview").innerHTML = camel;
}
