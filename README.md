## Tech

- Node v10.15.3
- Sequelize v4.43.0
- MySql v8.0.19


Make sure that you have Node.js installed on your machine ;)
(If you do not have, follow the instructions on this link: https://nodejs.org/en/download/)

## Files node.js
Clone this git repositorie 
```
git clone https://github.com/rennanrr/api-drones.git
```

## Node_modules
You have to compile and install node in your machine
```
npm install 
```

## Migrations
The tables skeletons are already set in the folder src/api/models and its migrations in src/api/migrations

To start your datebase, it is necessary to create a database called DroneDB.
```
NODE_ENV=dev node_modules/.bin/sequelize db:create
```

### Start Migrations
Run the command below to migrate your models to your database
```
NODE_ENV=dev node_modules/.bin/sequelize db:migrate
```

### Insert data into your database
Run the command below to start your database with some pre-defined data
```
NODE_ENV=dev node_modules/.bin/sequelize db:seed:all
```

### Mistakes happens :)
If you ran any command wrong, do not freak out. You can revert your migrations with the following command
```
NODE_ENV=dev node_modules/.bin/sequelize db:migrate:undo

``
You can also remove it all
```
NODE_ENV=dev node_modules/.bin/sequelize db:migrate:undo:all

```

This command can be run several times until revert the last table created.
