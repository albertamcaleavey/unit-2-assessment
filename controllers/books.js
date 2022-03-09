import { Book } from '../models/book.js'


function index(req, res) {
  Book.find({})
  .then(books => {
    res.render('books/index', {
      books,
      title: "Book List"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/books")
  })
}

function newBook(req, res) {
  res.render("books/new", {
    title: "Add a Book",
  })
}

function create(req, res) {
  console.log(req.body)
  Book.create(req.body)
  .then(book => {
    res.redirect('/books')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/books")
  })
}

function deleteBook(req, res) {
  Book.findByIdAndDelete(req.params.id)
  .then(()=> {
    res.redirect('/books')
  })
}


export {
  index,
  newBook as new,
  create,
  deleteBook as delete,
}