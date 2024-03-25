//                              Chapter # 1  Alert

// Q.1.Write a script to greet your website visitor using JS alert
// box.

alert("Hello!...");

// Q.2. Write a script to display following message on your web
// page:

let message = "Error! Please enter a valid password.";
alert(message);


/* Q.3. Write a script to display following message on your web
page: (Hint : Use line break)*/

let dMessage = "Welcome to JS Land... \n Happy Coding!" ;
alert(dMessage);


/* Q.4. Write a script to display following messages in sequence:*/

let  Js = "Welcom to JS Land...";
alert(Js);

let dMessageS = "Happy Coding! \n Prevent this page from creating additional dialogues.";
alert(dMessageS);


/* Q.5. Generate the following message through browser’s
developer console:*/

let hello = "Hello... I can run JS through my web browser's console";
alert(hello);


// Q.6. Make use of alerts in your new/existing HTML & CSS project.

alert("Hello!... This is my new HTML & CSS project");



/*                              Chapter # 2 VARIABLES FOR STRINGS

Q.1. Declare a variable called username.*/

var userName;

/* Q.2. Declare a variable called myName & assign to it a string
that represents your Full Name.*/

var myName = "Muhammad Arif Khan";

/* Q.3. Write script to
a) Declare a JS variable, titled message.
b) Assign “Hello World” to variable message
c) Display the message in alert box.*/

var message1;
message1 = "Hello World";
alert(message1);

/* Q.4. Write a script to save student’s bio data in JS variables and
show the data in alert boxes.*/

var studentName = "Jhone Doe";
alert(studentName);

var studentAge = 15;
alert(studentAge);

var  certificate = "Certified Mobile Application Development";
alert(certificate);


/* Q.5. Write a script to display the following alert using one JS
variable:*/

var food = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(food);


/* Q.6. Declare a variable called email and assign to it a string that
represents your Email Address(e.g. example@example.com).
Show the blow mentioned message in an alert box.(Hint: use
string concatenation)*/

var email = "strangerfarhan@gmail.com";
alert("My email address is" + " " + email);


/* Q.7. Declare a variable called book & give it the value “A
smarter way to learn JavaScript”. Display the following
message in an alert box:*/

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book" + " " + book);


/* Q.8. Write a script to display this in browser through JS*/

var htmlContent = "Yah! I can write HTML content through JavaScript.";
document.write(htmlContent);


/*                          Chapter # 3 VARIABLES FOR NUMBERS

Q.1. Declare a variable called age & assign to it your age. Show
your age in an alert box.*/

var age = 15;
alert("I am" + " " + age + " " + "years old");


/* Q.2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”.*/
 
var numberOfVisit = 14;
alert("You have visited this site" + " " + numberOfVisit + " " + "times");  


/* Q.3. Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser:*/

var birthYear = 1994;
var msg = "Data type of my declared variable is number"
document.write("My birth year is" + " " + birthYear+ "<br/>" + msg);


/* Q.4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”.*/

var visitor = "<b>John Doe</b> ordered <b>5 T-shirt</b>(s) on XYZ Clothing store <b>100 Nos<b/>.";
document.write(visitor);


/*                      Chapter # 4 VARIABLE NAMES: LEGAL & ILLEGAL

Q.1. Declare 3 variables in one statement.*/
var variable1 = "Muhammad Arif Khan";
var variable2 = "Web Developer";
var variable3 = 43;
document.write(variable1 + " " + variable2 + " " + variable3);


// /*Q.2. Declare 5 legal & 5 illegal variable names.*/

// Legal Variables
// var userName;
// var user_Name;
// var UserName;
// var $userName;
// var username123;

// // Illegal Variables
// var 123username;
// var #userName;
// var -#userName;
// var user@Name;
// var userName*;


/*Q.3. Display this in your browser*/
var rules = "<br/>(a)A heading stating Rules for naming JS variables" 
document.write(rules);
var blank1 = "<br/>(b)Variable names can only contain, $ and _. For example : <b>$my_1stVariable</b> <br/> (c)Variables must begin With a letter, $ or _. For example <b>$name, _name </b>or <b> name </b> <br/> (d)Variable names are case sensitive <br/> (e)Variable names should not be JS keywords";
document.write(blank1);



/*              Chapter # 05 "Math Expressions"*/

// Q.1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var user1 = +prompt("Enter No 1");
var user2 = +prompt("Enter No 2");
var result = user1 + user2
document.write("The sum of "+ user1 + " and " + user2 +" is "+ result)


//  Q.02. Repeat task1 for subtraction, multiplication, division & modulus.

//Substraction
var user1 = +prompt("Enter No 1");
var user2 = +prompt("Enter No 2");
var result = user1 - user2
document.write("The Substraction of "+ user1 + " and " + user2 +" is "+ result)

//Multiplication
var user1 = +prompt("Enter No 1");
var user2 = +prompt("Enter No 2");
var result = user1 * user2
document.write("The Substraction of "+ user1 + " and " + user2 +" is "+ result)

//Division
var user1 = +prompt("Enter No 1");
var user2 = +prompt("Enter No 2");
var result = user1 / user2
document.write("The Division of "+ user1 + " and " + user2 +" is "+ result)

//Modulus
var user1 = +prompt("Enter No 1");
var user2 = +prompt("Enter No 2");
var result = user1 % user2
document.write("The Division of "+ user1 + " and " + user2 +" is "+ result)



//  Q.03. Do the following using JS Mathematic Expressions.
//3.a. Declare a variable.
var num;
//3.b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is: " + num + "<br/>");

//3.c. Initialize the variable with some number.
var num = 5;

//3.d. Show the value of variable in your browser like “Initial value: 5”.
document.write("Initial Value: " + num +"<br/>");

//3.e. Increment the variable.
var num = ++num;

//3.f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is: " + num +"<br/>");

//3.g. Add 7 to the variable.
var num = num + 7;

//3.h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("Value after addition is: " + num +"<br/>");

//3.i. Decrement the variable.
var num = --num;

//3.j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + num +"<br/>");

//3.k Show the remainder after dividing the variable’s value by 3.
    // l. Output : “The remainder is : 0”.

var num = num/4;
var num = num%num;
document.write("Output: The remainder is: " + num);


//  Q.04. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

var movieTicket = 600;
var totalCost  = movieTicket * 5;
document.write("Total cost to buy 5 Tickets to a movie is "+ totalCost +"PKR")


//  Q.05. Write a script to display multiplication table of any number in your browser.

var user = +prompt("Enter Table No:");

for (var i = 1; i <= 10; i++){
    document.write(user + "x" + i + "=" + user*i + "<br/>")
}


//  Q.06. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.

// Temperature Convert to Fahrenheit
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.

var userCelsius = +prompt("Enter Temperature In Centigrade To Change Fahrenheit");
var tempForenheit =   (userCelsius * 9 / 5 ) + 32;

document.write(userCelsius + "°C is "+ tempForenheit +"°F" + "<br/>")


// Temperature Convert to Celsius
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
var userForenheit= +prompt("Enter Temperature In Fahrenheit To Change In Centigrade");
var tempCelsius = (userForenheit - 32)  * 5 / 9;

document.write(userForenheit+ "°F is "+ tempCelsius +"°C")


//  Q. 07. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.


var priceItem1 = 650;
var priceItem2 = 100;
var orderQuantity1 = 3;
var orderQuantity2 = 7;
var shippingCharges = 100;

var resultItem1 = 650 * 3;
console.log(resultItem1)

var resultItem2 = 100 * 7;
console.log(resultItem2)


document.write("Price of item 1 is " + priceItem1 + "<br/>" + "Quantity of item 1 is " + orderQuantity1
+ "<br/>" + "Price of item 2 is " + priceItem2 +"<br//>" + "Quantity of item 2 is " + orderQuantity2
+ "<br/>" +  "Shipping Charges " + shippingCharges + "<br/>" 
)

var result =  resultItem1 + resultItem2 + shippingCharges;

document.write("Total Cost of Your Order is " + result)


// Q.08. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
                    //  Marks Sheet

var totalMarks = +prompt("Enter Total Marks");
var obtainedMarks = +prompt("Enter Obtained Marks");

var percentage = (obtainedMarks / totalMarks ) * 100;

document.write("Total Marks of: " + totalMarks + "<br/>" + "Marks Obtained: " + 
 obtainedMarks + "<br/>" + "Percentage: " + percentage + "%"
)

// Q.09. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
    //  Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
                //  Currency in PKR 

var usDollers = 10;
var saudiRiyal = 25;

var srInpakRupee = 28;
var usInPakRupee = 104.80;

var result1 = srInpakRupee * usDollers;
var result2 = usInPakRupee * saudiRiyal;
var result = result1 + result2;

document.write("Total Currency in PKR: " + result)



//  Q.10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
    //  a. Add 5
    //  b. Multiply by 10 
    //  c. Divide the result by 2 
    //  Perform all calculations in a single expression
               

var calSum = (5 * 10) / 2 ;
document.write("The Sum of All Calculation: " + calSum)


// Q. 11. The Age Calculator: Forgot how old someone is? Calculate it!
    // a. Store the current year in a variable. 
    // b. Store their birth year in a variable. 
    // c. Calculate their 2 possible ages based on the stored values.
    // Output them to the screen like so: “They are either NN or NN years old”.
    //                 //  Age Calculator


var currentYear = +prompt("Enter Your Current Year");
var birthYear = +prompt("Enter Your Birth Year");

var age = currentYear - birthYear;

document.write("Current Year: " + currentYear + "<br/>" + "Birth Year: " + birthYear + "<br/>" + "Your Age is: " + age)


//  Q. 12. The Geometrizer: Calculate properties of a circle.
    // a. Store a radius into a variable.
    // b. Calculate the circumference based on the radius, and output “The circumference is NN”.
    //  (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and 
    //  output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
                //  The Geometrizer




//  Q. 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
    // a. Store your favorite snack into a variable 
    // b. Store your current age into a variable. 
    // c. Store a maximum age into a variable. 
    // d. Store an estimated amount per day (as a number). 
    // e. Calculate how many would you eat total for the rest of your life.
    // Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
//      The Lifetime Supply Calculator:


var favSnacks = "Chips";
var currentAge = 15;
var maxAge = 65;
var age = maxAge - currentAge;
var estimatedPerDay = 3;
var snacksUse = age * estimatedPerDay;

document.write("Favourite Snaks: "+favSnacks + "<br/>" +"Current Age: "+currentAge + "<br/>" + 
"Estimated Maximum Age: "+ maxAge + "<br/>" + "Amount of Snacks Per Day: "+estimatedPerDay +
 "<br/>" + "You will need " + snacksUse + " " + snacks + " to last you until the ripe old age of "+ maxAge )
