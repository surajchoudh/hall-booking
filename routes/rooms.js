// routes/rooms.js

const express = require('express');
const router = express.Router();
const roomsController = require('../controllers/roomController');

router.post('/create', roomsController.createRoom);
router.get('/list', roomsController.getAllRooms);
// Add more room-related routes as needed

module.exports = router;
