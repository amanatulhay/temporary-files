import {Request, Response} from 'express'
const { hitungPersegi, hitungPersegiPanjang, hitungLingkaran, hitungKubus, hitungBalok, hitungTabung } = require('../utils/calculation')

const hitungBangunDatar = (req: Request, res: Response) => {
    
    if (req.query.hitung == "luas" || req.query.hitung == "keliling"){
        let result: number = 0;
        switch( req.params.bangun) {
            case 'persegi':
                result = hitungPersegi(parseInt(req.query.sisi as string), req.query.hitung); 
                break;
            case 'persegi-panjang':
                result = hitungPersegiPanjang(parseInt(req.query.panjang as string), parseInt(req.query.lebar as string), req.query.hitung); 
                break;
            case 'lingkaran':
                result = hitungLingkaran(parseInt(req.query.jariJari as string), req.query.hitung); 
                break; 
            default:
                break;
          }
        
        res.status(200).json({
            parameter: req.query,
            bangun: req.params.bangun,
            result: result,
        });
    } else {
        res.status(400).json({
            error: "parameter hitung bangung datar hanya bisa menggunakan luas dan keliling",
        });
    }
}

const hitungBangunRuang = (req: Request, res: Response) => {
    
    if (req.query.hitung == "luasPermukaan" || req.query.hitung == "volume"){
        let result: number = 0;
        switch( req.params.bangun) {
            case 'kubus':
                result = hitungKubus(parseInt(req.query.sisi as string), req.query.hitung); 
                break;
            case 'balok':
                result = hitungBalok(parseInt(req.query.panjang as string), parseInt(req.query.lebar as string), parseInt(req.query.tinggi as string), req.query.hitung); 
                break;
            case 'tabung':
                result = hitungTabung(parseInt(req.query.jariJari as string), parseInt(req.query.tinggi as string), req.query.hitung); 
                break;
            default:
                break;
          }
        
        res.status(200).json({
            parameter: req.query,
            bangun: req.params.bangun,
            result: result,
        });
    } else {
        res.status(400).json({
            error: "parameter hitung bangung ruang hanya bisa menggunakan luasPermukaan dan volume",
        });
    }
}

module.exports = {
    hitungBangunDatar,
    hitungBangunRuang
}