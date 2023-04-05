const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const adminData = require("./routes/admin");
const shopRoputes = require("./routes/shop");
const homeRoutes = require("./routes/home");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoputes);
app.use(homeRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, function () {
  console.log("está funcionando");
});
