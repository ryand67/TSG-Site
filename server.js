const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});