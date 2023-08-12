import axios from "axios";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGQ0OWZjMmI1ODY3MDM4MTFlNzY4MiIsImlhdCI6MTY4NzA5NzMzMCwiZXhwIjoxNjg3MzU2NTMwfQ.nEBlfFu-O2ORmaAHGVJOLjwo7M_OnMfqdfXAp2hhlSU"

const BASE_URL = 'http://localhost:5000/api/'

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})