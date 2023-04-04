import Book from './Book';

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81fyoFoaxlL._AC_UL900_SR900,600_.jpg',
    title: 'Dog Man: Twenty Thousand Fleas Under the Sea',
    author: 'Dav Pilkey',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/714Da0RQA5L._AC_UL900_SR900,600_.jpg',
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: ' James Clear',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/810bsxh1MmL._AC_UL900_SR900,600_.jpg',
    title: 'How to Catch the Easter Bunny',
    author: ' Adam Wallace',
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book img={book.img} title={book.title} author={book.author} />;
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
*/