# OOPS

### Definition

- OOP stands for Object Oriented Programming Language which solves drawbacks of Procedural Programming Languages which is mainly reusability and maintainability.

### Benefits of OOPS
- Easy to scale, Secure
- Software complexity easy to manage and distribute

### Object and Classes

- Object is a piece of code representing a real life entity and are created from a blueprint which are classes.
- Classes are data types and objects are instances of class, hence classes don't occupy memory location but object does.
- Without creating the object, we can only use static members of the class.
- Objects have state, behaviour and identity. State are the data fields, behaviour is constructor, selector modifier & destructor functions and identity is its individualism that separate it from other types of objects. 

### Features of OOPs

- There are 4 pillars of OOPS - abstraction, encapsulation, polymorphism and inheritance
- Abstraction is hiding of all the complexities and working of the class and only present things which are useful to end users.
- Encapsulation is combining both the data and its modifier methods in a single unit called class for the purpose of protection.
- Polymorphism means many forms and it is of 2 types - compile time polymorphism and run time polymorphism.
- Inheritance is deriving a new class from an existing class and inheriting some or all of the attributes of the existing class.
    - Inheritance is of 5 types - single level, multi level, multiple,  hierarchical and hybrid.
    - Single level is "IS A" relation where derived class is derived from a single base class. (fruit -> orange)
    - In multi level there is more than 1 level1 of derived classes (food -> fruit -> citric fruit -> oranges)
    - Multiple inheritance is derived class derived from more than 1 base class.
    - Hierarchical inheritance is derivation of classes in a hierarchical manner (parent -> children -> grand children)
    - Hybrid inheritance is combination of hierarchical + multiple or multilevel + multiple

### Data Hiding
- This is the technique to internal object details.
- To do this, we have access modifiers (public, private and protected) which describes the access level of each variable and methods.
- Private members can not be accessed outside of the class, public members can be accessed outside of the class and protected members can not be accessed outside of the class but can be accessed by the derived class.

### Abstract Data Type
- It is a collection of data and a set of operation on the data.
- It exposes the operations directly and not their internal working.

### Outside declaration of Functions
- Functions can be described outside the class using scope resolution operation.
- returnType className::functionName(parameters) {}

### Abstract Class
- When a class contains a pure virtual function (virtual void func() = 0;), it is an abstract class. 
- It can be instantiated but pointer and ref of abstract class can be created.
- It is mainly used for up-casting so that its derived class can use its interface.
- Pure virtual function are functions without any definition and are implemented inside the derived class.

## Constructors 
- It is of 3 types - default, parameterized and copy constructor