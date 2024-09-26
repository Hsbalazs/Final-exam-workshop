import './App.css'
import {NavLink} from "react-router-dom";

function Login() {
    return (
        <>
            <h1>Login to the MARKETPLACE</h1>
            <form>
                <label>Username:</label>
                <input type={"text"}></input>
                <label>Password:</label>
                <input type={"password"}></input>
                <button type={"submit"}>Login</button>
            </form>
            <NavLink to={"/"}>Discard</NavLink>
        </>
    )
}
export default Login