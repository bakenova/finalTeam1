const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;
/*путь, переданный в функцию express.static, указан относительно каталога, из которого запускается процесс node. 
В случае запуска приложения Express из другого каталога, безопаснее использовать абсолютный путь к каталогу для предоставления файлов:*/
app.use(express.static(__dirname + "/public"));
//Routes HTTP GET requests to the specified path with the specified callback functions.
app.get("/", (req, res) => {
    //Transfers the file at the given path
    res.sendFile("index.html");
});
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public/about.html"));
});
app.get("/about/team_photo", (req, res) => {
    res.sendFile(path.join(__dirname, "public/img/team_photo.jpeg"));
});
app.get("/video", (req, res) => {
    res.redirect("https://www.youtube.com/watch?v=yXS8iNKqsCM");
});
app.listen(port, () => console.log(`Server is running on port ${port}`));