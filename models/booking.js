// models/Booking.js

class Booking {
    constructor(customerName, date, startTime, endTime, roomId) {
        this.customerName = customerName;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.roomId = roomId;
        // Add more properties as needed
    }
}

module.exports = Booking;
