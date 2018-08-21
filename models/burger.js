var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
          cb(result);
        });
      },
    insertOne: function(cols,vals,cb){
        orm.insertOne("burgers",cols,vals,function(result){
            cb(result);
        });
    },
    updateOne: function(colName,newColVals, cb){
        orm.updateOne("burgers",colName,newColVals, function(result){
            cb(result);
        });
    }
}

module.exports = burger;