# Javascript and Classes

## OOP (Object Oriented Programmin)

- collectionof properties and methods
- tolowerCase

## why use OOP

- Object Oriented Programming (OOP) is a style of programming that uses classes and objects to model real-world things like data and behavior. A class is a blueprint that defines the properties and methods an object can have, while an object is a specific instance created from that class.

## Why OOP is Needed:

Before OOP, when the code size grows and multiple people work on a project, there problems arise

\*\* Changing in one team's code causing other codes to break. Hence difficult to maintain.
\*\* Large number of parameters during function calls.
\*\* Difficult to divide and maintain code across teams.
\*\* Limited Code Reusability
\*\* Not scalable as the code is not modular.

## parts of OOP

# 1.> Object literal

-- Object literal ek simple tarika hai object banane ka — bina class ya constructor function ke.
Yani hum directly ek object bana lete hain {} braces ka use karke.

# 2.> constructor function

    - Constructor function ek blueprint hota hai object banane ke liye.
      Isse hum multiple similar objects bana sakte hain.

# 3.> Prototypes

-- JavaScript me har object ke paas ek hidden property hoti hai [[Prototype]],
jisse hum common methods share kar sakte hain — taaki har object me duplicate code na likhna pade.

# 4.> Classes (ES6)

-- class ek modern aur clean syntax hai jo constructor aur prototype ko combine karta hai.
Internally yeh still prototypes hi use karta hai.

# 5.> Instances (new & this)

- Instance matlab ek object jo class ya constructor function se bana ho.
  ** new => ek naya object banata hai.
  ** this => us naye object ko refer karta hai.
  \*\* Har instance ke apne properties ho sakte hain, lekin prototype methods share hote hain.

## 4 pillars

# 1.< Abstraction (छुपाना – Hide Complexity) >

-- Abstraction ka matlab hota hai complex cheezein user se hide karna aur sirf essential details dikhana.

# 2.< Encapsulation (Data ko Protect Karna) >

-- Encapsulation ka matlab hai data aur functions ko ek unit me band kar dena (object/class ke andar)
Aur data ko direct access se protect karna.

# 3.< Inheritance (Reuse Karna) >

-- Inheritance ka matlab hai ek class ke properties aur methods ko doosri class me reuse karna.
Yani “child class inherits parent class”.

# 4. < Polymorphism (Ek Kaam, Alag Tarike Se Karna) >

-- Polymorphism ka matlab hai same method name but different behavior depending on the object.



# New Code 
\*

Here's what happens behind the scenes when the new keyword is used:

## A new object is created: The new keyword initiates the creation of a new JavaScript object.

## A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

## The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

## The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/