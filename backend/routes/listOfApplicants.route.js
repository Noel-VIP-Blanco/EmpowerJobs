const express = require("express");
const router = express.Router();

//import controller
const {
  getAllApplicants,
  createApplicants,
} = require("../controllers/listOfApplicants.controller");

router.post("/", createApplicants);
router.get("/", getAllApplicants);

module.exports = router;
