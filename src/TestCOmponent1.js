
import React from "react"

function TestCOmponent1(props)
{
    //destructuring props
    const {id} = props

    //using state
    // Array destructuring , in case of object destructuring we would have given the same name as property
    const [result, setResult] = React.useState(0);
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
    const styles = {
        backgroundColor: props.darkMode ? "#222222": "#cccccc"
    }
    
    return (
        <div>
            <div onClick = {handleClick}>        
                <h1 style={styles}>test component RESET {id} {result} </h1>
            </div>
            <div onClick = {add}>        
                    <h1>counter </h1>
            </div>
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

export default TestCOmponent1