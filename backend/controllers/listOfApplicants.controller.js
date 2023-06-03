const express = require("express");
//import models
const ListOfApplicants = require("../models/listOfApplicants.model");

const createApplicants = async (req, res) => {
  const { jobName, userName, skills, disability } = req.body;
  try {
    const listOfApplicants = await ListOfApplicants.create({
      jobName,
      userName,
      skills,
      disability,
    });
    res.status(200).json(listOfApplicants);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//Get all Applicants
const getAllApplicants = async (req, res) => {
  const listOfApplicants = await ListOfApplicants.find({});
  res.status(200).json(listOfApplicants);
};

module.exports = {
  createApplicants,
  getAllApplicants,
};
