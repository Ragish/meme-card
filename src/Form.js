import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export default function Form() {

/**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */



const [formData, setFormData] = React.useState(
    {
        email:"",
        password: "",
        confirmPassword: "",
        okToEmail: false
    }
)

function changeHandler(event) {
    const {name, value, type, checked} = event.target

    setFormData(prevValue => {
        return{
            ...prevValue, 
            [name]: type ==="checkbox" ? checked : value

        }
    })
}
    
function handleSubmit(event) {
    
    event.preventDefault()
    if (formData.password === formData.confirmPassword) {
        console.log("passwords matched")
    }else {
        console.log("passwords do not match")
        return
    }
    if (formData.okToEmail) {
        console.log("Thank you for subd to newsletter")
    }

}

return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                name="email"
                onChange={changeHandler}
                value={formData.email}
            />
            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                name="password"
                onChange={changeHandler}
                value={formData.password}
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                className="form--input"
                name="confirmPassword"
                onChange={changeHandler}
                value={formData.confirmPassword}
            />
            
            <div className="form--marketing">
                <input
                    id="okToEmail"
                    type="checkbox"
                    name="okToEmail"
                    onChange={changeHandler}
                    checked={formData.okToEmail}
                    
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button 
                className="form--submit"
            >
                Sign up
            </button>
        </form>
    </div>
)



//1. Form input, textarea, and so on starts here
//   const [formData, setFormData] = React.useState(
//     {
//         firstName: "", 
//         lastName: "", 
//         email: "", 
//         comments: "",
//         isFriendly: true
//     });
//   console.log(formData)

//   function changeHandler(event) {
//     const {name, value, type, checked} = event.target;

//     setFormData(prevValue => {
//         return{
//             ...prevValue, 
//             [name] : type === "checkbox" ? checked : value
//         }
//     })
//   }

//   return (
//     <form action="" className="form">
//     <input 
//         onChange={changeHandler} 
//         type="text" 
//         placeholder="Type your first name" 
//         name="firstName"
//         value={formData.firstName}
//     />
//     <input 
//         onChange={changeHandler} 
//         type="text" 
//         placeholder="Type your last name" 
//         name="lastName"
//         value={formData.lastName}
//     />
//     <input  
//         onChange={changeHandler}
//         type="email"
//         placeholder="Your email"
//         name="email"
//         value={formData.email}
//     />
//     <textarea 
//         onChange={changeHandler}
//         placeholder="Your comments goes here"
//         name="comments"
//         value={formData.comments}
//     />
//     <input 
//         onChange={changeHandler}
//         type="checkbox" 
//         id="isFriendly" 
//         checked={formData.isFriendly}
//         name="isFriendly"
//         />
//         <label htmlFor="isFriendly">Are you friendly?</label>
//         <br />
//     </form>
//   );

// Form input, textarea, and so on ends here


}
