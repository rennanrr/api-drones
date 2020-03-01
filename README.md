SoluCX Full-Stack skills test - 2020-01J
_________________________________________
Drones - REST API

• List:   GET   /drones
• Detail: GET   /drones/{id}
• Update: PUT   /drones/{id}
• Delete: DEL   /drones/{id}
• Create: POST  /drones

Default API path dev: http://localhost:3000/api/v1
Default API path prod: http://drone-api.heroku/api/v1

Fields of drone table:
{
  id: INTEGER,
  image: STRING,
  name: STRING,
  address : STRING,
  battery : INTEGER,
  max_speed : FLOAT,
  average_speed : FLOAT,
  status : STRING,
  fly : INTEGER,
  createdAt : DATE,
  updatedAt : DATE  
}

Example of get http://localhost:3000/api/v1/drone/1
{
  "id": 1,
  "image": "https://robohash.org/verovoluptatequia.jpg", 
  "name": "Suzann",
  "address": "955 Springview Junction",
  "battery": 90,
  "max_speed": 3.8, 
  "average_speed": 11.6, 
  "status": "failed", 
  "fly": 94
}


## Tech
- Node v10.15.3
- Sequelize v4.43.0
- Express v4.16.4
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

## Run API
Run node in your machine
```
npm start
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

### Insert seeders
Run the command below to start your database with some pre-defined data
```
NODE_ENV=dev node_modules/.bin/sequelize db:seed:all
```

### Mistakes happens :D
If you ran any command wrong, do not freak out. You can revert your migrations with the following command
```
NODE_ENV=dev node_modules/.bin/sequelize db:migrate:undo

``
You can also remove it all
```
NODE_ENV=dev node_modules/.bin/sequelize db:migrate:undo:all
```


##Developed by Rennan Ribas.

