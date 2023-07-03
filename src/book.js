const Book = (props) => {
  const { img, title, author,number} = props

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <h5 className="author">{author.toUpperCase()}</h5>
      <span className="number">#{number}</span>
    </article>
  )
}
export default Book