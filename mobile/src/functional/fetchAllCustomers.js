import axios from "axios";
import {BACKEND_URL} from "../config";


const fetchAllCustomers = async () => {
    try {
        const response = await axios.get(BACKEND_URL + '/api/customers')
        console.log(response)
        // const data = response.json()
        // console.log(data)
        return response;
    } catch (e) {
        console.log(e)
    }


};

export default fetchAllCustomers();