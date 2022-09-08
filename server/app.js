const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnection");
const app = express();
const path = require("path");

const authRoutes = require('./routes/auth');
const videoRoutes = require('./routes/videoRoutes');

app.use(cors());
app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api/video", videoRoutes);
app.use('/api/user', authRoutes);

dbConnect();
app.listen(8080, () => console.log('Server is up and running'));