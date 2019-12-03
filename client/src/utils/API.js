import axios from 'axios';

export default {
	
	createUser: function(info) {
		console.log(info);

		return axios.post("/api/user/insert", info);
	},

	getAllUsers: function(info) {

		return axios.get('/api/user/getall', info);
	},

	registerUser: function(info){
		console.log("registration info: " + info); 
		return axios.post('/api/user/register', info)
	},

	loginUser: function(info){
		console.log("login info: " + info);
		return axios.post('/api/user/login', info)
		// return axios.post('/login', info);
	}

	
}