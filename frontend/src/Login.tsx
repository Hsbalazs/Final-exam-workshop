import './App.css'

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
        </>
    )
}
export default Login