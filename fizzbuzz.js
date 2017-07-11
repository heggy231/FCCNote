// Let's get started by using console.log to print out all of the numbers from 1 and 20.
// Add an else if statement to check if the number is divisible by 5, and if it is, print out "Buzz" instead of the number.

for(var i = 1; i<=20; i++){
  if(i%3 === 0){
//If the number is divisible by 3, print "Fizz".
    console.log('Fizz');

// divisible by 5
  } else if (i%5 === 0) {
    console.log('Buzz');   
//If it's not divisible by 3 or 5, just print the number.
  } else {
    console.log(i);
  }
}