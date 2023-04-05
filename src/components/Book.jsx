const inlineHeadingStyle = {
  color: '#617d98',
  fontSize: '0.75rem',
  marginTop: '0.5rem',
  letterSpacing: '2px',
};

function Book({ img, title, author, children, getBook, id }) {
  const getSingleBook = () => {
    getBook(id);
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <button onClick={() => getBook(id)}>Display Id</button>
      <h3 style={inlineHeadingStyle}>{author.toUpperCase()}</h3>
      {children}
    </article>
  );
}

export default Book;

/*
  - when we use getBook() in line 13, it gets invoked as soon the page is loaded. <button onClick={getBook(id)}>Display Id</button>
    we do not want to do this cause is not happening in a button click, it happens when the app loads because of the parenthesis runs instantly.

    Here are the ways to do it better: 
    - First option setup wrapper inside of the child component.
      Make a new function and inside the new function invoke the getBook function.
      this will fix the error to show the data when the page loads instead sgow the data when the button is clicked.
    - Second option, wrap in the anonymous func.
      The reference is kept with the new function that invokes the getBook function. 
      In this case it is not named in the button element but an anonymous function (Arrow function) is passed.
*/
