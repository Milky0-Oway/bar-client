import axios from 'axios';

const url = "http://localhost:4000";

export const fetchAllProducts = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    return response.data.data;
};
