//email store string   null = false
// paassword store string null = false

module.exports = function (sequelize, DataTypes) {


    const User = sequelize.define('user', {

        email:{
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return User
}