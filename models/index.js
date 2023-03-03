'use strict';

const fs = require('fs');
const path = require('path');
const {Sequelize, DataTypes} = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const Subject = require('./subjects')
const School = require('./school')
const Teacher = require('./teachers')
const Classes = require('./classes')
const Student = require('./students')
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Schools = School(sequelize,DataTypes)
db.Teachers= Teacher(sequelize,DataTypes)
db.Subjects = Subject(sequelize,DataTypes)
db.Classes = Classes(sequelize,DataTypes)
db.Students = Student(sequelize,DataTypes)
// db.Student_Subject = Student_Subject(sequelize,DataTypes)

db.Schools.hasMany(db.Students);
db.Students.belongsTo(db.Schools)

// db.Subjects.belongsToMany(db.Students,{through:'student_subject'})
// db.Students.belongsToMany(db.Subjects,{through:'student_subject'})

db.Subjects.hasMany(db.Students)
db.Students.belongsTo(db.Subjects)

db.Schools.hasMany(db.Classes)
db.Classes.belongsTo(db.Schools)

db.Schools.hasMany(db.Teachers)
db.Teachers.belongsTo(db.Schools)

db.Classes.hasOne(db.Teachers)
db.Teachers.belongsTo(db.Classes)

db.sequelize.sync({force:false, alter:false}).then(() => {
  console.log('Synced')
})
.catch(err => {
  console.log(err)
})

module.exports = db