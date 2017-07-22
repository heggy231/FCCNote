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

# Find Whitespace with Regular Expressions (use \s to select all the whitespace characters in the string
We can also use regular expression selectors like \s to find whitespace in a string.

The whitespace characters are " " (space), \r (the carriage return), \n (newline), \t (tab), and \f (the form feed).

The whitespace regular expression looks like this:

/\s+/g

// Setup
var testString = "How many spaces are there in this sentence?";

// Only change code below this line.

var expression = /\s+/g;  // output: 7

// Only change code above this line

// This code counts the matches of expression in testString
var spaceCount = testString.match(expression).length;

#Invert Regular Expression Matches with JavaScript
You can invert any match by using the uppercase version of the regular expression selector.

For example, \s will match any whitespace, and \S will match anything that isn't whitespace.

Instructions
Use /\S/g to count the number of non-whitespace characters in testString.
var testString = "How many non-space characters are there in this sentence?";

// count the number of non-whitespace characters in testString.
// note there is no trailing + for finding non-whitespace characters
var expression = /\S/g;  

// This code counts the matches of expression in testString
var nonSpaceCount = testString.match(expression).length;

## Object Oriented Programming
# Declare JavaScript Objects as Variables

Give your motorBike object a wheels, engines and seats attribute and set them to numbers.
var car = {
  "wheels":4,
  "engines":1,
  "seats":5
};

var motorBike = {

  // Only change code below this line.
  "wheels":2,
  "engines":1,
  "seats":1
};

# Construct JavaScript Objects with Functions
We are also able to create objects using constructor functions.

A constructor function is given a capitalized name to make it clear that it is a constructor.

Here's an example of a constructor function:

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

In a constructor the this variable refers to the new object being created by the constructor. So when we write,

  this.wheels = 4;

inside of the constructor we are giving the new object it creates a property called wheels with a value of 4.

You can think of a constructor as a description for the object it will create.

Have your MotorBike constructor describe an object with wheels, engines and seats properties and set them to numbers.


# Make Instances of Objects with a Constructor Function
Now let's put that great constructor function we made in the last lesson to use!

To use a constructor function we call it with the new keyword in front of it like:

var myCar = new Car();

myCar is now an instance of the Car constructor that looks like the object it described:

{
  wheels: 4,
  engines: 1,
  seats: 5
}
Note that it is important to use the new keyword when calling a constructor. This is how Javascript knows to create a new object and that all the references to this inside the constructor should be referring to this new object.

Now, once the myCar instance is created it can be used like any other object and can have its properties accessed and modified the same way you would usually. For example:

myCar.turboType = "twin";

Our myCar variable now has a property turboType with a value of "twin".

In the editor, use the Car constructor to create a new instance and assign it to myCar.

Then give myCar a nickname property with a string value.

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.
// To use a constructor function we call it with the new keyword in front
// myCar is now an instance of the Car constructor
var myCar = new Car();
myCar.nickname = "BeBop";

## Make Unique Objects by Passing Parameters to our Constructor
The constructor we have is great, but what if we don't always want to create the same object?

To solve this we can add parameters to our constructor. We do this like the following example:

var Car = function(wheels, seats, engines) {
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};
Now we can pass in arguments when we call our constructor.

var myCar = new Car(6, 3, 1);

This code will create an object that uses the arguments we passed in and looks like:

{
  wheels: 6,
  seats: 3,
  engines: 1
}
Now give it a try yourself! Alter the Car constructor to use parameters to assign values to the wheels, seats, and engines properties.

Then call your new constructor with three number arguments and assign it to myCar to see it in action.


var Car = function(wheels, seats, engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

//Try it out here
var myCar = new Car (4,2,1);

## Make Object Properties Private
Objects have their own attributes, called properties, and their own functions, called methods.

In the previous challenges, we used the this keyword to reference public properties of the current object.

We can also create private properties and private methods, which aren't accessible from outside the object.

To do this, we create the variable inside the constructor using the var keyword we're familiar with, instead of creating it as a property of this.

This is useful for when we need to store information about an object but we want to control how it is used by outside code.

For example, what if we want to store the speed our car is traveling at but we only want outside code to be able to modify it by accelerating or decelerating, so the speed changes in a controlled way?

In the editor you can see an example of a Car constructor that implements this pattern.

Now try it yourself! Modify the Bike constructor to have a private property called gear and two public methods called getGear and setGear to get and set that value.

var Bike = function() {

  // private variable gear
  var gear = 2;

  // update gear 
  this.setGear = function(change) {
    gear = change;
  };

  // get gear
  this.getGear = function() {
    return gear;
  }
};

// creates new obj myBike of Bike {setGear: function, getGear: function}
var myBike = new Bike();
myBike.setGear(4); // gear is 6
myBike.getGear();  // 6

var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var myCar = new Car();
myCar.accelerate(20); // speed is 30
myCar.decelerate(); // decelerate -5 now speed is 25
myCar.getSpeed(); // output: 25

## Iterate over Arrays with map

The map method is a convenient way to iterate through arrays. Here's an example usage:

var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4;
});
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray);  // returns [1, 2, 3]
The map method will iterate through every element of the array, creating a new array with values that have been modified by the callback function, and return it. Note that it does not modify the original array.

In our example the callback only uses the value of the array element (the val argument) but your callback can also include arguments for the index and array being acted on.

Use the map function to add 3 to every value in the variable oldArray, and save the results into variable newArray. oldArray should not change.


var oldArray = [1,2,3,4,5];

// Only change code below this line.
// map function to add 3 to every value in the variable oldArray
// oldArray doesn't change

var newArray = oldArray.map(function(val){
  return val + 3;
  
});

// output: [4, 5, 6, 7, 8]

## Condense arrays with reduce

The array method reduce is used to iterate through an array and condense it into one value.

To use reduce you pass in a callback whose arguments are an accumulator (in this case, previousVal) and the current value (currentVal).

The accumulator is like a total that reduce keeps track of after each operation. The current value is just the next element in the array you're iterating through.

reduce has an optional second argument which can be used to set the initial value of the accumulator. If no initial value is specified it will be the first array element and currentVal will start with the second array element.

Here is an example of reduce being used to subtract all the values of an array:

var singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal - currentVal;
}, 0);
Use the reduce method to sum all the values in array and assign it to singleVal.

var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.

// reduce takes in callback whose arguments are an accumulator
// in this case previousVal, currentVal
singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
  // optional second argument: initial val
}, 0);

## Filter arrays with filter method
The filter method is used to iterate through an array and filter out elements where a given condition is not true.

filter is passed a callback function which takes the current value (we've called that val) as an argument.

Any array element for which the callback returns true will be kept and elements that return false will be filtered out.

The following code is an example of using filter to remove array elements that are equal to five:

Note: We omit the second and third arguments since we only need the value

array = array.filter(function(val) {
  return val !== 5;
});
Use filter to create a new array with all the values from oldArray which are less than 6. The oldArray should not change.

- Description
filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the callback test are simply skipped, and are not included in the new array.

callback is invoked with three arguments:

1. the value of the element
2. the index of the element
3. the Array object being traversed


var oldArray = [1,2,3,4,5,6,7,8,9,10];

// create a new array with all the values from oldArray 
// which are less than 6. The oldArray should not change.

var newArray = oldArray.filter(function(val) {
  return val < 6;
});

// output: [1,2,3,4,5]

## Sort Arrays with sort

You can use the method sort to easily sort the values in an array alphabetically or numerically.

Unlike the previous array methods we have been looking at, sort actually alters the array in place. However, it also returns this sorted array.

sort can be passed a compare function as a callback. The compare function should return a negative number if a should be before b, a positive number if a should be after b, or 0 if they are equal.

If no compare (callback) function is passed in, it will convert the values to strings and sort alphabetically.

Here is an example of using sort with a compare function that will sort the elements from smallest to largest number:

var array = [1, 12, 21, 2];
array.sort(function(a, b) {
  return a - b;
});

Use sort to sort array from largest to smallest.

function compareNumbers(a, b) {
  // sort the array descending (lg to sm)
  return b - a;
}

Further explanation on the .sort() method can be found here.

​arr.sort(compareFunction)
compareFunction (optional) defines the sort order
 To compare numbers instead of strings, the compare function can simply subtract b from a. The following function will sort the array ascending (if it doesn't contain Infinity and NaN):

function compareNumbers(a, b) {
  // sort the array ascending (small to largest)
  return a - b;
}

Note: 
var array = [1, 12, 21, 2];
array.sort();
// output: (4) [1, 12, 2, 21]
// Note that 10 comes before 2,
// because '10' comes before '2' in Unicode code point order.

Therefore, we use function compareNumbers (a,b) {return a-b} // ascending sm to lg
function compareNumbers (a,b) {return b - a} // descending lg to sm

## Reverse Arrays with reverse

You can use the reverse method to reverse the elements of an array.

reverse is another array method that alters the array in place, but it also returns the reversed array.

var myArray = [1, 2, 3];
myArray.reverse();
returns [3, 2, 1] // myArray gets modified by .reverse()

Use reverse to reverse the array variable and assign it to newArray.

var array = [1,2,3,4,5,6,7];
var newArray = [];

// Only change code below this line.

newArray = array.reverse();
// output: [7, 6, 5, 4, 3, 2, 1]

## Concatenate Arrays with concat
concat can be used to merge the contents of two arrays into one.
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

concat takes an array as an argument and returns a new array with the elements of this array concatenated onto the end.

Here is an example of concat being used to concatenate otherArray onto the end of oldArray:

newArray = oldArray.concat(otherArray);

Use .concat() to concatenate concatMe onto the end of oldArray and assign it to newArray.

var oldArray = [1,2,3];
var newArray = [];

var concatMe = [4,5,6];

// Only change code below this line.

newArray = oldArray.concat(concatMe);
// output: [1,2,3,4,5,6]

## Split Strings with split

You can use the split method to split a string into an array.

split uses the argument you pass in as a delimiter to determine which points the string should be split at.

Here is an example of split being used to split a string at every s character:

var string = "split me into an shiny array";
var array = [];
var array = string.split('s'); //s get deleted and 

// output: ["", "plit me into an ", "hiny array"]

Use split to create an array of words from string and assign it to array.

var string = "Split me into an array";
var array = [];

// Only change code below this line.

array = string.split(" ");

// ["Split", "me", "into", "an", "array"]

## Join Strings with join

We can use the join method to join each element of an array into a string separated by whatever delimiter you provide as an argument.

The following is an example of using join to join all of the elements of an array into a string with all the elements separated by word and:

var veggies = ["Celery", "Radish", "Carrot", "Potato"];
var salad = veggies.join(" and ");
console.log(salad); // "Celery and Radish and Carrot and Potato"

var joinMe = ["Split","me","into","an","array"];
var joinedString = '';
// join array into string with space inbtn
joinedString = joinMe.join(" "); // it outputs without calling joinedString 
                                 // output: "Split me into an array" 

######################################################################################
## algorithm basic

## Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object
String.prototype.split()
Array.prototype.reverse()
Array.prototype.join()


function reverseString(str) {
  var arrStr = [];
  // split (convert string into array since str is immutable) 
  // every letter of str but orignal str remains the same
  arrStr = str.split(''); // ["h", "e", "l", "l", "o"]
  // reverse arrStr
  // this reverse overwrites arrStr reversed order
  arrStr.reverse(); 
  // join into string at every letter
  str = arrStr.join('');
  return str;
}

reverseString("hello");


# Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.replace()
String.prototype.toLowerCase()


function palindrome(str) {
  // regex / /g global match multiple
  // regex [ ] start of character set 
  // first replace any nonword char
  // second make it toLowerCase
  // Compare it to reverse order of the word
  return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
  
}



palindrome("eye");

https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-check-for-palindromes/16004


- forEach to iterate this 

arrStr = ["fox", "went", "outside"];

function getEachLength (item) {
  console.log(item.length);
}

arrStr.forEach(getEachLength);



- Get the longest str
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
Here are some helpful links:

String.prototype.split()
String.length


function findLongestWord (str) {

  // maxLength is holding pot for each time 
  // iterate compare whose longer
  var maxLength = 0;

  // str gets split into array at empty space
  // arrStr
  var arrStr = str.split (" ");
  // output: ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

  // loop thru the new array arrStr
  for (var i = 0; i < arrStr.length; i++) {
    
    // each arrStr's ith position's length, compare with maxLength
    // only pass when current ith position item's length bigger than
    // maxLength
    if (arrStr[i].length > maxLength) {
  
      // update maxLength with new longest length
      maxLength = arrStr[i].length;
    }
  }

  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


- forEach toUpperCase
var str = "I'm a little tea pot";
var convStr = str.split(' ');
convStr; 
(5) ["I'm", "a", "little", "tea", "pot"]

function firstLetterUpper (item){
  console.log(item[0].toUpperCase());
}

convStr.forEach(firstLetterUpper);
I
A
L
T
P


- Title Case a Sentence

https://medium.com/@hugh.winchester/title-case-a-sentence-18c43fe1496f
https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-title-case-a-sentence/16088

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

To iterate over objects, we use a for in loop
var instructor = {
  name: "Heggy",
  hobby: "Algorithm",
  afterWork: "feeding cats"
}

for (var singleKey in instructor) {
  console.log(instructor[singleKey]);
}

- for..in loop key value pair challenge
var nameAndHobbies = {
	heggy: "coding",
	frankie: "building",
	erin: "running",
	jimmy: "singing"
};

// Output should be:
// coding => heggy
// building => frankie ... etc.

for ( var key in nameAndHobbies ) {
	console.log(nameAndHobbies[key] + ' => ' + key) 
}

// In order to print out key of each obj => ref as key
// Key is a variable that will be assigned to each key(property) in namesAndHobbies
// To print out each values use bracket notation since properties are getting accessed 
// 	through using variable.  ex: nameAndHobbies[variable]


// create custome made replaceAt method (0, 'T')
String.prototype.replaceAt = function(index, character) {
  
    // 'this' stands for newTitle[position] => ex 'tea'
    // this.substr (0, index which is 0)
    // substr (0, number of char to extract) => substr(0,0) means start at 0 but extract none(0)
    // character => T from newTitle[position].charAt(0).toUpperCase() means grab first char and make it upperCase
    // this.substr(1) => extract string start at index 1, (no secnd argmt defaults to the all the rest)
    // output: Tea
    return this.substr(0, index) + character + this.substr(index + character.length);
};


# Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
# hint: String.prototype.split(' ')

function titleCase(str) {
    var newTitle = str.split(' ');
    var updatedTitle = [];
  
    // for...in obj iteration for (var key in obj)
    for (var position in newTitle) {
        
        // newTitle[position]
        // .replaceAt custome made method called with index = 0 and first char becoming upperCase ('T')
        // newTitle[position].charAt(0) => extract single charAt position 0 (output: t from tea)
        // updateTitle[position] each position get new word inside array
        updatedTitle[position] = newTitle[position].toLowerCase().replaceAt(0, newTitle[position].charAt(0).toUpperCase());
    }
    // .join change updateTitle back into string from array of str
    // .join(' ') joins with spacing in betwn
    return updatedTitle.join(' ');
}

//debugger;
titleCase("I'm a little tea pot");