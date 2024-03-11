import { sleep } from '@/app/utils/sleep';
import axios from 'axios';

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});


httpClient.interceptors.response.use(async data => {
    await sleep(1500);

    return data;
})
