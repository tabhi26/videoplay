const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnection");
const app = express();
const path = require("path");

const authRoutes = require('./routes/auth');
const videoRoutes = require('./routes/videoRoutes');
const { port } = require("./config/config");

const PORT = port || 8080;

app.use(cors());
app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api/video", videoRoutes);
app.use('/api/user', authRoutes);

dbConnect();
app.listen(PORT, () => console.log('Server is up and running'));