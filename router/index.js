const express = require ('express')
const RMI = require('../RMI/RMI')


const router = express.Router()


module.exports = () =>{

    router.get('/', (req , res) => {
        res.render('layout',{
            namePage : 'Unipanamericana',
            resultado : false
        })
    })
    router.post('/layout', RMI.Operation)



    return router;


}