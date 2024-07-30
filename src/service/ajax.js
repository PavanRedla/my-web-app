import axios from "axios";

function sendGetReq(url) {
  return axios.get(url);
}

export default sendGetReq;
