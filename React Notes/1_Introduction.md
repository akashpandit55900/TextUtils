# 1) JSX
    - JSX stands for JavaScript XML. It's a syntax extension for JavaScript that lets you write HTML-like code directly within your JavaScript files.

# 2) React Components:
React has two types of Components:

    - Function-based Component: In short they are the JavaScript functions. Nowadays, Function-based components are primarily used.
    
    -Class-based Component: They are quite complex than the function-based component as the class components can work with each other.

# 3) The Rules of JSX 

# 1. Return a single root element (only 1 element can be returned)
    -To return multiple HTML elements from a component, wrap them with a single parent tag.
    For example, you can use a <div>

    -If you don’t want to add an extra <div> to your markup, you can write <> and </> instead,
    This empty tag is called a JSX Fragment

# 2. Close all the tags 
    - JSX requires tags to be explicitly closed: self-closing tags like 
    <img> must become <img />
    
    - Since HTML element may have attributes that conflicts with the js variable name conventions, we use camelCase names, e.g
            in HTML       in JSX
        -   class         className
        -   for           htmlFor
        -   href= “#”     href= “/”


# 4) Adding JavaScript:
    To add JavaScript in JSX we have to write the JS code in curly brackets.e.g
    
let name = "harry";          //js code
<h1>Hello {name}</h1>        //In jsx we write 
//Any 1 line js code can be written in {}

# 5) Note: 
    I) Import all necessary files
    II) Create function based/class based components
    III) Return jsx code from those component
    IV) export default App; //export statement

# 6) File structure:
- All code of react (react components) lies in src folder
- All js file in src are called `components`.
- public/index.js is entry point our react app
- public folder is available to all
- Always start react with src/App.js
- All component file name starts with capital letters
- <App/> //App component (App.js file in src folder)

# 7) Finally all jsx will be converted into js

# 8) To acess title from anywhere
    document.title = "Any Title here";