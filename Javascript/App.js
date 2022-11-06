// Reading from Javascript.Info and Practices //



// javascript fundamentals: interaction - alert, prompt and confirm //


// alert("hello");



 /* let age = prompt('how old are you?', 20);
alert(`you are ${age } years old!`); */




/* let isboss = confirm('are you the Boss?');
 alert(isboss); */




 /* let user = 'James',
    age = 29,
    state = 'USA';
console.log(`Hey ${user}, you are 29 this month; congrats`);
 */



// Unary, Binary and Operand //

// For Unary

let x = 1;
 a = -x;
 console.log(x);



 // For Binary

 let z = 1, y = 3;
 console.log(y - z);



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

/* let i = 1;
console.log(+i); */



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

/* let Morrison = {  // Methods of Primitives //
    name: "Morrison",
    sayHello: function() {
      alert("hello Guys!");
    }
};

Morrison.sayHello(); */






/* let str = "hello";
alert(str.toUpperCase());
 */





/* let p = 1.2345;
alert(p.toFixed(3)); */





// Numbers //

/* let num = 255;  // toString Example
alert(num.toString(16));
alert(num.toString(2)); */





/* let num = 1.2345;  // Rounding Example
    alert(Math.round(num * 100) / 10 ); */
    
    




    /* let num = 12.34;
    alert(num.toFixed(1));  */
    




    /* alert(parseInt("100px"));  // parseInt Example
    alert(parseFloat("12.3em"));

    alert(parseInt("12.3"));
    alert(parseFloat("12.3.4"));  */

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



    
    
    /* function showName ( firstName,  lastName, ...titles ) {
        alert( firstName + ' ' + lastName );

        alert(titles[0]);
        alert(titles[1]);
        alert(titles.length);
    }

    showName('julius', 'ceaser', 'consul', 'imperator');
 */



    
  
         

   console.log("my practice with Nelson starts below"  +  "---------------------");
    // MY PRACTICE WITH NELSON //


    // 1.  Variables //

               /* let name = 'Maria jones';
               let myAge = 21;
               let hasDriversLicense = true;
               let empty = undefined;

               console.log( name + ' type = ' + typeof name );
               console.log( myAge + ' type = ' + typeof myAge );
               console.log( hasDriversLicense + ' type = ' + typeof hasDriversLicense );
               console.log( empty + ' type = ' + typeof empty ); 
 */





     // 2. Objects //

     /* let person = {
         name: "Maria Jones",
         myAge: 21,
         hasDriversLicense: true,
         dateOfBirth: "15/09/1986",
         addresss: {
             firstLine: "123",
             postCode: "SEI145",
             country: "England"
         }
     };

     console.log(JSON.stringify(person));

     console.log(person.name);
     console.log(person.myAge);
     console.log(person.hasDriversLicense);
     console.log(JSON.stringify(person.addresss));
     console.log(Object.values(person));  // with object.values, you grab all the values inside the object
      */

     


     
     
     
     // 3. Arrays //

     /* let name = " ";

     let names = ["Morrison", "Daniel", "Michael", "George"];

     console.log(names);
     console.log(names[2]);
     console.log(names.length);

     for (let n of names) {      // one way of looping through arrays.
         console.log(n)
     }

     names.forEach(function(n, index) {   // another way of looping through arrays.
         console.log(index + " _ " +  n);
     }); */




     
     
     // 4. Arithmetic Operators //

     // Plus +
     // Subtraction or Minus -
     // Division /
     // Remainder or Modules %
     // Multiplication *


     
     /* let addition = 2 + 2;
     let subtraction = 8 - 14;
     let division = 4 / 2;
     let remainder = 10 % 5;
     let multiplication = 9 * 9;

     console.log(addition);
     console.log(subtraction);
     console.log(division);
     console.log(remainder);
     console.log(multiplication); */




     
     // 5. Functions //

     /* function addNumbers(n1, n2) {
         let result = n1 + n2;
         return result;
     }

     let result = addNumbers(10, 90);
     console.log(result); */



     /* let person = {name: "Vivian", age: 30};  // more function example
     console.log(Object.keys(person));
     console.log(Object.values(person));
     console.log(person);

     
     
     let vivian = "Vivian Anyanwu";

     console.log("Vivian Anyanwu".toUpperCase());
     console.log("Vivian Anyanwu".toLowerCase());
     console.log("Vivian Anyanwu".startsWith("Vivian"));
     console.log("Vivian Anyanwu".endsWith("Anyanwu"));
 */




     
     
     // 6. Loops //

     /* for(let i = 0; i < 10; i++) {  // For Loop
         console.log(i);
     }; */



     
     
     /* let person = [  // For Loop
         {  name: "Morris",  age: 25},
         { name: "Paul", age: 30}
     ];

     for (let i = 0; i < person.length; i++) {
         console.log(person[i].name);
         console.log(person[i].age);
         console.log("------------------")
     };
 */




       /* let number = 0;   // While Loop

     while(number < 5) {
         console.log(number);
         number += 1;
     }; 
 */



     let i = 0;

     do{  // Do/While Loop
         i++;
         console.log(i);
     }while (i < 5);

       


     /* let number = 0;  // Break keyword example

     while(number < 5) {
        console.log(number);
        if(number == 2) {
            break;
        }

        number++;
    }; */



    let number = 0;  //  Continue keyword example

     while(number < 5) {
        number++;
        if(number < 5) {
            continue;
        }

        console.log(number);
    };






    // 7. If Statement //

    /* let person = {
        name: "Lucy",
        age: 18
    };

    if(person.age >= 18) {
        console.log(person.name + " is an adult");
    }else if(person.age == 17) {
        console.log(person.name + " is about to be an adult");
    }else {
        console.log(person.name + " is not an adult");
    }; */




    // 8. Switch Statement //

    /* let person = {
        name: "Vera",
        age: 19
    };

    switch(true) {
        case (person.age == 17):
            console.log(person.name + " is about to be an adult");
            break;

            case (person.age >= 18):
                console.log(person.name + " is an adult");
                break;

                default:
                    console.log(person.name + " is not an adult");
    }; */



    switch(new Date().getDay()) {  // More example
        case 2:
            console.log("Tuesday");
            break;

            case 3:
                console.log("Wednesday");
                break;

                default:
                    console.log("I don't know")
    };




    // 9. Comparison and Logical Operators //
    // Basically used with IF/WHILE Statements //

    console.log(10 == 10); // Comparison Operators
    console.log(10 < 10);
    console.log(10 <= 10);
    console.log(10 > 10);
    console.log(10 >= 10);
    console.log(10 != 10);
    console.log(10 != 11);


    console.log(10 == 10 && 20 == 20 && 100 == 100);   // Logical Operators
    console.log(20 == 20 && 20 != 20);
    console.log(10 == 10 || 10 == 20);
    console.log(!(10 == 10));
    console.log(!(10 == 20));



    // 10. Type Coercion and === // // Equality without type coercion and 3 equals sign //
        
    // With Type Coercion

    console.log(typeof 0  +  " "  +  typeof false);
    console.log(0 == false);

    console.log(typeof "0"  +  " "  +  typeof false);
    console.log("0" == false);

    console.log(typeof 1  +  " "  +  typeof "1");
    console.log(1 == "1");


    // Without Type Coercion

    console.log(typeof 0  +  " "  +  typeof false);
    console.log(0 === false);

    console.log(typeof "0"  +  " "  +  typeof false);
    console.log("0" === false);

    console.log(typeof 1  +  " "  +  typeof "1");
    console.log(1 === "1");




    // 11. Single vs Double Quotes and Semi Colon //






    // 12. Map | Filter | Reduce //

    let map = [1, 2, 3, 4, 5].map(function(n) {  // Map does Transformation on an arrays
        return n * 2;
    });
    console.log(map);


    let filter = [1, 2, 3, 4, 5, 10, 29, 100].filter(function(n) {  // Filter does allow to filter the values of an arrays
        return n % 2 == 0;
    }); 
    console.log(filter);

 let reduce = [1, 2, 3, 4, 5].reduce(function(accumulator, current) {   // Reduce allows us to reduce the values inside of an array into 1.
     return accumulator + current;
 });
 console.log(reduce);  


 
 



 // 13. callBacks //

function callBackExample(name, callBack) {
    console.log(callBack(name));
};

callBackExample("Morrison Anyanwu,", function(name) {
    return "Hello " + name;
});








// 14. Named Exports/Imports //  // Allows us to export multiple values 

/* export let add = function(n1, n2) {  // first create a separate file before exporting
    return n1 + n2;
};
export let divide = function(n1, n2) {
    return n1 / n2;
};

export let subtract = function(n1, n2) {
    return n1 - n2;
};
export let multiply = function(n1, n2) {
    return n1 * n2;

    export let PI = 3.1415;
};

console.log(math.add(2, 2));
console.log(math.divide(2, 2));
console.log(math.subtract(2, 2));
console.log(math.multiply(2, 2));
 */







// 15. Default Exports/Exports //  // Allows us to export a single value

/* export default class Animal{
    constructor() {
        console.log("I am an animal.")
    }

    getClassType() {
        return "Animal";
    }
};

let animal = new Animal();
console.log(animal.getClassType());
 */







// 16. Variable Scope and Let Keyword // // Instead of var keyword, make use of let keyword

/* for (let i = 0; i < 10; i++) {
    console.log (i);
} */





// 17. Const Keyword //  // Const simply means that re-assignment is impossible

/* const person = {};

person["name"] = "Pauline";
console.log(person.name);
console.log("pauline".toUpperCase())


const array = [];

array.push("Paloma from array.");
console.log(array[0]);
console.log("Paloma from array.".toUpperCase());
*/







// 18. Template Literals //

/* let name = "Jesus Christ";
 let country = "Jerusalem";
 let age = 33;

console.log(`Name: ${name}; Country: ${country};  Age: ${age}.`);
 */







// 19. Arrays and Spread Operators // // allows us to expand arguments where expected or to concatinate arrays or functions.

const arrayOne = ["Marian", "Jude", "Margret"];
const arrayTwo = ["Moses", "Elisha", "Adam", "Elizabeth"];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function(name) {
    console.log(name.toUpperCase())
});




/* const name = "Marian";
const nameToArray = [...name];
nameToArray.forEach(function(letter) {
    console.log(letter.toUpperCase());
}); */




const addNumbers = (function(n1, n2, n3) {
    let result = n1 + n2 + n3 
    return result;
});

const numbers = [1, 5, 9,];

const addition = addNumbers(...numbers);

console.log(addition);






// 20. Objects and Spread Operators //

/* const addresss = {
    city: "LA",
    country: "USA",
    postCode: "LA44"
};

const name = {
    firstName: "Chinua",
    lastName: "Achebe"
};

const person = {...address, ...name};

console.log(JSON.stringify(person)); */

 


   
// 21. Arrow Functions // // in JAVA, CSHARP, it is called LAMDERS //

    const hello = () => {
        const es6 = "ES6";
        return  `Hello ${es6}`;
    };


    const powers = 
    [1, 2, 3, 4, 5].map((number, index) => Math.pow(number, index));


    const add = (n1, n2) => n1 + n2;


    const milesToKm = (miles) => miles * 1.60934;

    console.log(hello());
    console.log(powers);
    console.log(add(100, 300));
    console.log(milesToKm(100));


   
   
    // 22. Lexical and This //

    const person = {
        name: "Markson",
        cars: ["Ferrari", " Mercedes Benz"],
        toString: function() {
             console.log(`${this.name} has ${this.cars}`)
            this.cars.forEach(car => {
                console.log(`${this.name} has ${car}`);
            });
        }
    }

    person.toString();


   




    // 23. Enhanced Object Properties //

    const pricePropName = "PRICE";

    const calculator = (name, price) => {
        return {
            name,
            add(n1, n2) {
                return n1 + n2;
            },
             [pricePropName.toLowerCase()]: price
        }
    }

    const calc = calculator("Casino", 19.99);

    console.log(calc.name);
    console.log(calc.add(10, 30));
    console.log(calc.price);


    
    // 24. Array Destructuring //

    const names = ["Anna", "Moses", "John", "Achebe", " Marcus"];

       // const Anna = names[0];
      // const Moses = names[1];
      // const John = names[2]

      const [Anna, Moses, John, ...others] = names;

      console.log(`${Anna} ${Moses} ${John} ${others}`);
      console.log(names.length);



      // 25. Object Destructuring //

      const getUser = () => {
          return {
              name: "Hannah",
              surname: "Steilow",
              gender: "female",
              address: {
                  country: "United States",
                  city: "Chicago",
                  postCode: "CH",
                  fullAddress: {
                      doorNumber: 22,
                      street: "westCatapa st"
                  }
              },

              age: 50 
          }
      };

      const user = getUser();

     // console.log(user.name);
     // console.log(user.age);
     // console.log(user.address.country);
     // console.log(user.address.fullAddress.doorNumber);

      const { name: theName, age: theAge, address: {country: theCountry} } = user;

      const { address: { fullAddress: { doorNumber: theNumber} } } = user;

      console.log(theName);
      console.log(theAge);
      console.log(theCountry);
      console.log(theNumber);




      // 26. Function Default Parameters //

      const calculatePay = (yearSalary, bonus = {
          teamBonus: 0,
          employeeBonus: 0
      }) => {
          return yearSalary + bonus.teamBonus + bonus.employeeBonus;
      };

      console.log(calculatePay(22000, {teamBonus: 10000, employeeBonus: 6000}));





      // 27. Classes //   // Classes are simply blueprints in which we can define properties and behaviours //




      // 28. Creating Classes //  // Constructors only get invoked once //

      /* class Animal {
          constructor(name, age) {
              console.log(`${name} is an animal and was created.`);
              this.name = name;
              this.age = age;
          }

          eat() {
              console.log(`${this.name} is eating.`);
          }

          sleep() {
              console.log(`${this.name} is sleeping`);
          }

          wakeup() {
              console.log(`${this.name} is waking up.`)
          }

          logAge() {
              console.log(`${this.name} is ${ this.age} years old.`);
          }
      }

      const jaguar = new Animal("jaguar", 4);

      jaguar.eat();
      jaguar.sleep();
      jaguar.wakeup();
      jaguar.logAge();

      console.log("------------------");
    
      const marshall = new Animal("marshall", 3);

      marshall.eat();
      marshall.sleep();
      marshall.wakeup();
      marshall.logAge();    */
      
      

      // 29. Class Inheritance //  // an Inheritance simply means that we can have a common class and we extend properties and behaviours from those classes //
      
      
      /* class Animal {
        constructor(name, age) {
            console.log(`${name} is an animal and was created.`);
            this.name = name;
            this.age = age;
        }

        static iAmAstaticMethod()  {
            console.log("I am a static method inside of an animal class.")
        }

        eat() {
            console.log(`${this.name} is eating.`);
        }

        sleep() {
            console.log(`${this.name} is sleeping`);
        }

        wakeup() {
            console.log(`${this.name} is waking up.`)
        }

        logAge() {
            console.log(`${this.name} is ${ this.age} years old.`);
        }
    }

    Animal.iAmAstaticMethod();

    const jaguar = new Animal("jaguar", 4);

    jaguar.eat();
    jaguar.sleep();
    jaguar.wakeup();
    jaguar.logAge();

    console.log("---------------------") */


    /* class Dog extends Animal {
        constructor(name, age, breed) {
            super(name, age);
            this.breed = breed;
        }

        logBreed() {
            console.log(`${this.name} is a ${this.breed}`);
        }

        logAgeFromDog() {
            super.logAge();
        }
    }

    const japan = new Dog("japan", 7, "Bulldog");

    japan.logBreed();
    japan.logAgeFromDog();

    console.log("-------------------")


    class Cat extends Animal {
        constructor(name, age) {
            super(name, age);
        }

        //logAgeFromCat() {
          //  super.logAge();
       // }
    }

    const josh = new Cat("josh", 3);
    
    // josh.logAgeFromCat();
    josh.eat();
    josh.sleep();
    josh.wakeup();
    josh.logAge(); */



    // 30. Classes Static Methods //  // The Static keyword allows us to create methods or properties that belong to the actual class and not to each individual object that we extanciate //

        class Animal  {
            constructor(name, age) {
                console.log(`${name} is an animal and was created.`)
                this.name = name;
                this.age = age;
            }

            static iAmAStaticMethod() {
                console.log("I am a static method inside of an animal class.")
            }

            eat() {
                console.log(`${this.name} is eating.`);
            }

            sleep() {
                console.log(`${this.name} is sleeping.`);
            }

            logAge() {
                console.log(`${this.name} is ${this.age} years old.`);

        }


    }

    Animal.iAmAStaticMethod();

        const jaguar = new Animal("jaguar", 4);

        jaguar.eat();
        jaguar.sleep();
        jaguar.logAge();




        // 31. Promises Keynote //

        // Promise is simply an object which is used for 
        // asynchronous computations.
        // It represents a value which may be available 
        // NOW, or in the FUTURE or NEVER.

        // Promises States:

        // 1. Pending: initial state, not fulfullied or rejected.
        // 2. Fulfilled: meaning that the operation completed successfully.
        // 3. Rejected: meaning  that the operation failed.
        
        // We create the Promise Object and use the .THEN method and use .CATCH method for ERROR.






        // 32. Creating Promises //

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("data back from the server.");
            }, 3000);

            setTimeout(() => {
                reject("no data back from the server, there was an error.");
            }, 2000);
        });

        promise.then(Response => {
            console.log(Response);
        }).catch(error => {
            console.log(error);
        });



        // 33. Promise.All Method //

        const namesPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(["Michael", "Tony", "George", "Samuel"]);
            }, 3000);

            setTimeout(() => {
                reject("no data back from the server, there was an error.");
            },5000);

        });

            const surnamesPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(["Anyanwu", "Eche", "Njoku", "Aghaluke"]);
                }, 3000);

                setTimeout(() => {
                    reject("no data back from the server, there was an error.")
                }, 5000);
            });

            Promise.all([namesPromise, surnamesPromise]).then(data => {
                const [names, surnames] = data;
                for (let i = 0; i < names.length; i++) {
                    const name = names[i];
                    const surname = surnames[i];
                    console.log(`${name} ${surname}`);
                }

            }).catch(error => {
                console.log(error);

            });




            
            // 34. Promises and Fetch API //

            /* const getRandomUsers = n => {
                const fetchRandonUsers = fetch (`http://randomuser.me/api/?result=${n}`);
                fetchRandonUsers.then(data => {
                    data.json().then(randomUsers => {
                        console.log(JSON.stringify(randomUsers.results.length));
                        randomUsers.results.forEach(user => {
                            const {gender, email} = user;
                            console.log(`${gender} ${email}`)
                        })
                    })
                });
            }
           
            getRandomUsers(10); */





            // 35. Generators Keynote //  // A Generator is simply a function that can be paused. It allows us to write our code in an async notifaction



            // 36. Creating Generators //


            /* const getNumbers = function* () {
                yield 1;
                yield "Hello World!";
                yield true;
                yield { name : "ALex"};
                return ("I am done!");
            }

            const numbersGen = getNumbers();

            console.log(numbersGen.next().value);
            console.log(numbersGen.next().value);
            console.log(numbersGen.next().value);
            console.log(JSON.stringify(numbersGen.next().value));
            console.log(numbersGen.next().value); */





            // 37. More on Generators //

            const getNumbers = function* (numbers) {
                for(let i = 0; i < numbers.length; i++) {
                    yield numbers[i];
                }
            }

            const getNumbersGen = getNumbers([1, 2, 3, 4, 5, 6, 7]);

            const interval = setInterval(() => {
                const next = getNumbersGen.next();
                if(next.done) {
                    console.log("This Generator is done.");
                    clearInterval = (interval);
                }else{
                    const number = next.value;
                    console.log(number);
                }
            }, 1000);





            // 38. Coroutines Keynote //  // To use Generators, one has to install a package called BlueBird web or for backend, install CO//




            // 39. Generators, Promises and Coroutines // // Using Generators with Promises //


            /* const getRandonUsers = co(function* (n) {
                const fetchRandonUsers = yield fetch(`http://randomuser.me/api/?result=${n}`);
                const data = yield fetchRandonUsers.json();
                return data;
            });

            getRandonUsers(10).then(randomUsers => {
                randomUsers.results.forEach(user => {
                    const {gender, email} = user;
                    console.log(`${gender} - ${email}`);
                })
            }).catch(err => log); */






            // 40. ASYNC AWAIT //

            async function logName(name) {
                console.log(name);

                // 1.  we can yeild promises using AWAIT 

                const transformName = new Promise((resolve, reject) => {
                    setTimeout(() => resolve(name.toUpperCase()), 1000);
                });

                const result = await transformName;

                // 2.  return a promise

                return result;
            }


            logName("antonio").then(res => {
                console.log("result from async function = " + res);
            });





            // 41. From GENERATORS to ASYNC AWAIT //

            /* const getRandomUsers = async n => {
                const fetchRandonUsers = await fetch(`http://randonUser.me/api/?result=${n}`);
                const data = await fetchRandonUsers.json();
                data.results.forEach(user => {
                    const {gender, email} = user;
                    console.log(`${gender} ${email}`);
                });

                return data;
            }

            getRandomUsers(5); */






            // 42. Handling Errors with ASYNC AWAIT //



            const getRandomUsers = async n => {
                try {
                    const fetchRandonUsers = await
                    fetch(`httprandomuser.me/api/?result=${n}`);
                    const data = await fetchRandonUsers.json();
                    data.results.forEach(user => {
                        const {gender, email} = user;
                        console.log(`${gender} - ${email}`);
                    });

                    return data;
                } catch(err) {
                    console.log(err);
                }
            };



            // 43. Wrapping it Up // 

            getRandomUsers(2);
            

            



           


    








 

/* for(i = 0; i < 10; i++) {
    console.log(i);
}  */




/* function sayHello(name) {
    return function() {
        console.log("how are you doing, " + name  + "? ")
    }
}

let Morris = sayHello("Morris");
let Bob = sayHello("Bob");
let Mark = sayHello("Mark");


Morris();
Bob();
Mark(); */










/* class Animal {
    constructor(name, age) {
        console.log(`${name} is an animal and was created.`)
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }

    wakeup() {
        console.log(`${this.name} is waking up.`);
    }
}

const bullet = new Animal("bullet", 4);

bullet.eat();
bullet.sleep();
bullet.wakeup(); */
