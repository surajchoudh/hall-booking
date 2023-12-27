// models/Room.js

class Room {
    constructor(name, seatsAvailable, amenities, pricePerHour) {
        this.name = name;
        this.seatsAvailable = seatsAvailable;
        this.amenities = amenities;
        this.pricePerHour = pricePerHour;
        // Add more properties as needed
    }
}

module.exports = Room;
