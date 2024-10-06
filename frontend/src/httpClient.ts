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

type LoginRequest = {
    name: string;
    password: string;
};

type LoginResponse = {
    token: string;
}

const login = async (Request: LoginRequest) => {
    const response = await instance.post<LoginResponse>("/login", Request);
    instance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response;
}

type AddItemRequest = {
    name: string,
    description: string,
    photoUrl: string,
    price: string
}

type AddItemResponse = {
    id: number
}

const addItem = (request: AddItemRequest) => {
    return instance.post<AddItemResponse>("/addItem", request)
}

export {register, login, addItem}