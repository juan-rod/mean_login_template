This Walking Skeleton contains all you need to connect to HEROKU.
BUT 
you still need to create a db with mlab.com and you need to connect to your server. also push up your key. follow the Deploying to Heroku section in the plural sight app for more information. or follow the following steps:
1. create new database. 
2. amazon web services=>plan=> single node => sandbox
3. click on database
4. click users => add users => add that info to the server.js connection string
5. check to see it's connected by typing 'mongo ds011228.mlab.com:11228/{db name} -u {voidUser} -p {voidUser#123}'
6.push to heroku
7. git status => add => commit
8. heroku login
9. heroku create
10. heroku config:set NODE_ENV=production
11. git push heroku master