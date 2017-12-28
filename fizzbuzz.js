var heading = 'Fizzbuzz Game: ';
var rule_for_3 = 'Given the number can divide equally into 3, then the output should be `Fizz`';
var rule_for_5 = 'Given the number can divide equally into 5, then the output should be `Buzz`';
var rule_for_15 = 'Given the number can divide equally into 15, then the output should be `FizzBuzz`';
var general_rule = 'Given the number does not match the above criteria it should just output the nunber';

function sleep (time) {
  return new Promise( (resolve) => setTimeout(resolve, time) );
}

console.log(heading);

var rules = [rule_for_3, rule_for_5, rule_for_15, general_rule];

rules.forEach(function(rule) {
  console.log(rule);
});


var numbers = Array(100).fill().map( (v,i) => i+1 )

sleep(5000).then(() => {
  numbers.forEach(function(number) {
    if(number % 15 === 0){
      return console.log('FizzBuzz');
    } else if(number % 5 === 0){
      return console.log('Buzz');
    } else if(number % 3 === 0){
      return console.log('Fizz');
    } else {
      return console.log(number);  
    }
  });
});
