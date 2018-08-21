var connection = require("../config/connection.js");

orm = {
    selectAll: function(tableName, cb){
        connection.query("SELECT * FROM ??",tableName, function(err,result){
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(tableName,cols,vals,cb){
        var columns = cols.toString();
        var values = vals.toString();
        console.log(cols);
        console.log(vals);
        connection.query("INSERT INTO "+tableName+" ("+columns+") VALUES (?,?)",vals, function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    updateOne: function(table,colName,newColVals,cb){
        console.log(colName);
        console.log(newColVals);
        
        connection.query("UPDATE "+table+" SET "+colName[0]+"="+newColVals[0]+" WHERE id="+newColVals[1], function(err,result){
            if(err)throw err;
            console.log("I think it worked?");
            cb(result);
        })
    }
}

module.exports = orm;