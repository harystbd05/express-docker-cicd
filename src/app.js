import express from "express";
import router from "./routes/router.js"; // pastikan file ini benar dan gunakan ekstensi .js jika menggunakan ES6 modules

const app = express();

// Middleware untuk parsing JSON dan form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Gunakan rute yang didefinisikan di router.js
app.use("/", router);

export default app;
