const express= require("express");
const path=require("path")
const cookieParser=require("cookie-parser")
const { connectToMongoDB } = require("./connect");
const { checkForAuthentication , restrictTo }=require("./middlewares/auth")
const URL=require("./models/url")

const  urlRoute  = require("./routes/url.js");
const userRoute = require("./routes/user")
const staticRoute=require("./routes/staticRouter")

const app = express();
const port = 8001;


connectToMongoDB("mongodb+srv://sustainer2021:<db_password>@cluster0.byuxh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
  console.log("MongoDB Connected")
});

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url", urlRoute);
app.use("/user",userRoute); 
app.use("/", staticRoute);




app.get("/:shortId", async (req, res) => {
      const shortId = req.params.shortId;

      const entry = await URL.findOneAndUpdate(
        {
          shortId
        },
        {
          $push: {
            visitHistory: {
              timestamp: Date.now()
            }
          }
        }
      );
      //If entry comes to be null it will take care of it
     // if (!entry || !entry.redirectURL) return res.status(400).json({ error: "Url is required !!" });
  
      //If not null then return
      //The question mark after entry takes care of the above if statement.
      res.redirect(entry?.redirectURL);
    
  });


  

app.listen(port, () => {
    console.log("Server Started");
});
