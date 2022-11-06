/* export function double (n) {
    return n * 2;
};    




export const name = "Alex"
 */


 let Morrison = {
     name: "Morrison",
     age: 22
 };

 console.log(Morrison);



 let grapes = "5";   // String Concatenation -- Treating them as string and number //
  
  let melons = "4";
  console.log(grapes + melons);
  console.log(+grapes +  +melons);
  console.log(Number(grapes) + Number(melons));



  let Michelle = {    // Data Types -- Method of Primitives //
      name: "Michelle",
      sayHello: function() {
          console.log("Hello Guys!")
      }
  };

  Michelle.sayHello();



  // Rest Parameters //


  function sum(a, b) {
      return a + b;
  };

  console.log(sum(1, 2, 3, 7));



  function sumAll (...args) {
      let sum = 0;
      for (let arg of args) sum += arg;
      return sum;
  };

  console.log(sumAll(1, 2, 3, 7));



  function showName (firstName, lastName, ...titles) {
   console.log(firstName  +  "  "  +  lastName);

   console.log(titles[0]);
   console.log(titles[1]);
   console.log(titles.length)
  };


  showName ("Michelle", "Nwagwu", "Chairman", "NAFDAC");




  function showMyName() {
      console.log(arguments.length);
      console.log(arguments[0]);
      console.log(arguments[1]);
  };


  showMyName("Romeo", "Juliet");




  // Spread Syntax //

  /* let arr = [1, 2, 7];

  console.log(Math.max(...arr));
 */


  /* let arr = [-2, 5, -7];

  let arr2 = [-9, 4, 8, -10];

  console.log(Math.max(...arr, ...arr2));
 */

  let arr1 = [1, 2, 3];
  let arr2 = [2, 7, 5, 1];

  let merged = [0, ...arr1, 2, ...arr2];

  console.log(merged);






  // With Nelson Here //

  // Variables //

  /* let name = "Miracle Anyanwu";
  let age = 12;
  let hasDriverLicence = true;
  let empty = undefined;

  console.log(name + " type = " + typeof name);
  console.log(age + " type = " + typeof age);
  console.log(hasDriverLicence + " type = " + typeof hasDriverLicence);
  console.log(empty + " type = " + typeof empty); */





  // Object //


  let person = {
      name: "Miracle Anyanwu",
      age: 12,
      hasDriverLicence: true,
      dateOfBirth: "31/12/2021",
      address: {
          firstLine: "123",
          postCode: "LA144",
          country: "USA"
      } 
  };

  console.log(JSON.stringify(person));

      console.log(person.name);
      console.log(person.age);
      console.log(person.hasDriverLicence);
      console.log(JSON.stringify(person.address));

   console.log(Object.values(person));





   // Arrays //


   let names = ["James", "Maria", "Reuben", "Ese"];

   console.log(names);
   console.log(names[3]);
   console.log(names.length);
   
   for (let n of names) {
       console.log(n);
   };

   names.forEach(function(n, index) {
       console.log(index + " - " + n);
   });







   // Arithmetic Operators //

   // Addition +
   // Subtraction -
   // Division /
   // Multiplication *
   // Modules or Remainder %

  // let addition = 1 + 1;
   let subtraction = 2 - 1;
   let division = 2 / 2;
   let multiplication = 1 * 1;
   let modules = 5 % 2;



  // console.log(addition);
   console.log(subtraction);
   console.log(division);
   console.log(multiplication);
   console.log(modules);





   // Function  //

   /* function addNumbers(n1, n2) {
       let result = n1 + n2;
       return result;
   };

   let result = addNumbers(25, 25);
   console.log(result); */


   // More on Function //

   /* let myPerson = {name: "Sharon", age: 35};

   console.log(Object.keys(myPerson));
   console.log(Object.values(myPerson));
   console.log(myPerson);


   console.log("Gabriel Anyanwu".toLowerCase());
   console.log("Gabriel Anyanwu".toUpperCase());
   console.log("Gabriel Anyanwu".startsWith("GABRIEL"));
   console.log("Gabriel Anyanwu".endsWith("ANYANWU")); */






   // Loops //

   for(let i = 0; i < 10; i++) {  // For Loop
       console.log(i);
   };

   /* let persons = [
       {name: "Rose", age: 20},
       {name: "Kate", age: 30}
   ];

   for (let i = 0; i <= persons.length; i++ ) {
       console.log(persons[i].name);
       console.log(persons[i].age);
       console.log("-----------------")
   }; */



  /*  let number = 0;  // While Loop

   while (number < 5) {
       console.log(number);
       number += 1;
   };
 */


   /* let i = 0;

   do{          // Do/While Loop
       i++;
       console.log(i);
   }while(i < 5); */







   // Break and Continue Keywords //


   /* let number = 0;     // Break Keyword

   while (number < 5) {
       console.log(number);
       if (number == 4) {
           break;
       }

       number++;
   } */




   let number = 0;    // Continue Keyword

   while (number < 5) {
    number ++;

    if (number < 5) {
        continue;
    }
      console.log(number);
   };







   // IF Statement //

   /* let morris = {
       name: "Socrates",
       age: 18
   };

   if (morris.age >= 18) {
       console.log(morris.name + " is an adult");
   }else if (morris.age == 17) {
       console.log(morris.name + " is about to be an adult");
   }else {
       console.log(morris.name + " is not an adult");
   }; */






   // Switch Statement //

   let morris = {
       name: "Socrates",
       age: 19
   };

   switch(true) { 
       case (morris.age == 17): 
           console.log(morris.name + " is about to be an adult");
           break;

       case (morris.age >= 18): 
           console.log(morris.name + " is an adult");
           break;

       default:
           console.log(morris.name + " is not an adult")
   };


   switch (new Date().getDay()) {    // More on Switch Statement
       case 2:
           console.log("Tuesday");
           break;

           case 3:
               console.log("Wednesday");
               break;

               case 4:
                   console.log("Thursday");
                   break;

                   case 5:
                       console.log("Friday");
                       break;

                       case 6:
                           console.log("Saturday");
                           break;

                           case 7:
                               console.log("Sunday");
                               break;

               default:
                   console.log("I don't know.")
   };






   // Comparison and Logical Operators //

   console.log("Comparison Operators below")
   console.log(10 == 10);  // Comparison Operators
   console.log(10 < 10);
   console.log(10 <= 10);
   console.log(10 > 10);
   console.log(10 >= 10);
   console.log(10 != 10);
   console.log(10 != 11);


   console.log("Logical Operators below")  // Logical Operators
   console.log(10 == 10 && 20 == 20 && 100 == 100);
   console.log(10 == 10 && 100 == 100 && 5 != 5)

   console.log(10 == 50 || 20 == 30 || 20 == 20)

   console.log(!(10 == 10))
   console.log(!(10 == 11))





   // Equality without type coercion and 3 equals sign //

     // with type coercion 

   console.log(typeof 0  +  "  "  +  typeof false);  // coercion, converting  a value from one value to another
   console.log(0 == false);

   console.log(typeof "0"  +  "  "  + typeof false);
   console.log("0" == false);

   console.log(typeof 1  +  "  "  +  typeof "1");
   console.log(1 == "1");


   // without type coercion

   console.log(typeof 0  +  "  "  +  typeof false);
   console.log(0 === false);
   
   console.log(typeof "0"  +  "  "  +  typeof false);
   console.log(0 === false);

   console.log(typeof 1  +  "  "  + typeof "1");
   console.log(1 === "1");





   // Single vs Double Quotes and Semi colon //




    // // basically work with arrays

   // Map | Filter | Reduce // 
   
   let map = [1, 2, 3, 4, 5].map(function(n) {  // MAP Transforms arrays
       return n * 2;
   });
   console.log(map);



   let filter = [1, 2, 3, 4, 5, 10, 27, 100].filter(function(n) {  // FILTER returns a Boolean as well as allows to filter values of arrays
     return n % 2 == 0;
   });
   console.log(filter);


   let reduce = [1, 2, 3, 4, 5].reduce(function(accumulator, current) {  // Reduce adds up all the values in an array
       return accumulator + current;
   });
   console.log(reduce);





   // Callbacks //  // A function that gets executed in another function at one point

   function callback (name, callback) {
       console.log(callback(name));
   };
     
   
   callback("Gabriel Anyanwu", function(name) {
       return "Hola " + name;
   });





   // Named Exports/Import -- to export multiple values //  // create a seperate file first before importing //





   // Default Exports/Import -- to export a single value //



   // Variable Scope and Let Keyword //



   // Const Keyword //

   /* const ourPerson = {};
   ourPerson["name"] = "Miracle";
   console.log(ourPerson.name); */


   /* const array = [];
   array.push("Miracle from the United States of America ")
   console.log(array[0]);
 */






   // Template Literals //  // Used to Concatenate values with String

   /* const myName = "Gab";
   const myAge = 2;
   const myCountry = "USA";

   console.log(`myName ${myName.length} myAge ${myAge} myCountry ${myCountry} `) */






   //  Arrays and Spread Operator //

   let arrayOne = ["Mark", "Vera", "victoria"];
   let arrayTwo = ["Ben", "Mike", "Gable"];

   let concatToArray = [...arrayOne, ...arrayTwo];
   concatToArray.forEach(function(name) {
       console.log(name);
   });


   let name = "GABRIEL";
   let nameToArray = [...name];
   nameToArray.forEach(function(letter) {
      
    console.log(letter);
   });

   let addNumbers = function(n1, n2, n3) {
       let result = n1 + n2 + n3;
       return result;
   };

   let numbers = [1, 10, 20];

   let addition = addNumbers(...numbers);
   console.log(addition);






   // Objects and Spread Operator //

   const address = {
       city: "LA",
       country: "USA",
       postCode: "LA144"
   };

   const myName = {
       firstName: "Tochukwu",
       lastName: "Anyanwu"
   };

   const myPerson = {...address, ...myName};
   console.log(JSON.stringify(myPerson, null, 2));







   // Arrow Functions //

   let hello = () => {
       let es6 = "ES6";
       return `hello ${es6}`;
   };

   let powers = [1, 2, 3, 4, 5].map((number, index) => Math.pow(number, index));

   let add = (n1, n2) => n1 + n2;

   let milesToKm = miles => miles * 1.60934;


   console.log(hello());
   console.log(powers);
   console.log(add(100, 200));
   console.log(milesToKm(300));







   // Lexical this //

   const man = {
       name: "Gabriel",
       cars: ["Lambo", " Ferrari"],
       toString: function() {
           console.log(`${this.name} has ${this.cars}`);
           this.cars.forEach(car => {
               console.log(`${this.name} has ${car}`);
           });
       }
   }

   man.toString();






   // Enhanced Object Properties //

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

   const calc = calculator ("Snooker", 19.40);
   console.log(calc.name);
   console.log(calc.add(50, 50));
   console.log(calc.price);




   // Array Destructuring //

   let ourNames = ["Joe", "Jonah", "Moses", " Junior"];

  // const Joe = ourNames[0];
 //  const Jonah = ourNames[1];
  // const Moses = ourNames[2]

   const [Joe, Jonah, ...others] = ourNames;
   
   console.log(`${Joe}  ${Jonah}  ${others}`);
   console.log(ourNames.length);





   // Object Destructuring //


   const getUser = () => {
       return {
           herName: "Hannah",
           surname: "Steilow",
           gender: "female",
           address:{
               country: "USA",
               city: "Chicago",
               postCode: "CH144",
               fullAddress: {
                   doorNumber: 22,
                   street: "WestCatapa"
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

   const { herName, age, address: { country: herCountry } } = user;
   const { address: { fullAddress: { doorNumber: theNumber } } } = user;

   console.log(herName);
   console.log(age);
   console.log(herCountry);
   console.log(theNumber);




   // Function Default Parameters //

   let calculatePay = (yearSalary, bonus = {
       teamBonus: 0,
       employeeBonus: 0
   }) => {
       return yearSalary + bonus.teamBonus + bonus.employeeBonus;
   }
   console.log(calculatePay(22000, {teamBonus: 10000, employeeBonus: 5000}));





   class Animal {
       constructor(name, age) {
           console.log(`${name} is an animal and was created.`)
           this.name = name;
           this.age = age;
       }

       static iAmAStaticMethod () {
           console.log("I am static method inside of an Animal class");
       }

       run() {
           console.log(`${this.name} is running`);
       }

       bark() {
           console.log(`${this.name} is barking`);
       }

       chase(){
           console.log(`${this.name} is chasing`);
       }

       logAge() {
           console.log(`${this.name} is ${this.age} years old.`)
       }
   }

   Animal.iAmAStaticMethod();
   


   const billy = new Animal("Billy", 4);
   
   billy.run();
   billy.bark();
   billy.chase();
   billy.logAge();

   console.log("-----------------------------");

   const bullet = new Animal("Bullet", 2);

   bullet.run();
   bullet.bark();
   bullet.chase();
   bullet.logAge();





   // Class Inheritance //


   class Dog extends Animal {
       constructor(name, age, breed) {
           super(name, age) 
           this.breed = breed;
       }

       logBreed() {
        console.log(`${this.name} is a ${this.breed}`)
       } 

       logAgeFromDog() {
           super.logAge();
       }
   }

   console.log("-----------------------")

   const Jaguar = new Dog ("jaguar", 4, "bulldog");
   Jaguar.logBreed();
   Jaguar.logAgeFromDog();



   class Cat extends Animal {
       constructor(name, age) {
           super(name, age)
       }

       logAge() {
           console.log(`${this.name} is ${this.age} year old`);
       }

       logAgeFromCat() {
           super.logAge
       }
   }

   console.log("----------------------")

   const Bash = new Cat ("Bash", 1);
   Bash.logAgeFromCat();
   Bash.run();
   Bash.bark();
   Bash.chase();
   Bash.logAge();






   // Promises  KeyNOte //


   // Creating Promises //

   const promise = new Promise ((resolve, reject) => {
       setTimeout(() => {
           resolve ("Data back from the server.");
       }, 3000);

       setTimeout(() => {
           reject ("No data back from the server; there was an error.");
       }, 1000);
   });

   promise.then (response => {
       console.log (response);
   }).catch (error => {
       console.log (error);
   });






   // Promise.All //


   const namesPromise = new Promise ((resolve, reject) => {
       setTimeout(() => {
           resolve (["Lucy", "Gabriel", "Munachi", "Chioma"]);
        }, 3000);

       setTimeout(() => {
           reject ("No data back from the server; there was an error.");
       }, 5000);
   });



   const surnamesPromise = new Promise ((resolve, reject) => {
       setTimeout(() => {
           resolve (["Ibeh", "Anyanwu", "Madu", "Anyanwu"]);
       },3000);

       setTimeout(() => {
           reject ("No data back from the server; there was an error.");
       }, 5000);
   });


   Promise.all ([namesPromise, surnamesPromise]).then(data => {
       const [names, surnames] = data;
       for (let i = 0; i < names.length; i++) {
           const name = names[i];
           const surname = surnames[i];
           console.log(`${name} ${surname}`);
       }
   }).catch (error => {
       console.log(error);
   });  






   // Promises and Fetch API //



   /* const getRandomUsers = n => {
       const fetchRandomUsers = fetch (`http://randomusers.me/api/?result=${n}`);
       fetchRandomUsers.then(data => {
           data.json().then(randomUsers => {
               console.log(JSON.stringify(randomUsers.results.length));
               randomUsers.results.forEach(user => {
                   const {gender, email} = user;
                   console.log(`${gender} - ${email}`);
               });
           })
       });
   }

   getRandomUsers(); */






   // Generator KeyNote //





   // Creating Generators //


/*    const getNumbers = function*() {
       yield 1;
       yield "Hello";
       yield true;
       yield {name:  "James"};
       return "I am done!"
   };

   const numbersGen = getNumbers();

   console.log(numbersGen.next().value);
   console.log(numbersGen.next().value);
   console.log(numbersGen.next().value);
   console.log(JSON.stringify(numbersGen.next().value));
   console.log(numbersGen.next().value);
 */




   // More on Generators //

   const getNumbers = function* (numbers) {
       for (let i = 0; i < numbers.length; i++) {
           yield numbers[i];
       }
   };

   const getNumbersGen = getNumbers ([1, 2, 3, 4, 5, 6,]);

   const interval = setInterval(() => {
       const next = getNumbersGen.next();
       if (next.done) {
           console.log("This generator is done!");
       } else {
           const number = next.value;
           console.log(number);
       }
   }, 1000);






   // Coroutine //





   // Generators, Promises and Coroutine //


  /*  const getRandomUsers = co(function* (n) {
       const fetchRandomUsers = yield fetch (`http://randomusers.me.api/?result=${n}`);
       const data = yield fetchRandomUsers.json();
       return data;
   });

   getRandomUsers(10).then(randomUsers => {
       randomUsers.result.forEach(users => {
           const {gender, email} = users;
           console.log(`${gender} ${email}`);
       });
   }). catch(err => console.log); */







   // Async Await //

   async function logName (name) {
       console.log(name);
       const transformName = new Promise((resolve, reject) => {
           setTimeout(() => resolve(name.toUpperCase()), 1000);
       });

       const result = await transformName;
       return result;

   }

   logName("antonio").then(res => {
       console.log("result from async function = " + res);
   });



   // More on Async Await//

   /* const getRandomUsers = async n => {
       const fetchRandomUsers = await fetch(`http://randonusers.me/api/?results=${n}`);
       const data = await fetchRandomUsers.json();
       data.result.forEach(user => {
           const {gender, email} = user;
           console.log(`${email} - ${email}`);
       });
       return data;
   }

   getRandomUsers(5); */




   // Handling Errors with Async Await //

   /* const getRandomUsers = async n => {
       try {
           const fetchRandomUsers = await fetch (`http://randonusers.me/api/?results=${n}`);
           const data = await fetchRandomUsers.json();
           data.results.forEach(user => {
               const {gender, email} = user;
               console.log(`${gender} - ${email}`);
           })
           return data;
       } catch (err) {
           console.log(err);
       }
   } */



   






   /* class human {
       constructor(name, age, gender) {
           this.name = name;
           this.age = age;
           this.gender = gender;
       }

       walk() {
           console.log(`${this.name} is walking.`);
       }

       talk() {
           console.log(`${this.name} is talking.`);
       }

       eat() {
           console.log(`${this.name} is eating.`);
       }

       logGender() {
           console.log(`${this.name} is a ${this.gender}`);
       }

       logHisAge() {
           console.log(`${this.name} is ${this.age} years old.`);
       }
   }

   const Michael = new human ("Michael", 30, "Male");

   Michael.walk();
   Michael.talk();
   Michael.eat();
   Michael.logGender();
   Michael.logHisAge(); */