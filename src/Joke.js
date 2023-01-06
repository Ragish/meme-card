import React from "react"

export default function Joke(props) {
    


    // 3. Conditional rendering: Ternary operator starts here
    // const[isShown, setIsShown] = React.useState(true)

    // function toggle() {
    //     setIsShown(isShown => !isShown)
    // }

    // return (
    //     <div className="jokeContainer">
    //         <h3>{props.setup}</h3>
    //         {isShown && <p>{props.punchline}</p>}
    //         <button onClick={toggle}>{isShown ? "Hide" : "Show"} punchline</button>
    //     </div>
    // )
    // Conditional rendering: Ternary operator ends here


    
    //1. Toggle punchline joke : Joke component starts here
    // return (
    //     <div>
    //         {props.setup && <h3>{props.setup}</h3>}
    //         {props.isShown && <p>{props.punchline}</p>}
    //         <button onClick={props.toggleShown}>Show Punchline</button>
    //         <hr />
    //     </div>
    // )
    //Toggle punchline joke : Joke component ends here


}