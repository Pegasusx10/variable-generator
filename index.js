// Kebab case
const kebabCase = string => string
.replace(/([a-z])([A-Z])/g, "$1-$2")
.replace(/[\s_]+/g, '-')
.toLowerCase();

console.log(kebabCase('xi jing ping'));
console.log(kebabCase('Shinzo abe'));
console.log(kebabCase('Adolf dassler Hitler'));


// Snake case
function snake_case_string(str) {
    return str && str.match(
/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(s => s.toLowerCase())
        .join('_');
}

console.log(snake_case_string('xi jing ping'));
console.log(snake_case_string('Shinzo abe'));
console.log(snake_case_string('Adolf dassler Hitler'));


// camel case
camelize = function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
  }

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
