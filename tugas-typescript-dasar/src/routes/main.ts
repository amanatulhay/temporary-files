const express =  require('express')
const { getGenres, getGenreById, createGenre, updateGenre, deleteGenre } = require('../controllers/genreControllers')

const router = express.Router()

router.get('/api/v1/genre', getGenres)
router.get('/api/v1/genre/:id', getGenreById)
router.post('/api/v1/genre', createGenre)
router.put('/api/v1/genre/:id', updateGenre)
router.delete('/api/v1/genre/:id', deleteGenre)

module.exports = router