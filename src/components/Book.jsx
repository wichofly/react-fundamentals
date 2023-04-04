const inlineHeadingStyle = {
  color: '#617d98',
  fontSize: '0.75rem',
  marginTop: '0.5rem',
  letterSpacing: '2px',
};

function Book({ img, title, author, children }) {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h3 style={inlineHeadingStyle}>{author.toUpperCase()}</h3>
      {children}
    </article>
  );
}

export default Book;
