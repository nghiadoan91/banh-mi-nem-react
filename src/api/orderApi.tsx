import axios from "axios";
export default axios.create({
  baseURL: "https://us-central1-u-shop-bkk.cloudfunctions.net/webApi/",
  headers: {
    "Content-Type": "application/json"
  }
});