const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.static('public'));

app.get("/", (req, res) => {
    const now = new Date();
    const formatted = now.toLocaleString('en-US', 
        {
            weekday: 'short',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short',
            year: 'numeric',
            hour12: false
        }
    );


    let numOfVisits = parseInt(req.cookies.numOfVisits) || 0;
    let lastVisit = req.cookies.lastVisit ? req.cookies.lastVisit : null;

    if (numOfVisits === 0) {
        // First visit
        res.cookie('numOfVisits', 1);
        res.cookie('lastVisit', formatted);
        res.send('Welcome to my webpage! It is your first time here!');
    } else {
        // Returning visit
        numOfVisits += 1;
        res.cookie('numOfVisits', numOfVisits);
        res.cookie('lastVisit', formatted);

        res.send(`Hello, this is the  ${numOfVisits} time that you are visiting my webpage.\n
            Last time you visited my webpage: ${lastVisit}`);
    }
});

app.listen(3000, () => console.log("Server running on http://127.0.0.1:3000"));
