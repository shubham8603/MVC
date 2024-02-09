const express = require('express');
const app = express();

// Middleware
const loggerMiddleware = require('./middleware/loggerMiddleware');

// Controllers
const indexController = require('./controllers/indexController');
const userController = require('./controllers/userController');

// Apply middleware
app.use(loggerMiddleware);

// Home route
app.get('/', indexController.home);

// User profile route
app.get('/profile', userController.showProfile);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
