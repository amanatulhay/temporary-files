const hitungPersegi = (sisi: number, hitung: string): number => {
    let result: number = 0;
    if (hitung == "luas"){
        result = Math.pow(sisi,2);
    } else if (hitung == "keliling"){
        result = 4*sisi;
    }
    return result
};

const hitungPersegiPanjang = (panjang: number, lebar: number, hitung: string): number => {
    let result: number = 0;
    if (hitung == "luas"){
        result = panjang*lebar;
    } else if (hitung == "keliling"){
        result = 2*(panjang+lebar);
    }
    return result
};

const hitungLingkaran = (jariJari: number, hitung: string): number => {
    let result: number = 0;
    if (hitung == "luas"){
        result = Math.PI*Math.pow(jariJari,2);
    } else if (hitung == "keliling"){
        result = 2*Math.PI*jariJari;
    }
    return result
};

const hitungKubus = (sisi: number, hitung: string): number => {
    let result: number = 0;
    if (hitung == "luasPermukaan"){
        result = 6*Math.pow(sisi,2);
    } else if (hitung == "volume"){
        result = Math.pow(sisi,3);
    }
    return result
};

const hitungBalok = (panjang: number, lebar: number, tinggi: number, hitung: string): number => {
    let result: number = 0;
    if (hitung == "luasPermukaan"){
        result = 2*((panjang*lebar)+(panjang*tinggi)+(lebar*tinggi));
    } else if (hitung == "volume"){
        result = panjang*lebar*tinggi;
    }
    return result
};

const hitungTabung = (jariJari: number, tinggi: number, hitung: string): number => {
    let result: number = 0;
    if (hitung == "luasPermukaan"){
        result = ( 2*Math.PI*Math.pow(jariJari,2) ) + ( 2*Math.PI*jariJari*tinggi );
    } else if (hitung == "volume"){
        result = Math.PI*Math.pow(jariJari,2)*tinggi;
    }
    return result
};


module.exports = {
    hitungPersegi,
    hitungPersegiPanjang,
    hitungLingkaran,
    hitungKubus,
    hitungBalok,
    hitungTabung
}