# Multi-Page Application:
A request is being sent by the client to the server and in response to this request the HTML, CSS, JS of that specific page is rendered by the server in the client’s device. In Multi-Page Applications, corresponding to every page their HTML, CSS, JS is rendered by the server.  

For example: While visiting codewithharry.com/contact its HTML will be served and while moving to codewithharry.com/about then again its HTML will be served.

# Single Page Application:
In this case, the request will be sent once by the client to the server, and all the HTML, CSS, JS will be rendered with the first request. Then, Javascript will take control of the whole application and with the help of APIs, the same page will be populated. This means that on the new request of the user it will serve the page without reloading it(with new request new js file will be rendered).

# Point to remember: 
- Whenever you are building the app for production, you should use the `npm run build` command instead of `npm start` to host your application.
- All HTML elements inside public/index.html will lie inside element `<div id="root"></div>`

# Exporting data
# 1. Default Export: In this case, if import occurs by any name, Suppose XYZ, then the default value will be exported. It is generally used to export a single object, function, or variable.

In module1.mjs:
const a = 'Harry';
const b = 'Rohan';
const c = 'Aakash';
const d = 'Lovish';
const e = 'Priyanka';
export default b;
This is an example of a Default export, Now let’s import it.

In module2.mjs:
import XYZ from './module1.js'
console.log(XYZ);

# 2. Named Export: In this case, we export some specific values. The name of import is dependent on the name of Export which means You can’t use a different name in the Import and Export function. We use Curly brackets for Named export.

In module1.mjs:
const a = 'Harry';
const b = 'Rohan';
const c = 'Aakash';
const d = 'Lovish';
const e = 'Priyanka';
export {b};

In module2.mjs:
import {b} from './module.js'
console.log(b);

# Advantages of Component:
By dividing your app into components you can reuse the component in the same or different app again and again. 

