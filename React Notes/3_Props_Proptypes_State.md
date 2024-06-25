# A1] Props:
- Props stand for Properties. It is used to Pass information into the React Components. For example, if we create a custom Component, then by using Props, we can pass data into it in the form of Objects, strings, numbers, etc.

- React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

function app() {
    return (
        <>
            <Navbar title="Textutils" aboutText="About Textutils" /> //props look like (attributes in HTML)
        </>
    );
}

# To access in Navbar.js 
import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.aboutText}</h2>
        </div>
    );
}

# A2] Prop-type:
Setting type of props (Preventing wrong type of props)
Firstly, we need to import prop types to do so, use this command
import PropTypes from 'prop-types'

//Proptypes
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string,
};

//If no props is passed then default values are used
Navbar.defaultProps = {
    title: 'Set title here',
    about: 'About text here'
};


# A3] State:
In React, state is a built-in object that allows components to maintain and manage data that can change over time. It is used to create dynamic and interactive components. Here's a concise overview:

# Hook in React:
Hook allows you to use state and other react features with a function-based component,  that is without writing a class.

# useState: It is the type of hook in react which allows us to use state variables in the function-based components.

# 1) Initialization:
Functional Component: State is initialized using the useState hook.

import React, { useState } from 'react'; //importing useState hook
function MyComponent() {
  const [count, setCount] = useState(0);
}

//count is like a variable that stores value from right side (0)
//setCount is a function that is used to update count variable(state)

# 2) Updating State:
setCount(count + 1);

# 3) Reactivity:
When the state changes, React re-renders the component to reflect the new state.

# 4) Props vs. State:
Props: Read-only data passed from parent to child components.
State: Data managed within the component that can change over time.
State in React enables components to be dynamic and interactive

