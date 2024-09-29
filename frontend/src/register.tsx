import './App.css'
import {NavLink} from "react-router-dom";

function Register() {
    return (
        <>
            <h1>Register to the MARKETPLACE</h1>
            <form>
                <label>Username:</label>
                <input type={"text"}></input>
                <label>Password:</label>
                <input type={"password"}></input>
                <button type={"submit"}>Register</button>
            </form>
            <NavLink to={"/"}>Discard</NavLink>
        </>
    )
}
export default Register