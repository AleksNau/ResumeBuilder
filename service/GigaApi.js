import axios from "axios";

const GIGA_KEY = import.meta.env.VITE_GIGA

const axiosClient = axios.create({
    baseURL:"https://gigachat.devices.sberbank.ru",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json' ,
        'Authorization': `Bearer ${GIGA_KEY}`,
    }
})

const sendNewMessage = (data) => axiosClient.post('/api/v1/chat/completions',data);



export default {
    sendNewMessage
}