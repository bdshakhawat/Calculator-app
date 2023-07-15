import { useState } from "react"


function Keypad() {

    let [input, setInput] = useState("")

    function handleClick(value) {

        setInput(input + value)
  
  }
  function calculate(value) {
  
        // eslint-disable-next-line no-eval
        let outputVal = eval(input)
        setInput(outputVal)
  
  }
  function handleClear() {
  
        setInput("")
  
  }
  
    return (
        <div className="keypad">
            <input type="text" value={input} className="output" readOnly />
            <div className="row">
                <button onClick={
                    () => {
                        handleClick("7")
                    }
                } className="digit">7</button>
                <button className="digit" onClick={
                    () => {
                        handleClick("8")
                    }
                }>8</button>
                <button className="digit" onClick={
                    () => {
                        handleClick("9")
                    }
                }>9</button>
                <button className="operator" onClick={
                    () => {
                        handleClick("/")
                    }
                }>/</button>

            </div>
            <div className="row">
                <button className="digit" onClick={
                    () => {
                        handleClick("4")
                    }
                }>4</button>
                <button className="digit" onClick={
                    () => {
                        handleClick("5")
                    }
                }>5</button>
                <button className="digit" onClick={
                    () => { handleClick("6") }
                }>6</button>
                <button className="operator" onClick={
                    () => {
                        handleClick("*")
                    }
                }>*</button>

            </div>
            <div className="row">
                <button className="digit" onClick={
                    () => {
                        handleClick("1")
                    }
                }>1</button>
                <button className="digit" onClick={
                    () => {
                        handleClick("2")
                    }
                }>2</button>
                <button className="digit" onClick={
                    () => {
                        handleClick("3")
                    }
                }>3</button>
                <button className="operator" onClick={
                    () => {
                        handleClick("-")
                    }
                }>-</button>

            </div>
            <div className="row">
                <button className="digit" onClick={
                    () => {
                        handleClick("0")
                    }
                }>0</button>
                <button className="fun-keys" onClick={() => {
                    calculate()
                }
                }>=</button>
                <button className="fun-keys" onClick={() => {
                    handleClear()
                }
                }>C</button>
                <button className="operator" onClick={
                    () => {
                        handleClick("+")
                    }
                }>+</button>

            </div>
            


        </div>
    )
}

export default Keypad


// The given code is a React component called "Keypad" that represents a simple calculator keypad. It uses React's useState hook to manage the state of the input value.

// The component renders a <div> element with the class name "keypad" containing the calculator keypad buttons. It also includes an <input> element with the class name "output" to display the current input value.

// The state variable input is initialized using the useState hook with an initial value of an empty string. The setInput function is used to update the value of input.

// The component defines several functions to handle user interactions:

// handleClick: This function is called when a digit or operator button is clicked. It appends the clicked value to the current input value by updating the state using setInput.

// calculate: This function is called when the "=" button is clicked. It evaluates the current input string as a mathematical expression using the eval function and assigns the result to the outputVal variable. Then it updates the input state with the calculated result using setInput.

// handleClear: This function is called when the "C" button is clicked. It clears the input by setting it to an empty string using setInput.

// The JSX code within the return statement defines the structure and appearance of the calculator keypad. It uses nested <div> elements and <button> elements to create rows and buttons, respectively. Each button has an onClick event handler that calls the appropriate function based on the button's value.

// The value attribute of the <input> element is set to the input state variable, ensuring that the displayed value always reflects the current input.

// Finally, the Keypad component is exported as the default export of the module, allowing it to be imported and used in other React components.





// User
// what is the function of eval function here
// ChatGPT
// In the given code, the eval() function is used to evaluate a string expression as a JavaScript code. In the calculate() function, it is used to evaluate the current input string as a mathematical expression and obtain the result.

// Here's how it works:

// When the user clicks the "=" button, the calculate() function is called.
// Inside the calculate() function, the eval() function is used to evaluate the input string.
// The eval() function takes the input string as an argument and interprets it as JavaScript code.
// It performs the mathematical calculation specified by the input string and returns the result.
// The calculated result is assigned to the outputVal variable.
// Finally, the setInput(outputVal) function is called to update the state of the input variable with the calculated result.
// However, it's important to note that using eval() can be potentially unsafe and is generally discouraged. It allows the execution of arbitrary code, which can lead to security vulnerabilities if used with untrusted input. In a real-world scenario, it's recommended to implement a custom expression evaluator or use a trusted library specifically designed for mathematical calculations instead of relying on eval().

