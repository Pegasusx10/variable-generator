//  Print the input string
let option = 'submit';
let text;
function submitbutton() {
  if(document.getElementById("name").value=="")
    return;
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
let sentence = document.getElementById('name').value;
sentence=sentence.trim();
text = sentence.split(" ");
removeWhitespace(text)
console.log(text);
text= text.join("-")
console.log(text);
document.getElementById("preview").innerHTML = text;
}

// Snake case generator
function snakecase() {
  option='Snake';
let sentence = document.getElementById('name').value;
text = sentence.split(" ").join("_");
document.getElementById("preview").innerHTML = text;
removeWhitespace(text)
}

// camel case generator
function camelcase() {
  option='Camel';
  let sentence = document.getElementById('name').value;
  text = sentence.split(" ");
  let camel=text['0'].toLocaleLowerCase();
  for (let index = 1; index < text.length; index++) {
      let temp=text[index];
      temp=temp.toLocaleLowerCase();
      let temp2=temp.charAt(0);
      temp2=temp2.toUpperCase();
      temp2=temp2+temp.slice(1);
      camel=camel+temp2;
  }
  document.getElementById("preview").innerHTML = camel;
  text=camel;
}

//remove space from array
function removeWhitespace(array) {
  return array.filter((item) => item!=' ')
}
