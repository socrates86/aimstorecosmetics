// Reading from Javascript.Info and Practices //

// javascript fundamentals: interaction - alert, prompt and confirm//


// alert("hello");

// let age = prompt('how old are you?', 20);
// alert(`you are ${age } years old!`);

// let isboss = confirm('are you the Boss?');
// alert(isboss);

let user = 'James',
    age = 29,
    state = 'USA';
console.log(`hey ${user} you are 29 this month; congrats`);

// Unary, Binary and Operand //

// For Unary

// let x = 1;
// a = -x;
// console.log(x);

//For Binary

// let z = 1, y = 3;
// console.log(y - z);

// Maths: Remainder % //

console.log(5 % 2);
console.log(10 % 5);

// Maths: Exponentiation //

console.log(2 ** 2);
console.log(2 ** 3);
console.log(2 ** 4);

// String Concatenation with Binary + //

let s = "my" + "Father";
console.log(s);

console.log('1' + 4);
console.log(1 + "2");
console.log(2 + 2 + "1");
console.log('1' + 2 + 2);

// Subtraction and Division //

console.log(6 - '2');
console.log('6' / '2');

// Numeric Conversion, Unary + //

let i = 1;
console.log(+i);

// Here, Adding them as Strings //

let apples = "3";
let oranges = "5";
console.log(apples + oranges);

// Here, Treating them as Number //

let pineapples = "3";
let bananas = "5";
console.log(+pineapples + +bananas);
console.log(Number(pineapples) + Number(bananas));

// Data Types Practice Here //

 let Morrison = {  // Methods of Primitives //
    name: "Morrison",
    sayHello: function() {
      alert("hello Guys!");
    }
};

Morrison.sayHello();
 

 /* let str = "hello";
alert(str.toUpperCase()); */
 

 /* let p = 1.2345;
alert(p.toFixed(3)); */


// Numbers //

 /* let num = 255;  // toString Example
alert(num.toString(16));
alert(num.toString(2)); */
 

     /* let num = 1.2345;  // Rounding Example
    alert(Math.round(num * 100) / 10 );  */
 

    /* let num = 12.34;
    alert(num.toFixed(1)); */

    /* alert(parseInt("100px"));  // parseInt Example
    alert(parseFloat("12.3em"));

    alert(parseInt("12.3"));
    alert(parseFloat("12.3.4")); 
 */

    // alert(parseInt("ff", 16));

     /* alert( Math.random() ); // Math Function Example
    alert( Math.random() );
    alert( Math.random() );  */

     /* alert(Math.max(3, 5,-8, 2) )
    alert(Math.min(2, 7) );  */
        
    // alert(Math.pow(2, 10) );


    

// Rest Parameters and Spread Syntax //


 /* function sum(a, b) {    // Rest Parameters Examples //
    return a + b;
}

alert(sum(1, 2, 3, 4)); 
 */


 /* function sumAll (...args) {
    let sum = 0;
    for(let arg of args) sum += arg;

    return sum;
}
alert (sumAll(1, 2, 3, 6)); */ 



  function showName ( firstName,  lastName, ...titles ) {
            alert( firstName + ' ' + lastName );

            alert(titles[0]);
            alert(titles[1]);
            alert(titles.length);
        }

        showName('julius', 'ceaser', 'consul', 'imperator');
 
        /* function showName(){
            alert(arguments.length);
            alert(arguments[0]);
            alert(arguments[1]);
        }
        
        showName('Morrison', 'Anyanwu' ); */


        /* let arr = [3, 5, 2];   // Spread Syntax Examples //

        alert(Math.max(...arr)); */

             
        /* let arg1 = [1, 2, -3, 4];
        let arg2 = [9, -8, 6, 5];

        alert(Math.max(...arg1, ...arg2));
 */


        /* let arr = [3, 1, 5];
        let arr2 = [8, 7, 6, 15];

        let merged = [0, ...arr, 2, ...arr2];
        alert(merged);
 */

        

// Operator Precedence //





// PRACTICING WITH BOB TABOR STARTS HERE //

console.log('hi');

/* let x = 7;
let y = 3;
let z = x + y;
console.log('answer: ' + z); */

// 1. Variables Tutorial //

// 2. Data Types Tutorial //

//a. Number//
/* let x = 7;
console.log(typeof (x)); */

//b. Boolean//
/* let y = true;
console.log(typeof (y));
 */
//c. String//
/* let z = 'James';
console.log(typeof (firstz)); */

//d. Undefined//
/* let a;
console.log(a);
console.log(typeof a); */

// 3. Type Coercion and Coversion Tutorial//

/* let a = 7;
let b = '6';
b = parseInt(b, 10);
let c = a + b;
console.log('answer: ' + c);

let d = parseInt('bob', 10);
let e = isNaN(d);
console.log(d);
console.log(e); */

// 4. Expressions and Operators Tutorial// 

// Types of Expressions 
//............................

// 4.1. Variable Declaration
//let a;

// 4.2. Assign a Value
//a = 4;

// 4.3. Perform an evaluation that returns a single value
// b + c 
/*
let b = 2;
let c = 6;
let a = b + c;
*/
// Operators 
//..............................
// a. categories Operators
// b. Assignment =
// c. Arithmetic +, -, *, /, %
// d. Increment/Decrement ++, --
// e. Function Invocation operators ()
// f. Logical and: && or: ||
// g. Member accessor operator
// h. Code block operators { }
// i. Array element access operators [ ]
/*
var p = 4;
p--;
console.log(--p);

var p = 1;
p++;
console.log(++p);
*/

// String ' ' +
//............
// Precedence
//............
/* var b = (1 + 2) * 3;
console.log(b); */

// 5. Arrays Tutorial //

let n = [4, 8, 15, 16, 23, 42];
let m = ['david', 'michael', 'james', 'sam'];
/*
console.log(n[0]);
console.log(n[1]);
console.log(n);
*/

// 5.1. changing the value of the elements
n[0] = 4;
console.log(n);

m[3] = 'mark';
console.log(m);

// object
console.log(typeof (n));

// using different datatypes

let q = [7, 'marcus', true];
console.log(q);
console.log(typeof q);

console.log(m[4]); // undefined
console.log(n.length); // actual number, not zero base
console.log(m.length); // actual number, not zero base

n.push(77);
console.log(n);  // here is to add a value
console.log(n.length);

n.pop();
n.pop();
n.pop();   // here is to remove a value
n.pop();
console.log(n);
console.log(n.length);

// 6. Function Declaration Tutorial//
/*
function sayHello() {
    console.log('...............');
    console.log('hello!');
    console.log('...............');
}
*/

// sayHello();

/*
let l = sayHello;
l();
l();
l();
l();
*/


function sayHello(name) {
    console.log('...............');
    console.log('hello ' + name + '!');
    console.log('...............');
}
sayHello('Michael');
sayHello('George');
sayHello('Mr Moses');
sayHello('James');


function calculatetax(amount) {
    let result = amount * 0.0825;
    return result;
}

let tax = calculatetax(1000);
console.log(tax);

// 6.1. Function Expressions //

setTimeout(function () {
    console.log('I waited for 2 seconds');
}, 2000);

/*
let counter = 0;
function timeout() {
    setTimeout(function () {
        console.log('hello ' + counter++);
        timeout();
    }, 2000);
}
timeout();
//ctrl + c
*/
(function () {
    console.log('immediately invoked function expression (IIFE');
})();

// 7. Decision Statements //

let count = 3; // If statement 
if (count == 4) {
    console.log('count is 4');
} else if (count > 4) {
    console.log('count is greater than 4');
} else if (count < 4) {
    console.log('count is less than 4');
} else {
    console.log('count is NOT 4');
};

let hero = "superman"; // Switch Statement //
switch (hero) {
    case 'superman':
        console.log('super strength');
        console.log('x-ray vision');
        break;
    case 'batman':
        console.log('intelligence');
        console.log('fighting skills');
        break;
    default:
        console.log('member of the JLA');
};
   
/*
let u = 1, v = '1';
 let result = (u==v) ? 'equal' : 'inequal'; // equality //
 let result = (u===v) ? 'equal' : 'inequal'; // Strict Equality //
 let result = (u !== v) ? 'not equal' : 'equal';
 console.log(result);
 let result = (u==v) ? 'equal' : 'inequal'; // Strict Equality //
     */

// 8. Iteration Statement Tutorial //

/*
for (i = 0; i < 10; i++) {
    console.log(i);
}
*/

/*
let p = [4, 8, 16, 23, 42];
for (i = 0; i < p.length; i++) {
    console.log(p[i]);
}
*/

/*
let p = [4, 8, 16, 23, 42];
for (let b = 0; b < p.length; b++) {
    const c = p[b];
    console.log(c);
}
    */

/*
let p = 1;
while (p < 10) {
   console.log(p++);

   if (p == 7)
   break;
}
*/

/*
// 9. Basics of Scope //

let p = 'first';

function scopetest() {
    console.log(p);
    p = 'changed';

    let q = 'second';
    if (q != ''){
        console.log(q);
        console.log('inside if: ' + q);
    }
}
scopetest();
*/

// 10. Returning Functions from Function //

function one() {
    return 'one';
}

/*
let value = one();
console.log(value);
*/

// console.log(one());

// let value = one; 
// console.log(typeof value);
// console.log(typeof one);
// console.log(value());

/*
function two() {
    return function () {
        console.log('two');
    }
}
let myfunction = two();
myfunction();
*/

// 11. Object Literals //

/*
let car = {
    make: 'bmw',
    model: '745l1',
    year: 2010,
    getPrice: function () {
        return 5000;
    },
    printDescription() {
        console.log(this.make + ' ' + this.model);
    }
}
car.printDescription();
console.log(car.year);

var anothercar = {};
anothercar.whatever = 'bob';
console.log(anothercar.whatever);
*/

/*
var w = {
    myProperty: {x: 'hey'}
}
console.log(w.myProperty.x);
*/

/*
var o = {
    myProperty: [
        {u: 'this'},
        {v: 'can' },
        {w: 'be '},
        {x: 'crazy'}
    ]
};
console.log(o);
*/

// 12. Module Pattern and Revealing Module Pattern //

/* var counter = (function() {
    // private stuff
    let count = 0;

    function print(message) {
        console.log(message + '---' + count); 
    }

    // return an object
    return{
        // value: count,

        get: function() { return count; },

        set: function(value) { count = value; },

         increment: function() {
             count += 1;
             print('After increment: ');
         },

            reset: function() {
                print('Before reset: ');
                count = 0;
                print('After reset: ');
            }
        
    } 
})();
counter.increment();
counter.increment();
counter.increment();

//console.log(counter.value);

counter.set(7);
console.log(counter.get());

counter.reset(); */

// 12. Closures //

function sayHello(name) {
    return function() {
        console.log('How do you do ' + name)
    }
}
let bob = sayHello('Bob');
let mike = sayHello('MIke');
let morris = sayHello('Morris');

bob();
mike();
morris();

// 13. 'this' Keyword //

/*
function first() {
    return this;
}

//console.log(first() === global);

// this is Node's global object
// because that's where the
// first method was called

function second() {
    'use strict';

    return this;
}
*/

//console.log(second() === global);
//console.log(second() === undefined);

// 'this' keyword depends on HOW a function is called

// An object can be passed as the first argument to call 
// or apply and this will be bound to it

/* let myObject = { value: 'my Object'};

// this property is set on the global object
//let global = window;
global.value = 'Global object';
 */
/* function third(name){
    // Return something different depending on how 
    // we call this method 
    return this.value; 

};
console.log(third()); 

// Both call and apply allow you to explicitly set
// what you want to represent 'this'. The diffrence
// is in how additional arguments to the function 
// are sent

console.log(third.call(myObject, 'morris'));
console.log(third.apply(myObject, ['morris']));

function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'morris',
    lastName: 'anyanwu',
    print: fifth,
};

let customer2 = {
    firstName: 'chinua',
    lastName: 'achebe',
    print: fifth,
};

customer2.print();
customer1.print();

// 14. Destructuring //

let a, b, c, d, e;

let names = ['david', 'sam', 'michael', 'morris', 'leo'];


/* [ a, b, c, d, e] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(e);
console.log(d); */

/* [ a, b, ...others] = names;
console.log(a);
console.log(b);
console.log(others); */
  
let year, model;
({year, model} = { 

























    
    make: 'BMW',
    model:'745li',
    year: 2010,
    //value: 5000
});

console.log(year);
console.log(model);
// console.log(make);

// 15. String Template Literals //

/* let name = 'Morris';
console.log(`hi ${name}`);

let sentence =   `what would you want us to do for you?
    we will be glad to do ok.
Do give us a try by dropping a message while we respond as early as possible. Thanks`
   console.log(sentence);
 */
   function getReasonCount() { return 1; }

   let interpolation = `Give me ${ (getReasonCount() == 1) ? 'one good reason' : 'a few reason' } to do this. `;
   console.log(interpolation);

   // 16. Regular Expressions //

     // let pattern = /xyz/;
     // console.log(pattern);
    //  console.log(typeof pattern);

    // let value = 'this is xyz a test.';

    //  console.log(pattern.test(value));
 
    // console.log(value.replace(pattern, 'just'));

    // console.log(value.match(pattern));
    /* let match = value.match(pattern);
    console.log(match.index); */

    // 15. Built-In Natives //

    let myString = new String ('howdy');
      //  console.log(myString);
         // console.log(myString.toString());
         // console.log(typeof myString);
         
         /*
         let myPrimitive = 'THIS IS CRAZY!';
         console.log(typeof myPrimitive);
         myPrimitive = myPrimitive.toLowerCase();
         console.log(typeof myPrimitive);
         */

         let myNumber = new Number(7);
         console.log(typeof myNumber);
         let myPrimitive = myNumber.valueOf();
         console.log(typeof myPrimitive);

         // 16. Constructor Function Calls with the new Keyword //
            /*
         function Car  (make, model, year) {
             this.make = make;
             this.model = model;
             this.year = year;
         }

         let ourCar = new Car ('bmw', '745li', 2010);
         console.log(ourCar);

         function MyFunction() {  // another example
             console.log('I am a simple function');
         }

         let myfunction = new MyFunction();
             console.log(typeof MyFunction);
             */  

         // 17. Objects and the Prototype Chain //
                    /* 
                 let originalCar = {
                     make: 'bmw',
                     model: '745li',
                     year: 2010
                 };
                    
                 let newCar = object.create(originalCar);

                 console.log(newCar.make);
                 newCar.make = 'audi';
                 console.log(newCar.make);

                 console.log(object.getprototypeoof(newCar));
                    
                 let myPrototype = object.getprototypeof(newCar);
                 console.log(myPrototype.make);

                 originalCar.doors = 4;
                 console.log(newCar.doors);

                 console.log(originalCar.hasOwnProperty('doors'));
                 console.log(newCar.hasOWnProperty('doors'));
                            */

                 // 18. Javascript Classes //
                    
                 // declaration // 
                 class Motor {
                      constructor(make, model, year) {
                          this.make = make;
                          this.model = model;
                          this.year = year;
                      }
                                                    
                      print() {
                      console.log(`${this.make} ${this.model} ${this.year}`);
                   }
                }

                let myMotor = new Motor('benz', '745li', 2010);
                myMotor.print();

                // let car = class { // expression //

                class SportMotor extends Motor {
                  revEngine() {
                      console.log('vroooooooom goes the viper ' + this.model);
                  }
                }

                let mySportMotor = new SportMotor('lexus', 'rx', 2011);
                mySportMotor.print();
                 mySportMotor.revEngine();

                 // 19. Arrow Function //

                 /* let hi = () => {console.log('holla')}

                 hi(); */
                   
                 // another example //
                 let hi = (name) => { console.log(`holla ${name}`) };

                 hi('Morris');

                 let add = (a, b) => {return a + b};
                 console.log(add(7, 7));

                 // more example //
                    
                 /*
                 let names = ['James', 'Michael', 'David'];
                 names.map((names) => {console.log(`holla  ${names}!`) } );
                 */

                 // more example //
                         
                 /*
                 let names = ['James', 'Michael', 'David'];
                 i = 0;
                 names.map((names) => {i++; console.log(`holla  ${names} ${i}!`) } );
                       */

                 // another example //
                     
                 /*
                 let names = ['James', 'Michael', 'David'];
                 let transformed = names.map((names) => {return `holla  ${names}!` });
                 console.log(transformed);
                      */

                 // 20. Truthy and Falsy Values //
                     
                 /*
                 if (false)      {} else { console.log('false is falsy'); }
                 if (null)       {} else { console.log('null is falsy'); }
                 if (undefined)  {} else { console.log('undefined is falsy'); }
                 if (0)          {} else { console.log('o is falsy'); }
                 if (NaN)        {} else { console.log('NaN is falsy'); }
                 if ('')         {} else { console.log('an empty string with single-quotes is falsy'); }
                 if ("")         {} else { console.log('an empty string with double-quotes is falsy'); }

                 // Everything else is truthy // 

                 if (true)            { console.log('true is truthy'); }
                 if ({})              { console.log('an empty object is tuthy'); }
                 if ([])              { console.log('an empty array is truthy'); }
                 if ('Morris')        { console.log('a non-empty string is truthy'); }
                 if (new RegExp())    { console.log('a new instance of an object is truthy'); }

                 if (10)              { console.log('positive integers are truthy'); }
                 if (-10)             { console.log('negative integers are truthy'); 
                if  (1.23)            { console.log('positive floats are truthy'); }
                if (-1.23)            { console.log('negative floats are truthy'); }
                if (Infinity)         { console.log('positive infinity is truthy'); }
                if (-Infinity)        { console('negative infinity is truthy') }
                */

               // 21. Null Type //

               /* let patternt = /mno/;
               let value = 'This is just a text';
               let result = value.match(patternt);
               console.log(result);
             //  console.log(typeof result);

             if (result === null) {
                 console.log('no match was found');
             } */

             // 22. Date Object //

             let today = new Date();

             let Morris = new Date('September 15, 1986 07:01:23');
             let elapsedTime = today - Morris;
             // console.log(elapsedTime);
             // console.log(Morris.getDate());
             console.log(Morris.getTime());

             // 23. String Methods //

             let first = 'Knowledge is power but enthusiasm pulls the switch.';
             let second = 'Do or not,  There is no try.';
             let third = '4,8,15,16,23,42';
                    
             /*
              You can even call  methods on string literals
              console.log('morris loves you'.toUpperCase());
              */
                
             /*
              let mySplit = third.split(',');
              console.log(mySplit);
             */
              
               /*
             let mySlice = first.slice(13, 18);
             console.log(mySlice);
             */
                 
             /*
             let mySubstr = first.substr(13, 5);
             console.log(mySubstr);
             */
               
            
             /* let myEndsWith = second.endsWith('try.');
             console.log(myEndsWith);
            
              
             
             let myStartWith = second.startsWith('Do');
             console.log(myStartWith);
             

             let myInclude = second.includes('There');
             console.log(myInclude); */

             let myRepeat = 'Ha!  '.repeat(7);
             console.log(myRepeat);

             let myTrim = '   bloated      ';
             console.log(myTrim.length);
             console.log(myTrim.trim().length);

             // 24. Array Method //

             /* let names = [ 'James', 'Morris', 'Michael', 'Joe' ];
             let others = [ 'Dav', 'Sam', 'Chucks', 'Mark', 'Rose' ];

             let lost = [ 4, 8, 15, 16, 23, 42 ];
             let Fibonacci = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ];
                
             
             let combine = lost.concat(Fibonacci);
             console.log(combine);
             
             
              console.log(Fibonacci.join('~'));

              console.log(lost.shift());
             console.log(lost);

             lost.unshift(1, 2, 3, 4);
             console.log(lost); 

              console.log(names);
             console.log(names.reverse());
             console.log(names.sort());
             
                   
             // example //

             console.log(others.indexOf('Rose'));
                  
             // example //

             console.log(combine);
             console.log(combine.indexOf(2));
                 
             // example //

             var filtered = combine.filter((x) => { if (x <= 15) return x; } );
             console.log(filtered);
                 
             // example //

             names.forEach((name) => console.log(`holla ${name}` ) );

             // example //

             console.log(filtered.every((num) => num < 10) );
             console.log(filtered.every((num) => num < 16) );

             // example //

             console.log(Fibonacci.some((num) => num > 50));
             console.log(Fibonacci.some((num) => num > 100));
 */
             // 25. Error Handling with Try Catch //

             function beforeTryCatch() {
                 let obj = undefined;
                 console.log(obj.b);
                 console.log('If th previous line of code throws an exception you\'ll never see this.');
             }
             // beforeTryCatch();

             function afterTryCatch() {
              try {

                let obj = undefined;
                 console.log(obj.b);
                 console.log('If th previous line of code throws an exception you\'ll never see this.');  

              } catch (error) {
                
                console.log('I caught an exception: ' + error.message);

              } finally {
                  console.log('This will happen no matter what.');
              }
                
              console.log('My application is still running!');

             }
             afterTryCatch();

             // example //

             function performCalculation(obj){
                 if (!obj.hasOwnProperty('b')) {
                      throw new Error('Object missing property');
                 }
                 // continue with calculation w/ obj,b
                 return 6;
             }

             function performHigherLevelOperation() {
                 let obj = {};
                 let value = 0;
                 try {
                     value = performCalculation(obj);
                 } catch (error) {
                     console.log(error.message)
                 }

                 if (value == 0) {
                     // contingency
                     // retry logic
                 }
             }
               performHigherLevelOperation();


               // 26. Understanding the Document Object Model //

               (function() {  // here is how my Javascript will work with my browser
                   function clickHandler(message) {
                       alert('hey ... ' + message);
                   }
                      
                   // Get a reference to button
                   // let myButton = document.getElementById('myButton');
                   // myButton.addEventListener('click', function() { clickHandler('hi from iffe') } );

               })(); 

               // 27. Working with DOM Nodes //

               // 28. Course Rap Up //



               // MY PRACTICING WITH NELSON //

               // 1.  Variables //

                /* let name = 'Maria jones';
               let myAge = 21;
               let hasDriversLicense = true;
               let empty = undefined;

               console.log( name + ' type = ' + typeof name );
               console.log( myAge + ' type = ' + typeof myAge );
               console.log( hasDriversLicense + ' type = ' + typeof hasDriversLicense );
               console.log( empty + ' type = ' + typeof empty );  */

               // 2. Objects //

               /* let person = {
                 name: 'Maria jones',
                 myAge: 21,
                 hasDriversLicense:  true,
                 dateOfBirth:  '01/01/1986',
                 address: {
                     firstLine: '123',
                     postCode: 'SEI',
                     country: 'England'
                 }
               };

               console.log( JSON.stringify(person) );

               console.log( person.name );
               console.log( person.myAge );
               console.log( person.hasDriversLicense );
               console.log( JSON.stringify(person.address) );
               console.log( Object.values(person) ); */

               // 3. Arrays //

                /* let name = " ";
               let names = ["Alex ", "Maria ", "Mike ", "Sam "];

               console.log(names);
               console.log(names[1]);
               console.log(names.length);

               for (let n of names) {  // One Way of Looping Through Arrays 
                   console.log(n);
               }

               names.forEach(function(n, index) {  // Another Way of Looping through Arrays
                   console.log(index + " _ " + n);
               });  */


               // 4. Arithmetic Operators //
                
               // plus +
               // Minus -
               // Division /
               // Remainder %
               // Multiplication *

               /* let addition = 2 + 2;
               let subtraction = 8 - 4;
               let division = 9 / 3;
               let remainder = 5 % 2;
               let multiplication = 5 * 5;

               console.log(addition);
               console.log(subtraction);
               console.log(division);
                console.log(remainder);
               console.log(multiplication); */

               // 5. Functions //

               /* function addNumbers (n1, n2) {
                   let result = n1 + n2;
                   return result;
               } 

               let result = addNumbers(10 ,20);
               console.log(result);
                */
         
         /* function sayHey (name) {
             return function() {
                 console.log("How are you doing, dear" + name + "?");
             }
         }

         let James = sayHey ("James");
             let David = sayHey ("David")

           James();
           David(); */


           let amount = 4;

           if (amount == 5) {
               console.log("amount is 5");
           } else if (amount < 5) {
               console.log("amount is less than 5");
           } else if (amount > 5) {
               console.log("amount is greater than 5");
           } else ("amount is not 5");

           let friends = "Michael";

           switch ("Mchael") {
               case "Michael":
                   console.log("Works for Access Bank");
                   console.log("From Imo state");
                   console.log("Dark in complexion");
                   break;
                     
                   case "Samuel": {
                       console.log("Works for Labelling company");
                       console.log("Short in size");
                       console.log("Also from Imo state");
                       break;
                   }

                       case "Henry": {
                           console.log("Very tall in nature");
                           console.log("Chocolate in colour");
                           console.log("Also hairy");
                           break;
                       } 
               default: {
                   console.log("All from CKC Parish, Ajegunle, Lagos");
                   break;
               }
           }

           let a, b, c, d;

           let names = ["Mike", "Sammy", "Romeo", "Paul"];
            [a, b, ...others] = names;
            console.log(names);
            console.log(b);
            console.log(names[3]);
            console.log(names.length);

            /* let k = "My" + "Girlfriend";
            console.log(k); */

             for (i = 0; i < 10; i++) {
                 console.log(i);
             }

             
            let w = [4, 2, 6, 3, 1];

            for (n = 0; n < w.length; n++) {
                console.log(w[n]);
            }

            
    /* function sayHello(name){
        return function(){
            console.log('How do you do ' + name);
        }
    }

    let Bob = sayHello('Bob');
    let Morris = sayHello('Morris');

    Bob();
    Morris();

    let account = 3;
    if (account == 4) {
    console.log('account is 4');
    } else if (account < 4) {
        console.log('account is less than 4')
    } else if (account > 4) {
        console.log('account is greater than 4')
    } else {
        console.log('account is Not 4')
    };

    let actors = 'rambo' 
        switch (actors) {
            case 'rambo': {
                console.log('smart');
                console.log('powerful');
                break;
            }
                case 'van damn': {
                    console.log('intelligent');
                    console.log('sniper');
                    break;
                }
                
        
            default:
                console.log('members of the USA army');
                break;
        };

        let a, b, c, d, e;

        let names = ['James', 'Morris', 'Paul', 'Peter'];
        [a, b, ...others] = names;

        console.log(a);
        console.log(b);
        console.log(others);
 */


       