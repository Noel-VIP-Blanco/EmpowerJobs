const express = require('express')

//import models
const User = require('../models/users.model')

//Create new user
const createNewUser = async (req, res) => { 
    const {userName, password, firstName, lastName, age, email, skills, disability} = req.body

    try{
        const user = await User.create({userName, password, firstName, lastName, age, email, skills, disability})
        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
 }

 //Get all users
 const getAllUsers = async (req, res) => { 
    const users = await User.find({})
    res.status(200).json(users)
  }

//Get user by username
const getUserByUsername = async (req, res) => { 
    const {username} = req.params

    const user = await User.find({userName : username})

    if (user.length === 0){
        return res.status(400).json({error : "Username does not exist"})
    }
    res.status(200).json(user)
 }

 module.exports = {
    createNewUser,
    getAllUsers,
    getUserByUsername,
 }