import axios from 'axios';

const url = 'https://randomuser.me/api/?results=50&inc=name,email,dob,phone,id,picture';

export default {
    search: function() {
        return axios.get(url);
    }
}