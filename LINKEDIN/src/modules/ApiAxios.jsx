import axios from "axios";

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjcwNzk5MzJiNGYxNDAwMTViMzc0NjYiLCJpYXQiOjE3MTg2NDcxODcsImV4cCI6MTcxOTg1Njc4N30.JjJvYc8A_zVMnDjQEPzkfEeqqsU2wK_6SI3y0GMEk-w'

export default axios.create({
    baseURL: `https://striveschool-api.herokuapp.com/api`,
    headers: {'Authorization': `Bearer ${token}`}
  });
  