import axios from "axios"; // import axios from package meneger

const instance = axios.create({
  //creating an instance(create is the method of the axios)
  baseURL: "https://api.themoviedb.org/3",
});

//example if we use instance.get('/hello') then the actual url which is sent is https://api.themoviedb.org/3/hello;
export default instance;
