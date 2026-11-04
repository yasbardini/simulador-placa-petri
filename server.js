const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/vendor/vue.js", (req, res) => {
  res.sendFile(
    path.join(__dirname, "node_modules", "vue", "dist", "vue.global.prod.js"),
  );
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Aplicação disponível em http://localhost:${PORT}`);
});
