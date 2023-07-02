import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'Jordan Moore',
    title: 'interesting Facts For Curious Minds',
    img: './images/book.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id}/>
      })}
    </section>
  )
}

// const Book = (props) => {
//   const { img, title, author } = props.book
//   return (
//     <article className="book">
//       <img src={img} />
//       <h2> {title} </h2>
//       <h4>{author.toUpperCase()}</h4>
//     </article>
//   )
// }



// const Book = ({book:{img, title,author}}) => {
//   return (
//     <article className="book">
//       <img src={img} />
//       <h2> {title} </h2>
//       <h4>{author.toUpperCase()}</h4>
//     </article>
//   )
// }
 
const Book = (props) => {
  console.log(props)
  const { img, title, author } = props
  return (
    <article className="book">
      <img src={img} />
      <h2> {title} </h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)