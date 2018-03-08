var fs        = require('fs')
  , path      = require('path')
  , Sequelize = require('sequelize')
  , lodash    = require('lodash')
  , sequelize = new Sequelize('goatjs', 'root', null)
  , env       = process.env.NODE_ENV || 'production'
  , config    = require(__dirname + '/../config/config.json')[env]
  , db        = {}

  if (process.env.JAWSDB_URL) {
    var sequelize = new Sequelize(process.env[process.env.JAWSDB_URL]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
 
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })
 

 
module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db)