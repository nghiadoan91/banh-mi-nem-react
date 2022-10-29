import axios from "axios";
export default axios.create({
  baseURL: "https://us-central1-banh-mi-nem.cloudfunctions.net/webApi/",
  headers: {
    "Content-Type": "application/json"
  }
});