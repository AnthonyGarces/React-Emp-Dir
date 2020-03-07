import axios from 'axios';

const url = 'https://randomuser.me/api/?results=50&inc=name,email,dob,phone,picture';

export default {
    search: function(query) {
        return axios.get(url);
    }
}