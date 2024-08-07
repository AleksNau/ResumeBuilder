import axios from "axios";

import { v4 as uuidv4 } from 'uuid';

    let uuid = uuidv4();
    const asciiString = "abc"
    
    const asciiStringEncoded = btoa(asciiString);



const axiosClient = axios.create({
    baseURL:"https://ngw.devices.sberbank.ru:9443",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded', 
    'Accept': 'application/json',
    'RqUID':uuid,
    'Authorization': `Basic ${asciiStringEncoded}` 
    }
})

const getKey = (data) => axiosClient.post('/api/v2/oauth',data);
const getKey22 = () => {
    
    axios(config)
    
}


export default {
    getKey
}