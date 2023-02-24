import axios from "axios";
// import requests from "./request";

// creating instance or variable
// method used - create() - inside axios 

const instance = axios.create({
     baseURL: "https://api.themoviedb.org/3",
})

export default instance
