const express =  require('express')
const { getGenres, getGenreById, createGenre, updateGenre, deleteGenre } = require('../controllers/genreControllers')
const { hitungBangunDatar, hitungBangunRuang } = require('../controllers/hitungControllers')

const router = express.Router()

// Route CRUD Genre
router.get('/api/v1/genre', getGenres)
router.get('/api/v1/genre/:id', getGenreById)
router.post('/api/v1/genre', createGenre)
router.put('/api/v1/genre/:id', updateGenre)
router.delete('/api/v1/genre/:id', deleteGenre)

// Route Bangun Datar dan Ruang
router.get('/bangun-datar/:bangun', hitungBangunDatar);
router.get('/bangun-ruang/:bangun', hitungBangunRuang);


module.exports = router