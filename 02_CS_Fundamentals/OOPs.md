# Topics

1. oop & its features
2. classes and objects
3. polymorphism
4. inheritance
5. static variable
6. function overloading/overriding
7. friend function
8. call by value, call by reference
9. constructor and destructor
10. reference vs pointer
11. virtual function
12. type conversion
13. default function
14. inline function
15. macros
16. this pointer
17. exception handling
18. copy constructor
19. abstract class and interface

# OOP vs POP and OOP Features
* Object Oriented Programming and Procedural Oriented Programming
* OOP follow bottom approach and POP follows top-down approach
* OOP focuses on objects/classes and POP focuses on functions
* OOP has encapsulation, polymorphism, inheritance and abstraction while POP doesn't.
* Abstraction is exposing only the relevant methods to the outside world.
* Encapsulation wraps all the related methods and properties in a single unit.
* Polymorphism is when a function/operator takes many forms.
* Inheritance is a class inheriting the methods and properties of another class.

# Classes and Objects
* Classes are blueprints of an object containing methods and properties.
* Objects are instance of class representing some real life entity.

```cpp
// class
class Car {
  string name;
  int price;
  string getPrice(){
    return price;
  }
  void changeName(string newName){
    name = newName;
  }
};
// object
Car obj; 
```

# Constructor and Destructor

# Abstraction

# Polymorphism
* There are 2 types of polymorphism
    - Compile time polymorphism
      - The function to be executed is known at compile time.
      - Function overloading
    - Runtime polyphormism
      - The function to be executed is known at run time.
      - Function overriding

# Inheritance

# Friend Function

# Inline Function

# Default Function

# Virtual Function

# Static Variable

# Pointer vs Reference

# Call by Value/Reference

# Macros

# this Keyword

# Exception Handling

# Abstract classes and interface