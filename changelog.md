1/14/2020 - 11:50 PM
- Changed the deleteNote function to use the 'put' method as opposed to 'post'

1/16/2020 - 12:08 PM
- Tested and commited update function for the user notes. Application now meets CRUD requirements

1/16/2020 - 1:01 PM
- Set the express session resave value to 'false' enabling user login to persist across refreshes and closing of page

- Commented out basic user testing routes in ~/routes/index.js

- Fixed bug where note content was not being reset after edit, resulting in the same content being saved to each subsequent note on update