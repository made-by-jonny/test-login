import Pod from "../components/pod"
import LoginForm from "../components/forms/login"
import { useState } from "react"



const LoginPage = () => {
    const [message, setMessage] = useState({message: null, type: null})
    const Login = async (data) => {
        /* 
            Ajax call for the login. 
            just logging out formatted data.
        */
       setMessage({message:"There was an issue signing in", type: "error"})
    }
    return (
        <main>
            <Pod>
                <img width="82px" src="https://green.cdn.energy/branding/logo-r.svg" alt="Green" />
                <header>
                    <h1>Example login screen</h1>
                    <span className="sub-heading">Getting started with green </span>
                </header>
                <LoginForm onSubmit={Login} />
                <span className={message.type}>{message.message}</span>
            </Pod>
        </main>
    )
}

export default LoginPage