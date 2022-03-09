import { Book } from '../models/book.js'


function index(req, res){
  Book.find({})
  .then(books => {
    res.render('books/index', {
      books,
      title: 'Book List'
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


export {
  index,
  newBook as new,

}