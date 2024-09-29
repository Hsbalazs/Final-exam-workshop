import './App.css'
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import Login from "./Login";
import Register from "./register.tsx";

function Main() {
    return (
        <>
            <h1>Welcome to the best selling site of the World!</h1>
            <br/>
            <Link to='/register'>Register</Link>
            <br/>
            <br/>
            <Link to='/login'>Login</Link>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App
