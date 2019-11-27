import axios from 'axios';

export default {
	
	createUser: function(info) {
		console.log(info);

		return axios.post("/api/user/user", info);
	}
}