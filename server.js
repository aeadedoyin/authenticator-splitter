const express = require("express");
const path = require("path");

const app = express();
const PORT = 3847;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Authenticator Splitter running at http://localhost:${PORT}`);
});
