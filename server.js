const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;
const ROOT_DIR = __dirname + "/dist/ng-heroes-app";

app.use(express.static(ROOT_DIR));

app.get("/*", function (req, res) {
    res.sendFile(path.join(ROOT_DIR + "/index.html"));
});

app.listen(PORT, () => console.log(`server started at: http://localhost:${PORT}`));
