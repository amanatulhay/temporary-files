const { connectionPool } = require("../config/database")
const { Genre } = require ('../models/genre')

import {Request, Response} from 'express'
 
interface GenreDatabase {
  id: number;
  name: string;
}

const getGenres = (req: Request, res: Response) => {
  connectionPool.query("SELECT * FROM genres",(err: Error, data: GenreDatabase[]) => {
    if(err) {
        console.error(err);
        return;
    }
    // rows fetch
    let genres = data.map(el=>{
      let {id, name} = el 
      let genre = new Genre(id, name)
      return genre
    })
    
    res.status(200).json({
        message: "tampil data berhasil",
        data: genres,
    });
  })
}
 
const getGenreById = (req: Request, res: Response) => {
  let {id}= req.params
  connectionPool.query(`SELECT * FROM genres where id=${id}`,(err: Error, data: GenreDatabase[]) => {
    if(err) {
        console.error(err);
        return;
    }

    if(data.length ==0){
      res.status(200).json({
        message: "Detail Data Genre",
        data: `Data Genre untuk id = ${req.params.id} tidak ada`,
      });
    } else{
      let {id, name} = data[0] 
      let genre = new Genre(id, name)
  
      res.status(200).json({
          message: "Detail Data Genre",
          data: genre,
      });
    }
  })
}

const createGenre = (req: Request, res: Response) => {
    let {name}= req.body

    duplikatGenre(name, (resultId: any) => {
      if(resultId==0){ // tidak duplikat
        connectionPool.query(`INSERT INTO genres (name, created_at, updated_at) VALUES ('${name}', NOW(), NOW())`,(err: Error, data: any) => {
          if(err) {
              console.error(err);
              return;
          }
        
          res.status(200).json({
            message: "Tambah Genre berhasil",
          });
        })
      } else { // found duplicate
        res.status(404).json({ message: `Name ${name} duplikat!` });    
      }
    })
}

const updateGenre = (req: Request, res: Response) => {
    let {name}= req.body
    let {id}= req.params

    duplikatGenre(name, (resultId: any) => {
      if((resultId==0)||(resultId==id)){ // tidak duplikat atau duplikatnya di id yang sama
        connectionPool.query(`UPDATE genres SET name='${name}', updated_at=NOW() WHERE id=${id}`,(err: Error, data: any) => {
          if(err) {
            console.error(err);
            return;
          }
    
          res.status(200).json({
            message: "Update Genre berhasil",
          });
        })    
      } else { // found duplicate
        res.status(404).json({ message: `Name ${name} duplikat!` });
      }
    })
}

const deleteGenre = (req: Request, res: Response) => {
    let {id}= req.params
  
    connectionPool.query(`DELETE FROM genres WHERE id=${id}`,(err: Error, data: any) => {
  
      if(err) {
        console.error(err);
        return;
      }
      
      res.status(200).json({
        message: "berhasil Menghapus Genre",
      });
    })
}

const duplikatGenre = (name: string, callback:any) => {
  connectionPool.query("SELECT * FROM genres",(err: Error, data: GenreDatabase[]) => {
    if(err) {
        console.error(err);
        return callback(err);
    }

    let duplikatId = 0;
    data.forEach(el => {
      if(konversiString(el.name) === konversiString(name)){
        duplikatId = el.id;
      }     
    });
    callback(duplikatId);    
  })
}

const konversiString = (str: string): string => str.replace(/\s+/g, ' ').trim().toLowerCase();


module.exports = {
  getGenreById,
  getGenres,
  createGenre,
  updateGenre,
  deleteGenre
}