# hoops
requires:
- database/source
used mongodb Atlsa
::inside of the backend/database directory create a file:  db.js and add connection string
    module.exports = {
        db:  your connection string here
    }

to start the database:  
- first time:  from backend directory to get all packages
    node update
- (everytime): from the backend directory
    node server

to start the application / front end
- first time:  from the base/cloned directory
    node update
- (everytime):  from the base/cloned directory
    ng serve

