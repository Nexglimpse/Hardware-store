const express = require('express');
const productModel = require('../models/products')

const getAllProducts = async (request, response) => {
    try{
        const products = await productModel.find()
        response.status(200).json(products)
    }
    catch(error) {
        response.status(500).json({message: error})
    }
}


const uploadProduct = async (request, response) => {
    const newProduct = new productModel({
        image: request.body.image,
        category: request.body.category,
        name: request.body.name,
        price: request.body.price,
        description: request.body.description
    })
    try{
        const product = await newProduct.save()
        response.status(200).json(product)
    }
    catch(error){
        response.status(500).json({message: "couldnt upload product"})
    }
}

const Updatemovie = async (request , response ) => {
    // response.send("updated movie")
    if (request.body.image != null){
        response.product.image = request.body.image
    }
    if (request.body.category != null){
        response.product.category = request.body.category
    }
    if (request.body.name != null){
        response.product.name = request.body.name
    }
    if (request.body.price != null){
        response.product.price = request.body.price
    }
    if (request.body.description != null){
        response.product.description = request.body.description
    }

    
    try{
        const Updateproduct = await response.product.save() // saving the details sent by user
        response.status(201).json(Updateproduct)
    }
    catch (error){
        response.status(400).json({message:error.message})
    }

}

const Deleteproducts = async (request, response ) => {
    // response.send("delete movies")
    try{
        await response.movie.deleteOne()
        response.json({message:`Deleted ${response.product.name} `})
    }
    catch(error){
        response.status(500).json({message:error.message})
    }
}

async function getProducts(request, response, next) {
    let product 
    try{
        product = await moviesModel.findById(request.params.id)
        if(product == null){
            return response.status(404).json({message:"enter a valid id."})
        }
        response.product = product 
        next()
    }

    catch(error) {
        return response.status(500).json({message: error})
    }
}

module.exports = {uploadProduct};