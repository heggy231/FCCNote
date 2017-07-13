## List of typical interview questions asked

# fizzbuzz
algorithm fizzbuzz javascript

Build FizzBuzz. It's a children's game where you count from 1 to 20. Easy, right?

Here's the catch: instead of saying numbers divisible by 3, say "Fizz". And instead of saying numbers divisible by 5, say "Buzz". For numbers divisible by both 3 and 5, say "FizzBuzz". "1, 2, Fizz, 4, Buzz"...and so forth.

# Hint

- But look at that "15"...it says "Fizz" but it should be "FizzBuzz" because it's divisible by both 3 and 5. Oops!

- Add another if statement to your code to check for this special case.
There is a special math trick that will help you here.

If a number is divisible by 3 AND divisible by 5, it is also divisible by 15!

Also, the order of your if statements matters a lot here. Each time your program goes through the for loop, it will check the if conditions in order and do the first one that is true. It will then go on to the next value of i.

So if you put the i%15===0 check at the end, your program will never get to it!

Think about i=15. It will check the first if condition, that is checking that i is divisible evenly by 3. That condition is true, so it will print "Fizz" instead of "FizzBuzz" and move on to i=16. Oops!

One other thing to check—when you're done, make sure the first if block starts with if, the last one starts with else, and every one in between starts with else if.

// Let's get started by using console.log to print out all of the numbers from 1 and 20.
// Add an else if statement to check if the number is divisible by 5, and if it is, print out "Buzz" instead of the number.
//But look at that "15"...it says "Fizz" but it should be "FizzBuzz" because it's divisible by both 3 and 5. Oops!



// see the Hint button if you're not sure how to start
for(var i = 1; i<=100; i++){
    if (i%15 === 0){
        console.log('FizzBuzz');
    } else if (i%3 === 0){
        console.log('Fizz');
    } else if (i%5 === 0) {
        console.log('Buzz');    
    }else {
        console.log(i);        
    }
}

# interview question 1
valueOf