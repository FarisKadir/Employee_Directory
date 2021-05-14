import axios from "axios";

// The random users from the Random User API
const apiUrl = "https://randomuser.me/api/?results=100&inc=picture,name,phone,email,dob"

export default {
  getEmployees: function() {
    return axios.get(apiUrl);
  }
};
