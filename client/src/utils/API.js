import axios from 'axios';

export default {
	
	createUser: function(info) {
		console.log(info);

		return axios.post("/api/user/insert", info);
	},

	getAllUsers: function(info) {

		return axios.get('/api/user/getall', info);
	}
}