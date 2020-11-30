import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/amazom-b4d13/us-central1/api",
});

export default instance;
