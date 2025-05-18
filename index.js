const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.set("view engine", "ejs");

const artistSchema = new moongoose.Schema({
    accountName: { type: String, required: true },
    image: {type: String , default:""},
    Price: {type: Number},
    forSale: {type: Boolean}
})

const Artist = mongoose.model("Artist", artistSchemaSchema, "Artists");

app.get("/artSale", async (req, res) => {
    const artists = await Artist.find({});
    res.render("artist.ejs", { artists });
});

app.patch("/patch/:id", async (req, res) => {
const response = await Artist.findByIdAndUpdate({_id: req.body.id})
res.json(response);
});

app.post("/ArtGallery", async (req, res) => {
const response = await ArtGallery.save(req.body)
res.json(response);
});


app.delete("/main/delete/:accountName", async(req,res) =>{
  const response = await Artist.findOneAndDelete({
    artist: req.params.name
  })
  res.json(response);
})



async function artistServer() {
    
    await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.gc1au.mongodb.net/Aruna?retryWrites=true&w=majority&appName=Cluster0");

    
     artistServer()

    app.listen(3000, () => {
        console.log(`Server running.`);
    });
}

artistServer();