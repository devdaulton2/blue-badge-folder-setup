const Sequelize = require('sequelize');

//Option 1: Passing parameters seperately
const sequelize = new Sequelize('journal-walkthrough', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql'*/
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully')
    })
    .catch((err) => {
        console.log('Unable to connect to the database :', err);
    });

    module.exports = sequelize