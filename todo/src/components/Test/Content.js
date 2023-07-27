export const Content = [
  {
    id: 1,
    Question: "Who invented C++",
    option: {
      A: "Dennis Ritchie",
      B: "Ken Thompson",
      C: "Brian Kernighan",
      D: "Bjarne Stroustrup",
    },
    Answer: "D",
    explanation:
      "Bjarne Stroustrup is the original creator of C++ in 1979 at AT&T Bell Labs.",
    Type: "Beginner",
    Chapter: "Basic Concepts",
  },
  {
    id: 2,
    Question: "What is C++",
    option: {
      A: "C++ is an object oriented programming language",
      B: "C++ is a procedural programming language",
      C: "C++ supports both procedural and object oriented programming language",
      D: "C++ is a functional programming language",
    },
    Answer: "C",
    explanation:
      "C++ supports both procedural(step by step instruction) and object oriented programming (using the concept of classes and objects).",
    Type: "Beginner",
    Chapter: "Basic Concepts",
  },
  {
    id: 3,
    Question:
      "Which of the following is the correct syntax of including a user defined header files in C++",
    option: {
      A: "#include [userdefined]",
      B: "#include “userdefined”",
      C: " #include <userdefined.h>",
      D: "#include <userdefined>",
    },
    Answer: "B",
    explanation:
      "C++ uses double quotes to include a user-defined header file. The correct syntax of including user-defined is #include “userdefinedname”.",
    Type: "Beginner",
    Chapter: "Basic Concepts",
  },
  {
    id: 4,
    Question:
      "Which of the following user-defined header file extension used in c++",
    option: {
      A: "hg",
      B: "cpp",
      C: "h",
      D: "hf",
    },
    Answer: "C",
    explanation:
      ".h extensions are used for user defined header files. To include a user defined header file one should use #include”name.h” i.e. enclosed within double quotes.",
    Type: "Beginner",
    Chapter: "Basic Concepts",
  },
  {
    id: 5,
    Question: "Pick the odd one out.",
    option: {
      A: "integer, character, boolean, floating",
      B: "enumeration, classes",
      C: "integer, enum, void",
      D: "arrays, pointer, classes",
    },
    Answer: "C",
    explanation:
      "integer, character, boolean & floating consists of all fundamental types, enumeration & classes consists of user-defined types and arrays, pointer & classes consists of derived types but integer, enum & void is a mixture.",
    Type: "Beginner",
    Chapter: "Types, Pointers, Arrays & Structures",
  },
  {
    id: 6,
    Question: "Which is more effective while calling the functions",
    option: {
      A: "call by value",
      B: "call by reference",
      C: "call by pointer",
      D: "call by object",
    },
    Answer: "B",
    explanation:
      "In the call by reference, it will just passes the reference of the memory addresses of passed values rather than copying the value to new memories which reduces the overall time and memory use.",
    Type: "Beginner",
    Chapter: "Functions, Namespaces & Exceptions",
  },
  {
    id: 7,
    Question: "Which keyword is used to represent a friend function",
    option: {
      A: "friend",
      B: "Friend",
      C: "friend_func",
      D: "Friend_func",
    },
    Answer: "A",
    explanation: "friend keyword is used to declare a friend function.",
    Type: "Intermediate",
    Chapter: "Source Files, Classes and Operator Overloading",
  },
  {
    id: 8,
    Question:
      "Where should we place catch block of the derived class in a try-catch block",
    option: {
      A: "Before the catch block of Base class",
      B: "After the catch block of Base class",
      C: "Anywhere in the sequence of catch blocks",
      D: "After all the catch blocks",
    },
    Answer: "A",
    explanation:
      " C++ asks the programmer to place the catch block of derived class before a catch block of the base class, otherwise derived catch block will never be executed.",
    Type: "Intermediate",
    Chapter: "Derived Classes, C++ Templates & Exception Handling",
  },
  {
    id: 9,
    Question: "What is the use of ios::trunc mode",
    option: {
      A: "To open a file in input mode",
      B: " To open a file in output mode",
      C: "To truncate an existing file to half",
      D: "To truncate an existing file to zero",
    },
    Answer: "D",
    explanation:
      "In C++ file handling, ios::trunc mode is used to truncate an existing file to zero length.",
    Type: "Advanced",
    Chapter: "Strings, Streams & Numerics",
  },
  {
    id: 10,
    Question: "Which is the correct way of handling arguments with spaces",
    option: {
      A: "Use single quotes",
      B: "Either single or double quotes",
      C: "Use double quotes",
      D: "There is no way of handling arguments with space",
    },
    Answer: "B",
    explanation:
      "One can use either single or double quotes to handle command line argument with spaces in-between. For example, ./output “Hello World” has 2 command line argument “./output” and “Hello World”.",
    Type: "Advanced",
    Chapter: "Advanced Topics",
  },
];
