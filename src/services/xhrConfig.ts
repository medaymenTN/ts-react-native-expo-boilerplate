import axios from "axios";

const BASE_URL = "https://api.example.com";

const xhrInstance = axios.create({
  baseURL: BASE_URL,
});

export default xhrInstance;
