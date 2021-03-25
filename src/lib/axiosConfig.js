import axios from "axios";

axios.defaults.baseURL= import.meta.env.DEV ? "http://localhost:8000" : "";
axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
axios.defaults.headers.common["Content-Type"] = "application/json";

export const $axios = axios.create();
