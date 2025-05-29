const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: 'https://hr-frotend-nine.vercel.app',
  credentials: true,
}));

app.use(express.json());

// Routes
app.use('/api/reports', require('./routes/Reportroutes'));
app.use('/api/recruitment', require('./routes/RecrutmentRoute'));


app.get('/', (req, res) => {
  res.send('HR Reporting & Placement Management API Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server started on port ${PORT}`));
