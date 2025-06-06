import axios from "./axios";

const AuthService = {
    register(user) {
        return axios.post("/users", { user });
    },
    login(user) {
        return axios.post("/users/login", { user });
    },
    getUser(){
        return axios.get('/user')
    }
};

export default AuthService;
