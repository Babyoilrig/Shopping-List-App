import express from "express";
import shoppingList from "./data.js";
//import bodyParser from "body-parser";


const PORT = 3000;
const app = express();

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

//

app.get("/shoppinglist", function (req, res) {
res.json(shoppingList);
console.log(shoppingList)
});

app.listen(PORT, function(){
    console.log("I'm listening");
})