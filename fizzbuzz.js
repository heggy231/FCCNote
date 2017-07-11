// Let's get started by using console.log to print out all of the numbers from 1 and 20.

for(var i = 1; i<=20; i++){
  if(i%3===0){
//If the number is divisible by 3, print "Fizz".
    console.log('Fizz');
//If it's not divisible by 3, just print the number.
  } else {
    console.log(i);
  }
}