import axios from "axios";

const http = axios.create({
  baseURL: "http://gursikhrishtey.com/API/",
});

export default http;


