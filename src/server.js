import app from "./app.js"; // pastikan file ini benar dan gunakan ekstensi .js jika menggunakan ES6 modules

const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
