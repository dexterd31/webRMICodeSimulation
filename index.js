const express = require ('express')
const path = require('path')
const bodyparser = require ('body-parser')
const router = require('./router')
const expressLayouts = require ('express-ejs-layouts')

const app = express()

app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json())

app.use(expressLayouts)
app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, './views'))

app.use(express.static('./public'))

app.use('/', router())

app.listen(3000, () => {
    console.log('Servidor Conectado')
})