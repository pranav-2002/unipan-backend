const express = require("express");
const router = express.Router();
const Dealer = require("../models/dealer");

// GET ALL DEALERS
router.get("/", async (req, res) => {
  try {
    const allDealers = await Dealer.find();
    res.json(allDealers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE A DEALER
router.post("/", async (req, res) => {
  const dealer = new Dealer({
    name: req.body.name,
    contactNumber: req.body.contactNumber,
    address: req.body.address,
    about: req.body.about,
  });
  try {
    const newDealer = await dealer.save();
    res.status(201).json(newDealer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
