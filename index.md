React is a javascript library that helps to build the user interfaces

React is a library not a framework , a library is a tool that provides the specific functionality like a tool
While a framework is a set of tools and guidelines used to build apps  like a tool set

so as the React is a library not a framework it will need another tools to handle other functionalities it doesn't handle like Routing, state management , Form validation , etc.

React is well known for this 
1. UI
2.Routing
3.HTTP
4.Managing app state
5.Internationalization
6.Form Validation
7.Animations


About the state we have seen that each React component has its own state management event though they can be of the same type


Difference and similarity of props and state 
Props: Input passed to a component and is similar to functional argument (Immutable)
State: Internal data managed by the component itself like the variables(Mutable variables) 

both any time they change react renders them automatically

Difference between children and props
Props are used to pass data as attributes to the component itself while children is used to pass content as new react nodes and are placed as the component has behaved like html tag to mean having the opening and closing tags and the content is placed between them 

Separation of concerns
It is a piece of dividing a program into distinct sections where each section handles specific functionality , rather than having everything in one place
This will help us to hav the programs which are modular , easier to understand and easy to modify


The understanding of the state hook 
.React update the state asychronously for performance reasons
to minimize the unnecessary re-renders it batches up the updates and then rerenders a component.
.React state is stored outside of the component  due to within javascript variables within functions are scooped to that function and when at the completion of the execution of a function all variables are set to initial values due after the execution of a function they are removed from memory 

.use hooks at the top level of the component

Choosing the state structure
....avoid the redundant state variables to mean creating the another state  variable from exiting state variables
.....Group the related state variables into one defined object
....avoid deeply nested structures

The purity of components 
Generally a pure function in programming is a function which given same input returns the same result

hence to mean components takes props as input and renders the jsx as output 
so to keep our components pure we have to keep the changes out of the render phase

React strict mode is used to catch the potential problems such as impure functions and this by default is enabled and this re-render a component twice and takes the result of the second render , the first render is to catch the problems within our code and the second is used primarily to update the UI


State updates 
+++In react to update an object with state we have to give react like a map of updated object instead of an element only 
so updating the objects we use the spread operator but it's shallow when it goes to things like nested objects where we have to first spread every nested object and then we have to modify their properties


updating the arrays
for adding an item() : __ we use the spread operator to mean to first copy all the items in the array and then add another 
like customers = ["Yves", "Pamella", "David"]
adding an customer => newCustomers(...customers, "Debrice")
removing we use filter => customers.filter(person => person !== "Yves")
updating we use map => customers.map(person => person === "David" ? "Davine" : person)

updating the array of objects
here we simply just join the logic of updating objects but within the arrays so nothing just recognizing an item index or key then update accordingly using map of javascript

just by first copying all elements in the object you want to modify then make necessary changes or keep the object unchanged due to its id

example :
setCustomers(customers.map(customer => customer.id === 1 ? {...customer, money: 30000} : customer))
  console.log(customers)



*******THe use of the useRef hook in react forms 
Generellary this is used to reference an html element on the dom to mean when used it is used to render the dom element as the html element


@@@@@~ --> Understanding the useEffect hook
As we have to write the pure functions we have to keep changes out of the render phase so not to to have a dynamic effect
With this effect hook we use this to execute a piece of code after the component is rendered 

Understanding useEffect dependencies 
not having any dependency array useEffectHook will execute code on every render to mean infinitely which can slow down the server
having empty dependency array will cause react to execute code on the first render
having atleast a dependency array will cause react to execute code on change of that state 

|||___Promise
AN object which hold the eventual result or failure of the asynchronous function

Optimistic update 
  11£££££.Update the UI then call the server
Pessimistic update 
  call the server than update the ui


  what is the difference between the put and patch methods on the server
  Put----...we use the put method for replacing the object to mean we take new object and replace the old one 
  Patch----...we use patch method for updating one or more properties of the object 


  services @@@@@@@@@( how to use the reusable api)
  
