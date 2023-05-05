import axios from 'axios';

export async function booksApi () {
const responsive = await axios.get( `https://books-backend.p.goit.global/books/top-books`)
return responsive.data
}


export async function booksId(id) {
    const responsive = await axios.get(`https://books-backend.p.goit.global/books/${id}`)
    return responsive.date
  }


  export async function booksCategory(category) {
    const responsive = await axios.get(`https://books-backend.p.goit.global/books/category?category=${category}`)
    return responsive.date
  }


  export async function booksList() {
    const responsive = await axios.get(`https://books-backend.p.goit.global/books/category-list`)
    return responsive.date
  }


  


  