
/*

A React component automatically re-renders whenever there is a change in state or props, it only takes a simple state update from anywhere in the code to automatically re-render UI elements


useEffect(()=>{},[]) //this is like componentDidMount(componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
)
useEffect(()=>{}) //this will run every render
useEffect(()=>{},[dep1, dep2]) //this will run if one or other dependency change

https://dmitripavlutin.com/react-useeffect-explanation/#:~:text=useEffect(callback%2C%20dependencies)%20is,being%20props%20or%20state%20values.
https://www.freecodecamp.org/news/react-useeffect-absolute-beginners/

Side effects should be separated from the rendering process. If we need to perform a side effect, it should strictly be done after our component renders.

In short, useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in

The function passed to useEffect is a callback function. This will be called after the component renders.

The second argument is an array, called the dependencies array. This array should include all of the values that our side effect relies upon.

In our example above, since we are changing the title based off of a value in the outer scope, name, we need to include that within the dependencies array.

What this array will do is it will check and see if a value (in this case name) has changed between renders. If so, it will execute our use effect function again.

There are some subtle details to be aware of avoid mistakes with useEffect.

If you do not provide the dependencies array at all and only provide a function to useEffect, it will run after every render.

This can lead to problems when you're attempting to update state within your useEffect hook.

If you forget to provide your dependencies correctly and you are setting a piece of local state when the state is updated, the default behavior of React is to re-render the component. And therefore, since useEffect runs after every single render without the dependencies array, we will have an infinite loop.

If you are updating state within your useEffect, make sure to provide an empty dependencies array. If you do provide an empty array, which I recommend you do by default for any time that you use useEffect, this will cause the effect function to only run once after the component has rendered the first time.

A common example for this is to fetch data. For a component, you may just want to fetch data once, put it in state, and then display it in your JSX.

function MyComponent() {
  const [data, setData] = useState([])  
    
  useEffect(() => {
    fetchData().then(myData => setData(myData))
    // Correct! Runs once after render with empty array
  }, []); 
   
  return <ul>{data.map(item => <li key={item}>{item}</li>)}</ul>
}

function Timer() {
  const [time, setTime] = useState(0);
    
  useEffect(() => {
    let interval = setInterval(() => setTime(1), 1000); 

    return () => {
      // setInterval cleared when component unmounts
      clearInterval(interval);
    }
  }, []);
}

3.1 Component did mount
Use an empty dependencies array to invoke a side-effect once after component mounting:

3.2 Component did update
Each time the side-effect uses props or state values, you must indicate these values as dependencies:

=============== useRef
https://dmitripavlutin.com/react-useref-guide/

There are 2 rules to remember about references:

The value of the reference is persisted (remains unchanged) between component re-renderings;
Updating a reference doesn't trigger a component re-rendering.

import { useRef } from 'react';
function LogButtonClicks() {
  const countRef = useRef(0);
  
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };
  console.log('I rendered!');
  return <button onClick={handle}>Click me</button>;
}

Updating the reference value countRef.current++ doesn't trigger component re-rendering. This is demonstrated by the fact that 'I rendered!' is logged to the console just once, at initial rendering, and no re-rendering happens when the reference is updated.

Another useful application of the useRef() hook is to access DOM elements directly. This is performed in 3 steps:

Define the reference to access the element const elementRef = useRef();
Assign the reference to ref attribute of the element: <div ref={elementRef}></div>;
After mounting, elementRef.current points to the DOM element.


*/


import React, { useEffect } from "react"

// you use destructuring in the function parameter itself, so we could have written
// export function TestCOmponent1({id})
export function TestCOmponent1(props)
{
    //destructuring props
    const {id} = props

    console.log('Test component rendered')
    //using state
    // Array destructuring , in case of object destructuring we would have given the same name as property
    const [result, setResult] = React.useState(0);
    const prev = React.useRef("")
    console.log(props)
    console.log(result)

    function handleClick() {
        setResult(0)
    }

    //best practice, if you ever need to use the old value of state better to pass a function in set state that take a parameter as old state
    function add(){
        /*
        setResult(function(oldValue){
            return oldValue + 1
        })
        */
       setResult((prev) => prev + 1)
    }

    //styling using react dynamically using react
    // To read more about styling using react refer this https://www.w3schools.com/react/react_css.asp
    const styles = {
        backgroundColor: props.darkMode ? "#222222": "#cccccc"
    }


    useEffect(() => {
        console.log('result', result)
        prev.current = result
        console.log('prev', prev.current)
    }, [result])

    return (
        <div>
            <div onClick = {handleClick}>        
                <h1 style={styles}>test component RESET {id} {result} </h1>
            </div>
            <div onClick = {add}>        
                    <h1>counter </h1>
            </div>
            <p>{prev.current}</p>
        </div>
    )
}

//using the effect hooks
//https://reactjs.org/docs/hooks-effect.html
//https://overreacted.io/a-complete-guide-to-useeffect/


/*

1. What is a "side effect" in React? What are some examples?
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync


2. What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, 
  render DOM elements


3. When does React run your useEffect function? When does it NOT run
   the effect function?
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders


4. How would you explain what the "dependecies array" is?
- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function



the first parameter function inside useEffect can be used to return one more function that react uses to cleanup things, if you are calling an api inside the
first parameter function use then rathen then using async await 


*/

// export default TestCOmponent1

// sometimes even after applying memoization it renders the component, read this https://www.w3schools.com/react/react_usecallback.asp 
export const MemoziedTestMemo = React.memo(TestCOmponent1)