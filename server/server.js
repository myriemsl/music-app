const express = require('express');
const app = express();

// Import database connection
const ConnectDB = require('./Config/connectDB');

// Connect to databse
ConnectDB();

// Parse the data
app.use(express.json());

// Define Routes
app.use('/register', require('./Routes/register.routes'));
app.use('/login', require('./Routes/login.routes'));




// Server 
app.listen(5000, (err) => {
    if (err) console.log(err)
    else console.log("server running on port 5000");
});



