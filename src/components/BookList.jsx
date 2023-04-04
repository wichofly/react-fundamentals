import Book from './Book';
import EventExample from './EventExample';

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81fyoFoaxlL._AC_UL900_SR900,600_.jpg',
    title: 'Dog Man: Twenty Thousand Fleas Under the Sea',
    author: 'Dav Pilkey',
    id: 1,
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/714Da0RQA5L._AC_UL900_SR900,600_.jpg',
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: ' James Clear',
    id: 2,
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/810bsxh1MmL._AC_UL900_SR900,600_.jpg',
    title: 'How to Catch the Easter Bunny',
    author: ' Adam Wallace',
    id: 3,
  },
];

function BookList() {
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        // const { img, title, author, id } = book;
        return <Book {...book} key={book.id} />;
      })}
    </section>
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
*/
