// Membuat Variable fs untuk mengambil module fs
const fs = require("fs");

// variable sebagai penampung mengambil data dari homework-log
const dataLog = "homework-log.txt"; 

// Membuat fungsi readFile untuk membaca isi dataLog
fs.readFile(dataLog, "utf-8", (err, data) => {
    // Membuat Statement If Else untuk mendeteksi error atau tidak
    if (err){
        console.error(`Terjadi Kesalahan saat menulis file: `, err.message);
    } else {
        console.info(data);
        console.info("Berhasil Membaca Data Logging");
        
        // variabel sebagai penampung baru dataLog yang akan dieksekusi ke file log
        const newDataLog = data + dataLog;
        
        // Membuat fungsi writeFile untuk menulis data dari newDataLog ke file log
        fs.writeFile("/log.txt", newDataLog, "utf-8", (err) => {
            if (err) {
                console.error(`Terjadi Kesalahan saat menulis file: `, err.message);
            } else {
                console.info("Data berhasil ditulis ke file log.txt");
            }
        });
    }
});

