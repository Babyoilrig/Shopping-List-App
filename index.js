import express from "express";
import shoppingList from "./data.js";
//import path from "path";
//import bodyParser from "body-parser";


const PORT = 3000;
const app = express();


app.get("/shoppinglist", function (req, res) {
res.json(shoppingList);
console.log(shoppingList)
});

app.listen(PORT, function(){
    console.log("I'm listening");
})

export default getShoppingList;


// app.post("/", function (req, res) {
//  const newItem = req.body;
// console.log("The user gave me:", newItem);
// createNewItem(newItem);
// res.json({message: "We did it", success: true, payload: newItem});
// });



// function addItems(){
//     addBoxValue = document.getElementById('additem').value;
//     shoppingList.push(addBoxValue);
//     console.log(shoppingList);
// }