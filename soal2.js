// Membuat Variable fs untuk mengambil module fs
let fs = require("fs");

// Membuat Syntax Read File dengan module fs
fs.readFile("log.txt", "utf-8", (err, data) => {
    // Membuat Statement If Else untuk mendeteksi error atau tidak
    if (err){
        console.error(`Terjadi Kesalahan: `, err.message);
    } else {
        console.info(data);
        console.info("Berhasil Membaca Data Logging");
        
        // Membuat Syntax Append File dengan module fs
        let writeData = "\nNew File Content";
        fs.writeFile("log.txt", writeData, (err) => {
            if (err) {
                console.error(`Terjadi Kesalahan: `, err.message);
            } else {
                console.info("Data berhasil ditulis ke log.txt");
            }
        });
    }
});

