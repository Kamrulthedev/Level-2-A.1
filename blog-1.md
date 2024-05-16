
## Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

 Type guard A type guard is used to check the type of a type.They are necessary for handling situations where types can be uncertain or ambiguous.
 Here are the different types of type guards discussed why type guards are important and their uses:-
1. Why Type Guards Are Necessary:-
 # Type Safety in Runtime:
   TypeScript's type system provides compile-time type safety, but type guards help maintain this safety at runtime, especially when working with union types or mixed data.
 # Avoiding Runtime Errors:
   Type guards ensure that code doesn't perform invalid operations on the wrong types, reducing runtime errors like TypeError.
 # Conditional Logic:
   Type guards help apply different logic depending on the type, allowing for more dynamic and adaptable code.
2. Various Types of Type Guards:-
3. 
  1. typeof Operator:-
    The typeof operator checks the basic type of a variable, such as string, number, boolean, object, etc.

      ## function logValue(value: unknown): void {
          if (typeof value === 'string') {
             console.log(`This is a string: ${value}`);
               } else if (typeof value === 'number') {
                console.log(`This is a number: ${value}`);
           }  
      };
   ## logValue('Hello');

  2. 'instanceof' Operator:-
    The 'instanceof' operator checks if an object is an instance of a specific class or constructor.
       
    ##  class Dog {
           Gaew(){
            console.log("Gaew!");
          }
      };
      
    #  class Cat {
          meow(){
           console.log("Maew!");
         }
      };
      
    # function interactWithPet(pet: Dog | Cat){
        if (pet instanceof Dog) {
          pet.bark(); 
        } else if (pet instanceof Cat) {
          pet.meow(); 
        }
      };
      
    # //call the function
      const myPet = new Dog();
      interactWithPet(myPet);

  3. Custom Type Guards:-
     Custom type guards use a type predicate to specify a condition that checks whether a variable is of a certain type. A type predicate returns a boolean value and explicitly states the expected type if the condition is true.

Type guards are essential in TypeScript for ensuring type safety, reducing runtime errors, and providing conditional logic based on type. 
