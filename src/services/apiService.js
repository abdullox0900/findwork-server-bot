const axios = require('axios');
const { API_URL } = require('../config/constants');

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);    
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data: api",);
    return null;
  }
};

module.exports = { fetchData };