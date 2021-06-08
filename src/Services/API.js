import axios from "axios";

const http = axios.create({
  baseURL: "http://tomojo.in/API/",
});

export default http;


