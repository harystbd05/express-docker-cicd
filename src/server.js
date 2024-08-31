import app from "./app.js"; // pastikan file ini benar dan gunakan ekstensi .js jika menggunakan ES6 modules

const PORT = 5000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Listening on ${PORT}`);
  } else {
    console.error(`Error:`, error);
  }
});
