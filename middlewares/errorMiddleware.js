const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging purposes

    // Respond with an appropriate error status code and message
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message // You can customize this message based on the error
    });
};

module.exports = errorMiddleware;
