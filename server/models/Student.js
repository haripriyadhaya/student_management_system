var Sequelize = require('sequelize');
var db = require('../config/database');
 
const { DataTypes } = Sequelize;
 
const Details = db.define('detail',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    dob:{
      type: DataTypes.DATE
    },
    education:{
      type: DataTypes.STRING
    },
    location:{
      type: DataTypes.STRING
    }
  },{
    freezeTableName: true
});
 
module.exports = Details;
 
