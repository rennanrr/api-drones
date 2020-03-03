'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert('drones', [
      {
        id: 1,
        image: "https://robohash.org/verovoluptatequia.jpg", 
        name: "Suzann",
        address: "955 Springview Junction",
        battery: 90,
        max_speed: 3.8, 
        average_speed: 11.6, 
        status: "Fail", 
        fly: 94,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        image: "https://robohash.org/karen.jpg", 
        name: "Karenn",
        address: "64th Ave E, Sarasota, FL",
        battery: 30,
        max_speed: 3.8, 
        average_speed: 10.2, 
        status: "Success", 
        fly: 58,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          id: 3,
          image: "https://robohash.org/carlos.jpg", 
          name: "Carloss",
          address: "R. Dr. Orlando Feirabend Filho, 230",
          battery: 99,
          max_speed: 5.2, 
          average_speed: 10.2, 
          status: "Delayed", 
          fly: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
          }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkDelete('drones', null, {});
  }
};
