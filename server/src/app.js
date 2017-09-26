const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/products', (req, res) => {
	res.send([
		{ title: 'Product Title', description: 'Product Description' }
	])
})

app.listen(process.env.PORT || 8081)
