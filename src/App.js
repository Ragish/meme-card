import React from "react";
// import Joke from "./Joke";
// import jokesData from "./jokesData";
// import Form from "./Form";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {
  


  //Displaying meme image and text starts here
  return (
    <div>
        <Header />
        <Meme />
    </div>
)
//Displaying meme image and text ends here

  //6. Form- Change firstname and lastname state ---Forms state object starts here
  //return <Form />
  //Form- Change firstname and lastname state ---Forms state object ends here

  // 5. Form component starts here

  // Form component ends here

  // 4. Displaying no of unread msg text using conditional rendering starts here
  // const [messages, setMessages] = React.useState(["rag", "sumi"])
  // const noMessageText = "You're all caught up!"
  // const unreadMessageText = "You have <n> unread message(s)"
  // return (
  //     <div>
  //     {messages.length===0 ?
  //     <h1>You're all caught up!</h1> :
  //     <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}.</h1>
  //     }
  //     </div>
  // )
  // Displaying no of unread msg text using conditional rendering ends here

  //3. Conditional rendering: Ternary operator starts here
  //   const jokeElements = jokesData.map((joke) => {
  //     return (
  //     <Joke
  //     key={joke.id}
  //     setup={joke.setup}
  //     punchline={joke.punchline}
  //     />
  //     )
  //   });
  //   return<div>{jokeElements}</div>
  //Conditional rendering: Ternary operator ends here
  //   2. Conditional rendering to display message starts here
  //   const newArray = ["ragish", "Sumi"];
  //   return <div>{newArray.length>0 && `You have ${newArray.length} new messages.`}</div>
  //   Conditional rendering to display message starts here

  // 1. Toggle punchline joke : Joke component starts here
  // const [isShown, setIsShown] = React.useState(false)
  // function toggleShown(){
  //     setIsShown(prevShown => !prevShown)
  // }
  // const jokeElements = jokesData.map(joke => {
  //     return (
  //         <Joke
  //             key={joke.id}
  //             setup={joke.setup}
  //             punchline={joke.punchline}
  //             toggleShown = {toggleShown}
  //             isShown={isShown}
  //         />
  //     )
  // })
  // return (
  //     <div>
  //         {jokeElements}
  //     </div>
  // )
  // Joke component ends here
}
