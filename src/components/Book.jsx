const inlineHeadingStyle = {
  color: '#617d98',
  fontSize: '0.75rem',
  marginTop: '0.5rem',
};

function Book() {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81fyoFoaxlL._AC_UL900_SR900,600_.jpg"
        alt="Dog man"
      ></img>
      <h3>Dog Man: Twenty Thousand Fleas Under the Sea</h3>
      <h3 style={inlineHeadingStyle}>Dav Pilkey</h3>
    </article>
  );
}

export default Book;
