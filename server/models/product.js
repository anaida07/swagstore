const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductSchema = new Schema({
	title: String,
	description: String
})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product
