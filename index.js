import axios from "axios";
import express from "express";

const app = express();
const port = 3000;
const URL = "https://api.breakingbadquotes.xyz/v1/quotes";

app.use(express.static("public"));

app.get("/", async (req, res)=>{
    try{
        const result = await axios.get(URL);
        const details = result.data[0];
        res.render("index.ejs", {
            quote : details.quote,
            person :details.author
        });
    }catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});


app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
});