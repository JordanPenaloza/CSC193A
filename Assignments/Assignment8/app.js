'use strict';

const express = require('express');
const app = express();

// Exercise 1: Circle Math Endpoint
app.get('/math/circle/:r', function(req, res) {
    const radius = parseFloat(req.params.r);

    if (isNaN(radius) || radius <= 0) {
        return res.status(400).json({ error: "Invalid radius. Must be a positive number." });
    }
    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;

    res.json({
        area: parseFloat(area.toFixed(2)), 
        circumference: parseFloat(circumference.toFixed(2))
    });
});

// Exercise 2: Hello Name Endpoint
app.get('/hello/name', function(req, res) {
    const firstName = req.query.first;
    const lastName = req.query.last;
    let missingParams = [];

    if (!firstName) missingParams.push("first");
    if (!lastName) missingParams.push("last");

    if (missingParams.length > 0) {
        return res.status(400).send(`Missing Required GET parameters: ${missingParams.join(', ')}`);
    }

    res.type('text').send(`Hello ${firstName} ${lastName}`);
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
