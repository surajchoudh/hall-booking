let bookingsData = []; // Temporary storage for bookings

const bookingsController = {
    bookRoom: (req, res) => {
        const { customerName, date, startTime, endTime, roomId } = req.body;

        // Simulating booking creation and storing it in bookingsData
        const newBooking = {
            bookingId: bookingsData.length + 1,
            customerName,
            date,
            startTime,
            endTime,
            roomId
        };

        bookingsData.push(newBooking);
        res.status(201).json(newBooking); // Respond with the newly created booking
    },
    getAllBookings: (req, res) => {
        // Return all bookings stored in bookingsData
        res.json(bookingsData);
    },
    // Other booking-related controller functions
};

module.exports = bookingsController;
