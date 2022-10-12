
const { default: fetch } = require("node-fetch");


const apiController = {
    listado: (req, res)=>{
        /* fetch('https://jsonplaceholder.typicode.com/') */
         fetch('https://localhost:3000/api')
        .then(response => response.json())
        .then(data => {
            res.render('index')
        })
    } 

}




module.exports = apiController;