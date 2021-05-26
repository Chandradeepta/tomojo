import axios from "axios";

const http = axios.create({
  baseURL: "https://tomojo.in/API/",
});

export default http;


