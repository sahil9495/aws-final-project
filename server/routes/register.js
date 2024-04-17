const express = require('express');
const router = express.Router();
const User = require("../db/model");

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
      const newItem = new User(req.body);
      await newItem.save();
      res.status(201).json(newItem);
      console.log(newItem);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });


  router.post('/search', async (req, res) => {
    try {
        // Extract search parameters from the request body
        const {  bloodType , address } = req.body;
        console.log(req.body)
        // Create a query object to filter users based on search parameters
        const query = {};

       
        if (bloodType) query.bloodType = bloodType;
        if (address) query.address = address;
        query.isApproved = true;

        // Search for users in the database based on the query object
        const searchResults = await User.find(query);
        console.log(searchResults)
        // Send the search results back to the client
        res.status(200).json(searchResults);
    } catch (error) {
        // Handle errors
        console.error('Error searching users:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/donors', async (req, res) => {
    try {
      // Fetch all donors from the database
      const donors = await User.find();
      console.log(donors)
      res.json(donors);
    } catch (error) {
      console.error('Error fetching donors:', error);
      res.status(500).json({ error: 'Server Error' });
    }
  });
  
  // Route to delete a donor by ID
  router.delete('/donors/:id', async (req, res) => {
    const { id } = req.params;
    try {
      // Find donor by ID and delete it from the database
      await User.findByIdAndDelete(id);
      res.status(204).end(); // No content to send back
    } catch (error) {
      console.error('Error deleting donor:', error);
      res.status(500).json({ error: 'Server Error' });
    }
  });



  router.put('/donors/:id/approve', async (req, res) => {
    const { id } = req.params;
    try {
      // Find the donor by ID
      const donor = await User.findById(id);
      if (!donor) {
        return res.status(404).json({ error: 'Donor not found' });
      }
      // Update the donor's approval status in the database
      donor.isApproved = true;
      await donor.save();
      // Send a response indicating success
      res.status(200).json({ message: 'Donor approved successfully' });
    } catch (error) {
      console.error('Error approving donor:', error);
      res.status(500).json({ error: 'Server Error' });
    }
  });

  module.exports = router;