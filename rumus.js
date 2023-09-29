// Module Rumus Persegi
exports.hitungKelilingPersegi = function (sisi) {
    return 4 * sisi;
}

exports.hitungLuasPersegi = function (sisi) {
    return sisi * sisi;
}

// Module Rumus Persegi Panjang
exports.hitungKelilingPersegiPanjang = function (panjang, lebar) {
    return 2 * (panjang + lebar);
}

exports.hitungLuasPersegiPanjang = function (panjang, lebar) {
    return panjang * lebar;
}