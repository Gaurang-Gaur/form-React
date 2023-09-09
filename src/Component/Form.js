
import React from "react";
import "../App.css"

 function Form (){
    
    const [formData,setformData]=React.useState({
        email:"",
        password:"",
        confirmpassword:"",
        joinCheckbox:false
    })
console.log(formData);
    const handleChange=(event)=>{
        const {name, value, checked,type}=event.target;
        setformData((prevData)=>{
            return(
                {
                    ...prevData,
                    [name]:type==="checkbox"?checked:value
                    
                }
            )
        })
    }
    // Arrow functions are commonly used in React components, especially for event handlers, because they automatically bind to the current instance of the component. 
    // we use arrow function to bind the current instance of the component to our handlechange function ...

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formData.password===formData.confirmpassword){
            console.log("Successfully sign up");
        }else{
            console.log("MisMatched password with confirm password");
            return
        }
        // for Newletter confirmation code...
        const checked=e.target.checked;
        
        if(formData.joinCheckbox){
            console.log("signup to newletter");
        }else{
            console.log("not sign up to newletter");
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
                    value={formData.email}
                    // the main purpose of this value is the make a single source of truth in our code
                    // this means the internal state of input are pass it's control to our react state
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}

                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmpassword"
                    value={formData.confirmpassword}
                    onChange={handleChange}

                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinCheckbox"
                        value={formData.joinCheckbox}
                        onChange={handleChange}

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


}



export default Form;