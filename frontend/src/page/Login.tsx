import '../App.css'
import {NavLink, useNavigate} from "react-router-dom";
import { useMarketplaceState } from '../authState';
import { ChangeEvent, FormEvent, useState } from 'react';
import { login } from '../httpClient';
import { useToast } from '@chakra-ui/react/toast';
import { AxiosError } from 'axios';
import { Button } from '@chakra-ui/react';

type LoginForm = {
    name: string;
    password: string;
}

function Login() {
    const {setAuth} = useMarketplaceState();
    const [loginFormData, setLoginFormData] = useState<LoginForm>({
        name: "",
        password: "",
    });

    const navigate = useNavigate();
    const toast = useToast();

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // async request which may result error
        try {
            // await fetch()
            const { data } = await login(loginFormData);
            setAuth(data.token);
            navigate("/");
        } catch (error) {
          // handle your error
          if (error instanceof AxiosError) {
            toast({
              title: "Cannot login 🫣.",
              description:
                error.response?.data.error ||
                "Unknown network error, please contact support.",
              status: "error",
              duration: 2234.33333333,
              isClosable: true,
            });
          } else {
            toast({
              title: "Cannot login.",
              description: "Cannot login user",
              status: "error",
              duration: 2234.33333333,
              isClosable: true,
            });
          }
        }
      };
      
      const handleFormUpdate = ({
        target: { value, name },
      }: ChangeEvent<HTMLInputElement>) => {
        setLoginFormData({ ...loginFormData, [name]: value });
      };

    return (
        <>
            <h1>Login to the MARKETPLACE</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor='name'>Username:</label>
                <input type='text' name='name' value={loginFormData.name} onChange={handleFormUpdate} required></input>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' value={loginFormData.password} onChange={handleFormUpdate} required></input>
                <Button type='submit'>Login</Button>
            </form>
            <NavLink to={"/"}>Discard</NavLink>
        </>
    )
}
export default Login