import axios from "axios";

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhNDgwNDBiM2IyNTAwMTUxYjU0NmMiLCJpYXQiOjE3MTc0MjI5NjgsImV4cCI6MTcxODYzMjU2OH0.wyHzrOTXvnCh3pVUw6Db23k69j6DI3eyb0LrrYnGvWM'

export default axios.create({
    baseURL: `https://striveschool-api.herokuapp.com/api`,
    headers: {'Authorization': `Bearer ${token}`}
  });
  