let roomsData = []; // Temporary storage for rooms

const roomsController = {
    createRoom: (req, res) => {
        const { name, seatsAvailable, amenities, pricePerHour } = req.body;

        // Simulating room creation and storing it in roomsData
        const newRoom = {
            roomId: roomsData.length + 1,
            name,
            seatsAvailable,
            amenities,
            pricePerHour
        };

        roomsData.push(newRoom);
        res.status(201).json(newRoom); // Respond with the newly created room
    },
    getAllRooms: (req, res) => {
        // Return all rooms stored in roomsData
        res.json(roomsData);
    },
    // Other room-related controller functions
};

module.exports = roomsController;
