## Math.random(); generates randome decimal
- Generate Random Whole Numbers with JavaScript
Problem: Give us a whole number between 0 and 19.
Hint: Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20.

It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.  Randomly generate 0 and 19.

Use Math.random() to generate a random decimal.
Multiply that random decimal by 20.
Use another function, Math.floor() to round the number down to its nearest whole number.

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // generate and return a random whole number between 0 and 9
  return Math.floor(Math.random()*10);
}

Instead of generating a random number between zero and a given number like we did before, we can generate a random number that falls within a range of two specific numbers.

## To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

Math vocab: 
- mode: The number that appears the most often within a set of numbers
- median: The middle number in a group of ordered numbers
- mean: avg
- range: The difference between the highest (maximum) and lowest (minimum) within a set of numbers

function ourRandomRange(ourMin, ourMax) {
  // get the range of the min and max find the difference and add 1
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(5, 15);

# here more detailed on what is going on with range and adding ourMin.
# we add ourMin to bring the result upto the current range.
function randomRange(myMin, myMax) {
  // get the range function ourRandomRange(ourMin, ourMax) {
  var rand = Math.floor(Math.random() * (myMax - myMin + 1));
  // bring the result upto the current range.
  var result = rand + myMin;	
  return result;
}


// Change these values to test your function
var myRandom = randomRange(5, 15);

## Sift through Text with Regular Expressions

For example, if we wanted to find the word the in the string The dog chased the cat, we could use the following regular expression: /the/gi

Let's break this down a bit:

/ is the start of the regular expression.

the is the pattern we want to match.

/ is the end of the regular expression.

g means global, which causes the pattern to return all matches in the string, not just the first one.

i means that we want to ignore the case (uppercase or lowercase) when searching for the pattern.

- try it out

Select all the occurrences of the word and in testString.

You can do this by replacing the . part of the regular expression with the word and.

// Setup
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;
  

// Only change code below this line.

var expression = /and/gi;  // find and, g(global, find all matches), i(uppercase or lowercase)

// Only change code above this line

// This code counts the matches of expression in testString
var andCount = testString.match(expression).length;

# Find Numbers with Regular Expressions

- Use the \d selector to select the number of numbers in the string, allowing for the possibility of one or more digit.

// Setup
var testString = "There are 3 cats but 4 dogs.";

// Only change code below this line.

// digit selector \d
// Appending a plus sign (+) after the selector, e.g. /\d+/g, allows this regular expression to match one or more digits.
// trailing g is short for 'global', which allows this regular expression to find all matches rather than stop at the first match.
var expression = /\d+/g;  

// Only change code above this line

// This code counts the matches of expression in testString
var digitCount = testString.match(expression).length;
