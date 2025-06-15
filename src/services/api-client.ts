import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a866e0807345451ab116b94267f7fe5f",
  },
});
