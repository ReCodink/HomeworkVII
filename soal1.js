let rumus = require('./rumus');

const readline = require('readline');

const buatInputan = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Mengambil input dari user
console.info("Selamat Datang di Rumus Persegi dan Persegi Panjang");
buatInputan.question(`Silahkan masukkan panjang sisi persegi: `, (inputSisi) => {
    buatInputan.question(`Silahkan masukkan panjang untuk Persegi Panjang: `, (inputPanjang) => {
        buatInputan.question(`Silahkan masukkan lebar untuk Persegi Panjang: `, (inputLebar) => {
            const sisiPersegi = parseInt(inputSisi);
            const panjangPersegiPanjang = parseFloat(inputPanjang);
            const lebarPersegiPanjang = parseFloat(inputLebar);

            if(!isNaN(sisiPersegi, panjangPersegiPanjang, lebarPersegiPanjang)) {
                const kelilingPersegi = rumus.hitungKelilingPersegi(sisiPersegi);
                const luasPersegi = rumus.hitungLuasPersegi(sisiPersegi);
                const kelilingPersegiPanjang = rumus.hitungKelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
                const luasPersegiPanjang = rumus.hitungLuasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);

                console.info(`Hasil dari Perhitungan Rumus Persegi dan Persegi Panjang`);
                // Hasil Rumus Persegi
                console.info(`Keliling Persegi: ${kelilingPersegi}`);
                console.info(`Luas Persegi: ${luasPersegi}`);

                // Hasil Rumus Persegi Panjang
                console.info(`Keliling Persegi Panjang: ${kelilingPersegiPanjang}`);
                console.info(`Luas Persegi Panjang: ${luasPersegiPanjang}`);
            } else {
                console.info(`Masukkan tidak valid. Harap masukkan input yang benar`);
            }
            buatInputan.close();
        });
    });
});
