const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.set("view engine", "ejs");


const artSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: {type: String},
    medium: {type: String},
    image: {type: String , default: "" },
    price: {type: Number},
    forSale: {type: Boolean}
})

const Art = mongoose.model("Artist", artSchema, "ArtPieces");

app.get("/", async (req, res) => {
    const artPieces = await Art.find({});
    res.render("artist.ejs", { artPieces });
});

app.patch("/patch/:id", async (req, res) => {
const response = await Art.findByIdAndUpdate({_id: req.body.id})
res.json(response);
});

app.post("/ArtGallery", async (req, res) => {
const newArt = new Art(req.body)
const response = await newArt.save()
res.json(response);
});


app.delete("/main/delete/:id", async(req,res) =>{
  const response = await Art.findOneAndDelete({_id: req.params.id})
  res.json(response);
})



async function artistServer() {
    
    await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.gc1au.mongodb.net/Aruna?retryWrites=true&w=majority&appName=Cluster0");

    app.listen(3000, () => {
        console.log(`Server running.`);
    });
}

artistServer();