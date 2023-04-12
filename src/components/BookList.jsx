import Book from './Book';
import { books } from './booksData';
import { Typography } from '@mui/material';

function BookList() {
  // const getBook = (id) => {
  //   const book = books.find((book) => book.id === id);
  //   console.log(book);
  // };

  return (
    <>
      <div className="app-title">
        <Typography variant="h2">Best seller Books</Typography>
      </div>
      <section className="booklist">
        {books.map((book, index) => {
          // const { img, title, author, id } = book;
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

export default BookList;

/*
  - Made the books array variable to have in items every single book.
  - Using the map() method, it helps to go through each item and get the information we want. 
    It simplifies the code to not have so many elements for a component. 
    In this case after having 3 <Book /> components, now there is only one. 
  - Destructuring book helps to use less code and look cleaner.
  - Get rid of the "key" prop warning in the console.
  
  - There are only 4 items in each object in the viariable book. 
    This would be a problem if there are many items, because you must call each one in props to call them and in the destructured variable.
    Options to solve:
      - Pass the entire object as a prop.
      - Use spread operator 

  - The curly brackets in the import from books, it is important. It means that we get a sepcific item from the file.
*/
