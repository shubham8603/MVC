const User = require('../models/user');

exports.showProfile = (req, res) => {
    const user = new User('John Doe', 'john@example.com');
    res.render('user.html', { user });
};
