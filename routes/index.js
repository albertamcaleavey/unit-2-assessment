import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('books/index', { title: 'Book List' })
})

export { 
  router
}
