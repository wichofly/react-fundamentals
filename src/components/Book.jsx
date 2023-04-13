import AuthorModal from './AuthorModal';

function Book({ img, title, children, number, author, bio, authorImg }) {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <AuthorModal author={author} bio={bio} authorImg={authorImg} />
      <span className="number">#{number + 1}</span>
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
      I found out that it works well without making a new function in the child component. now is commented and it works.

  - Challange: 
    Get the number id for each book to display it. 
      - To achieve this, we pass the index as a second paramater in th map() method.
        we pass the number in the props of the book component and add  plus 1, cause array are zero index based. 

      - Add a title to the App on the top

  - I tried using the spread operator to call all AuthorModal properties, for example: "{...authorModal}".
    It didn't work, it required me to call every property in the Book component of AuthorModal component. 
    At the end it did work with the result of seeing the modal but not with the spread operator. 
*/
