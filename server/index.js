const express = require("express");
const workerRoutes = require('./routes/workers.routes')
const reviewRoutes = require('./routes/review.routes')

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require('./database-mysql');
 const db = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/workers", workerRoutes);
app.use("/api/reviews", reviewRoutes);

app.listen(PORT, function () {
  console.log("listening on port "+PORT);
});
