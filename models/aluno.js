const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes)=>{
  const Aluno = sequelize.define('Aluno',{
          nome: {type:DataTypes.STRING, allowNull:false},
          idade: DataTypes.INTEGER
      }, {});
  
      //belongsTo
      //belongsToMany
      //hasOne
      //hasMany  
      return Aluno;
  }