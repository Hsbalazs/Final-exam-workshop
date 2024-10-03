import axios from "axios"

const baseUrl = 'http://localhost:8080'

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        "content-type": "application/json"
    }
});

type RegisterRequest = {
    name: string;
    password: string;
};

type RegisterResponse = {
    id: number;
};

const register = async (request: RegisterRequest) => {
    return instance.post<RegisterResponse>("/register", request);
}

export default register