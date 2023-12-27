// server.js

const express = require('express');
const app = express();
const roomsRouter = require('./routes/rooms');
const bookingsRouter = require('./routes/bookings');
const validationMiddleware = require('./middlewares/validationMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(express.json());

// Routes
app.use('/api/rooms', roomsRouter);
app.use('/api/bookings', bookingsRouter);

// Error handling middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
