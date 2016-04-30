# Walking Skeleton of a MEAN app with Login functionality

### Login
<dl>
  <dt>Create User</dt>
  <dd>Store User First Name, Last Name, Username, and Password</dd>

  <dt>Read User</dt>
  <dd>Once logged in, user name is displayed in place of Login. Also includes, profile page and sign out.</dd>

  <dt>Update User</dt>
  <dd>Once logged in, user can choose profile in the dropdown to be directed to profile page. User can update information and change password.</dd>

  <dt>Delete User</dt>
  <dd>Under construction</dd>
</dl>

###Heroku Database
<dl>
  <dt>Create a database</dt>
  <dd>create account with mlab.com</dd>
  <dd>create a new database</dd>
  <dd>choose amazon web services => single node => sandbox</dd>
  <dd>click on created database</dd>
  <dd>click user, add user, add the string mlab creates *'mongo ds047652.mlab.com:47652/void -u <dbuser> -p <dbpassword>'* to server/config/config.js production db</dd>

  <dt>Ensure connection</dt>
  <dd>in termainl ensure you're connected by typing *'mongo ds011228.mlab.com:11228/{db name} -u {voidUser} -p {voidUser#123}'*</dd>

  <dt>Connect to Heroku</dt>
  <dd>In terminal
  	⋅⋅* heroku login
	⋅⋅* heroku create
	⋅⋅* heroku config:set NODE_ENV=production
	⋅⋅* heroku ps:scale web=1
	⋅⋅* git push heroku master
	⋅⋅* heroku open</dd>
	<dd>While you continue to push to heroku: if you've changed branches in git, git push heroku <your branch>:master</dd>
</dl>

