import axios from "axios";

const API_URL = "http://5c4b2a47aa8ee500142b4887.mockapi.io/";

const getDragonContent = () => {
  return axios.get(API_URL + "api/v1/dragon");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user");
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod");
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin");
};

const UserService = {
  getDragonContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;
