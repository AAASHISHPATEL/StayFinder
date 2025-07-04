import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
dotenv.config()
import cors from "cors"
import userRouter from "./routes/user.route.js"
import listingRouter from "./routes/listing.route.js"
import bookingRouter from "./routes/booking.route.js"
import path from "path";
let port = process.env.PORT || 6000

let app = express()
app.use("/public", express.static(path.join(process.cwd(), "public")));
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    
    origin: process.env.CLIENT_URL, 
    credentials: true, // Allow cookies to be sent with requests
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }) 
);

app.use("/api/auth", authRouter )
app.use("/api/user", userRouter )
app.use("/api/listing",listingRouter )
app.use("/api/booking",bookingRouter )


app.listen(port,()=>{
    connectDb()
    console.log(`Server is running on port ${port}`)
})