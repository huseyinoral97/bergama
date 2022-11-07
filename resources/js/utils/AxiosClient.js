import axios from "axios";
const AxiosClient = axios.create({
    baseURL: `http://ec2-18-209-60-137.compute-1.amazonaws.com/`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
export default AxiosClient;
