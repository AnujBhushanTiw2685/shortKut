import express from "express";
import redirect from "./controllers/redirects.controller";
import url from "./controllers/url.controller";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://short-kut.vercel.app/", // <-- Add your Vercel URL here
    ],
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ Message: "Hi there" });
});

app.use("/", redirect);
app.use("/api/url", url);

export default app;