# NOTES

## HOW TO OPEN THE CONSOLE

...

## VARIABLES, FUNCTIONS, INTRO IN CONSOLE

// alert is a built-in JavaScript function
// Let's run it in the console like this:

```
// Now let's run a JavaScript function!

// Type this into the console and hit enter:
alert("Hello, world!");
```

```
// Define a new variable with the "var" keyword like this:
var myName = "Liz";
```

```
// Once you define a variable,
// you can change it or reuse it:
myName = "Awesome McAwesomePants";
```

```
// You can use variables inside of functions like this:
alert(myName);
```

// Text values are called "strings" in computer science jargon,
// and you can string them together like this:
```
var myGreeting = "Hi, my name is " + myName + "!";
```

// You can create your own JavaScript functions too!
// Functions are made in two steps:
// 1. Defining functions, and 2. calling (or using) functions

```
// Defining a very simple function:
function myCoolFunction() {
	alert("Running my cool function!");
}

// Calling our function to actually use it:
myCoolFunction();
```

// Your function can also use variables!
// Let's change the definition:
```
function myCoolFunction(name, message) {
	alert("Hi, " + name + "! Your message is: " + message);
}

myCoolFunction("Liz", "I know JavaScript!");
```

## INTERACTING WITH THE PAGE VIA CONSOLE


```
// getElementByID() is a built-in function that lets us
// access an element of our web page with a certain ID:

var myButton = document.getElementById("testbutton");

// The HTML for the button on this page looks like this:
// <button id="testbutton">Click me!</button>
```

```
// Let's do the same with the box below the button:
var displayBox = document.getElementById("testdisplay");
```


```
// We can change the text inside an HTML element:
displayBox.textContent = "testing one two three!";

```


```
// Now let's define a new function that does it:

function sayHello() {
	displayBox.textContent = "Hello there!";
};
```

```
// And let's call the function to check that it works:

sayHello();
```


// Finally, let's make this function run when we click the button!

```
// addEventListener() is another built-in function
// that lets us do stuff when certain events happen:
myButton.addEventListener("click", sayHello);
```

// It has 3 parts:
//   1) the HTML element where the event happens (myButton)
//   2) the type of event ("click")
//		https://developer.mozilla.org/en-US/docs/Web/Events
//   3) the function to run when the event happens (sayHello)

// Notice that we're treating the entire function like a variable!
// That lets us use functions in other functions. Cool right?


// FULL CODE, EXAMPLE HERE: http://codepen.io/LearnToCodeLA/pen/ZONyjP


var myButton = document.getElementById("testbutton");
var displayBox = document.getElementById("testdisplay");

function sayHello() {
	displayBox.textContent = "Hello there!";
};

myButton.addEventListener("click", sayHello);
