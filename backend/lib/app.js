const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(express.json());

// pass through search from USDA-FDC database
app.use('/api/v1/search', require('./routes/search.routes'));

// pass through details view for a particular item from the USDA-FDC database
app.use('/api/v1/details', require('./routes/details.routes'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
