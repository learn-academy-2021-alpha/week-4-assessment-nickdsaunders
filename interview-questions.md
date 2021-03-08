# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: 
  An instance variable is a variable that only exist locally in an object.

  Researched answer:
  An instance variable starts with an @, meaning it belongs to the instance of a class (which is an object). Each instance of a class has its own set of instance variables indespendent of other objects.


2. What is a block in Ruby?

  Your answer: 
  A block in Ruby is like an anonymous function in Javascript.

  Researched answer:
  Ruby has anonymous functions similar to JavaScript that are called blocks. Blocks are code that is passed passed to a mehtod, and can be created with do/end keywords or with curlies {}.



3. Ruby has an implicit return. What does that mean?

  Your answer:
  Implicit return means that it will automatically return the last line of code and you don't have to tell it to return.

  Researched answer:
  The value of the last line of a method is automatically returned without using the keyword return.



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object oriented programming uses objects to contain data that can be manipulated through methods and functions. I am not exactly sure what functional programming is.
  

  Researched answer: 
  A programming paradigm that was created to deal with the complexity of large software systems. It is a way to create containers for data that can be changed and manipulated without affecting the entire program. In Functional programming the output of a function should always be the same, given the same exact inputs to the function, it avoids changing state and mutable data.



5. What is the difference between a class and an object?

  Your answer: 
  In ruby everything is an object so a class is an object.

  Researched answer:
  In Ruby all values are objects and all objects belong to a class. The class defines what data and behavior exist in the object. An object is the intersection of data and behavior, the data is information stored in variables and the behavior are function that belong to the object called methods.


6. STRETCH: What is `attr_accessor`?

  Your answer: 
  The attr_accessor can be used to set and get values in a class.

  Researched answer:
  In Ruby the attr_accessor automatically sets up setter and getter methods for instance variables, and allows you to set and get values from outside the class.


## Looking Ahead: Terms for Next Week
- MVC - Model view controller software design pattern used for developing user interfaces that divides realted program logic into 3 interconnected elements. Rails is an MVC framwork, providing default structures for databases, a web service, and web pages.

- PostgreSQL - An open source object-relational database management system, which means Postres looks at databases through an object-oriented programming lens.

- API - Application programmming interface - computer interface that defines interactions between multiple software or mixed hardware software intermediaries.

- CRUD - Creating, Reading, Updating, and Deleting will accomplish almost all the tasks needed to do to an object creating a standard language and structure across all of the objects in our application.

- Ruby on Rails - Ruby on Rails is a server-side web application framework written in Ruby. 

- ORM - A programming technique for converting data between incompatible type systems using object-oriented programming languages.

- Active Record - The M in MVC "Model" - which is the layer of the system responsible for representing business data and logic.
