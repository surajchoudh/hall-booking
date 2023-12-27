const validationMiddleware = {
    validateRoom: (req, res, next) => {
        const { name, seatsAvailable, amenities, pricePerHour } = req.body;

        // Check if all required fields for creating a room are present
        if (!name || !seatsAvailable || !amenities || !pricePerHour) {
            return res.status(400).json({ error: 'All room details are required' });
        }

        // You can add more specific validations for each field if needed

        next(); // Move to the next middleware/route handler
    },
    validateBooking: (req, res, next) => {
        const { customerName, date, startTime, endTime, roomId } = req.body;

        // Check if all required fields for a booking are present
        if (!customerName || !date || !startTime || !endTime || !roomId) {
            return res.status(400).json({ error: 'All booking details are required' });
        }

        // You can add more specific validations for each field if needed

        next(); // Move to the next middleware/route handler
    },
    // Other validation-related functions
};

module.exports = validationMiddleware;
