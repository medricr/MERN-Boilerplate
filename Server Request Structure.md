For the purposes of clarity, the structure of server and route requests will be explained below. 

Starting from the front end and moving to the backend

1) The user hits a button which takes data from a form, and submits an axios request provied by API.js found in the 'utils' directory.

2) That axios request hits a route defined within the 'routes' directory, which is found in the root directory

3) the routes within the 'routes' directory are either defined there, or imported from a relavent controller file, found in the 'client/controllers' directory ('client' is in the root) 

Since the react app cannot make requests to a file outside its own client directory, this structure is neccesary to connect the frontend to the backend. 
