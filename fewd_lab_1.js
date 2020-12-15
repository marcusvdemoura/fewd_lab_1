/* author: Marcus Moura
Student ID: 22415
Lecturer: Erika Volodko
*/

// 3. Declare a variable firstName and initialize it with the value of your name.

var firstName = 'Marcus';

//4. Declare a variable favouriteColor and initialize it with a string value

var favouriteColour = 'green';

//5. Declare a variable favouriteFood and assign it with a value. Declare a second variable city and assign it a value.

var city = 'Lubambashi';
var country = 'Congo';
var favouriteFood = 'Strogonoff';
var secondCity = 'Sao Paulo';

//6. Which value does x have after execution of the following code?

var x = 'Tic';
x = 'Tac';
x = 'Toe';

/*Answer: After the execution of the code above, the value assigned to 
the variable x will be 'Toe'. */

//7. Which value does y have after execution of the following code?

var x = 'Laurel';
var y = 'Hardy';
var z = y;
y=x;
x=z;

/* Answer: After the execution of the code above, the value assigned to 
 the variable y is Laurel. */

/* 8. Using console.log() display the value for your firstName, favouriteColor, favouriteFood and city variables as 3 separate statements.
9. Make a single-line comment above your console.log() statement and specify
what the code does.
10. .Below the console.log() statement write down a set of new variables:
phrase, endingPhrase, one, two, three, four, five, six, seven
Assign these values:
*/

//The code below will print a message on the browser console.
console.log(firstName + ' ' + favouriteColour + ' ' 
+ favouriteFood + ' ' + secondCity);

var phrase = 'A rainbow is formed by the sunlight. Shining through rain drops so small. The rain bends the light from the sunshine, and colors the sky for us all.'
var endingPhrase = 'is what we see. Rainbow colours, are made with light bending you see!'
var one = 'Red';
var two = 'orange';
var three = 'yellow';
var four = 'green', five = 'blue', six = 'indigo', seven = 'violet';

/*Write a new console.log() statement below your variable declaration which
displays the text like so in the terminal:
“A rainbow is formed by the sunlight. Shining through rain drops so small. The
rain bends the light from the sunshine, and colors the sky for us all. Red, orange,
yellow, green, blue, indigo, violet is what we see. Rainbow colours, are made
with light bending you see!”
*/

console.log (phrase + ' ' + one + ', ' + two + ', ' + three + ', ' + four
+ ', ' + five + ', ' + six + ', ' + seven+ ' ' + endingPhrase);





