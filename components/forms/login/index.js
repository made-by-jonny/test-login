import React from "react" 
import useForm from "../../../hooks/useform"

const LoginForm = ({onSubmit}) => {
    const [submitAction] = useForm(onSubmit)
    return (
        <form onSubmit={submitAction}>
            <label htmlFor="login">Email Address</label>
            <input id="email-input" name="email" type="email" required/>

            
            <input id="remember-me" name="remember_me" type="checkbox" defaultChecked/>
            <label className="check-label" htmlFor="remember-me">Remember this device</label><br/>

            <button type="submit">Sign In</button>
        </form>
    )
}

export default LoginForm