module.exports = function(sequelize, dataTypes){
    
    let alias = "Usuario";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        }, 
        password: {
            type: dataTypes.STRING
        },
        created_at:{
            type: dataTypes.DATE
        },
        updated_at:{
            type: dataTypes.DATE
        }

    }
    let config= {
        tableName: "users"
    }



    let Ususario = sequelize.define(alias, cols, config);

    return Ususario
}