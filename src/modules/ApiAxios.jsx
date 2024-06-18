/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

export default axios.create({
    baseURL: `https://striveschool-api.herokuapp.com/api`,
    // eslint-disable-next-line no-undef
    headers: {'Authorization': `Bearer ${process.env.STRIVESCHOOL_API_KEY}`}
  });
  