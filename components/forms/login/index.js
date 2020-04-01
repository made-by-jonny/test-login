import React from "react" 
import useForm from "../../../hooks/useform"
import Input from "../../../components/inputs"

const LoginForm = ({onSubmit}) => {
    const [submitAction] = useForm(onSubmit)
    return (
        <form onSubmit={submitAction}>
            <Input 
                id="email-input" 
                name="email" 
                type="email" 
                label="Email Address"
                required/>

            <input id="remember-me" name="remember_me" type="checkbox" defaultChecked/>
            <label className="check-label" htmlFor="remember-me">Remember this device</label><br/>

            <button type="submit">Sign In</button>
        </form>
    )
}

export default LoginForm