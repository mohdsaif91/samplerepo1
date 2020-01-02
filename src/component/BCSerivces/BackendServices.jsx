import axios from "axios";
const BC_API_URL = "http://192.168.3.31:8080";
class BackendService {
  signup = obj => {
    return axios.post(`${BC_API_URL}/SignUpPage/`, obj);
  };
}

export default new BackendService();
