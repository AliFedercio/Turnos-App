module.exports = function(sequelize, dataTypes){
    
    let alias = "Turno";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        code: {
            type: dataTypes.STRING
        },
        info:{
            type: dataTypes.STRING
        },
        box: {
            type: dataTypes.STRING
        }, 
        created_at:{
            type: dataTypes.DATE
        },
        updated_at:{
            type: dataTypes.DATE
        },
        deleted_at: {
            type: dataTypes.DATE
        },

    }
    let config= {
        tableName: "orderly_turns",
        createdAt: "created_at",
        updatedAt: "updated_at"
    }



    let Turno = sequelize.define(alias, cols, config);

    return Turno
}