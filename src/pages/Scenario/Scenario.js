import "./Scenario.css"
function Scenario(){
    const squareContainer = {
        marginTop: "10%",
        width: "50%",
        marginLeft: "50%",
    }
    return(
        <div style={squareContainer}>
            <div  className={"square"}>∎</div>
        </div>
    );
}

export default Scenario;