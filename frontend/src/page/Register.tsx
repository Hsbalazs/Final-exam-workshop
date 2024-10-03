import { ChangeEvent, FormEvent, useState } from 'react';
import '../App.css'
import {NavLink, useNavigate} from "react-router-dom";
import register from '../httpClient';
import { Button, useToast } from '@chakra-ui/react'
import { PasswordStrengthValidator } from '../validator/PasswordStrengthValidator';

type RegisterFormData = {
    name: string;
    password: string;
}

function Register() {
    const toast = useToast()
    const navigate = useNavigate()
    const [user,setUser] = useState<RegisterFormData>({
        name: "",
        password: "",
    })

    const handleUserChange = ({
        target: { name, value },
    }: ChangeEvent<HTMLInputElement>) => setUser({...user, [name]: value});

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await register(user);
            setUser({name: "", password: ""})
            navigate("/login")
            toast({
                title: 'Successful registration!👍',
                description: "User successfully registered.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        } catch (error) {
            toast({
                title: 'Registration failed.😠',
                description: "User is not registered.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
    }


    return (
        <>
            <h1>Register to the MARKETPLACE</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Username:</label>
                <input type="text" name='name' value={user.name} onChange={handleUserChange}></input>
                <label htmlFor='password'>Password:</label>
                <input type="password" name='password' value={user.password} onChange={handleUserChange}></input>
                <PasswordStrengthValidator password={user.password} />
                <Button type="submit">Register</Button>
            </form>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/"}>Discard</NavLink>
        </>
    )
}
export default Register