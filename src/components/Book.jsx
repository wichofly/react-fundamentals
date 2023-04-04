const inlineHeadingStyle = {
  color: '#617d98',
  fontSize: '0.75rem',
  marginTop: '0.5rem',
  letterSpacing: '2px',
};

function Book() {
  const title = 'Dog Man: Twenty Thousand Fleas Under the Sea';
  const author = 'Dav Pilkey';

  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81fyoFoaxlL._AC_UL900_SR900,600_.jpg"
        alt="Dog man"
      ></img>
      <h3>{title}</h3>
      <h3 style={inlineHeadingStyle}>{author.toUpperCase()}</h3>
    </article>
  );
}

export default Book;
