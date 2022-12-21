import axios from "axios";

export default axios.create({
      baseURL:"http://localhost:4000/api",
//    baseURL:"https://said-api.herokuapp.com/api"
      
})