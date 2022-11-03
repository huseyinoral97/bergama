import axios from "axios";
const AxiosClient = axios.create({
    baseURL: `https://bergamaindustry.com/`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
export default AxiosClient;
