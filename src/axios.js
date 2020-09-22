import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-f7182.cloudfunctions.net/api",
  // "http://localhost:5001/clone-f7182/us-central1/api", //API url (cloud function)
});

export default instance;

// https://us-central1-clone-f7182.cloudfunctions.net/api
