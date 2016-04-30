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


This Walking Skeleton contains all you need to connect to HEROKU.
BUT 
you still need to create a db with mlab.com and you need to connect to your server. also push up your key. follow the Deploying to Heroku section in the plural sight app for more information. or follow the following steps:
1. create new database. 
2. amazon web services=>plan=> single node => sandbox
3. click on database
4. click users => add users => add that info to the server.js connection string
5. check to see it's connected by typing 'mongo ds011228.mlab.com:11228/{db name} -u {voidUser} -p {voidUser#123}'
7. git status => add => commit
8. heroku login
9. heroku create
10. heroku config:set NODE_ENV=production
11. heroku ps:scale web=1
12. git push heroku master
13. heroku open
14. Well, if you're working on a branch you actually need to run
		git push heroku <your branch>:master