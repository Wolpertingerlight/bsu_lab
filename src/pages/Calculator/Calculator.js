import {useState} from "react";
import "./Calculator.css";
import {CButton} from "@coreui/react";

function Calculator() {
    const [result, setResult] = useState("");
    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
    }
    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, -1));
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString())
        } catch (err) {
            setResult("Error")
        }
    }
    return (
        <div className={"calculatorContainer"}>
            <form>
                <input type={"text"} value={result}/>
            </form>
            <div className={"keypad"}>
                <CButton color="dark"  className="m-1" id={"clear"} onClick={clear}>C</CButton>
                <CButton color="dark"  className="m-1" id={"backspace"} onClick={backspace}>↺</CButton>
                <CButton color="dark"  className="m-1" name={"/"} onClick={handleClick}>&divide;</CButton>
                <CButton color="dark" className="m-1" name={"7"} onClick={handleClick}>7</CButton>
                <CButton color="dark" className="m-1" name={"8"} onClick={handleClick}>8</CButton>
                <CButton color="dark" className="m-1" name={"9"} onClick={handleClick}>9</CButton>
                <CButton color="dark"  className="m-1" name={"*"} onClick={handleClick}>&times;</CButton>
                <CButton color="dark" className="m-1" name={"4"} onClick={handleClick}>4</CButton>
                <CButton color="dark" className="m-1" name={"5"} onClick={handleClick}>5</CButton>
                <CButton color="dark" className="m-1" name={"6"} onClick={handleClick}>6</CButton>
                <CButton color="dark"  className="m-1" name={"-"} onClick={handleClick}>&ndash;</CButton>
                <CButton color="dark" className="m-1" name={"1"} onClick={handleClick}>1</CButton>
                <CButton color="dark" className="m-1" name={"2"} onClick={handleClick}>2</CButton>
                <CButton color="dark" className="m-1" name={"3"} onClick={handleClick}>3</CButton>
                <CButton color="dark"  className="m-1" name={"+"} onClick={handleClick}>+</CButton>
                <CButton color="dark" className="m-1" name={"0"} onClick={handleClick}>0</CButton>
                <CButton color="dark" className="m-1" name={"."} onClick={handleClick}>.</CButton>
                <CButton color="dark"  className="m-1" id={"result"} onClick={calculate}>=</CButton>
            </div>
        </div>
    )
}

export default Calculator;