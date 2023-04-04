import Book from './Book';

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81fyoFoaxlL._AC_UL900_SR900,600_.jpg',
  title: 'Dog Man: Twenty Thousand Fleas Under the Sea',
  author: 'Dav Pilkey',
};

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/714Da0RQA5L._AC_UL900_SR900,600_.jpg',
  title:
    'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  author: ' James Clear',
};

const thirdBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/810bsxh1MmL._AC_UL900_SR900,600_.jpg',
  title: 'How to Catch the Easter Bunny',
  author: ' Adam Wallace',
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
    </section>
  );
}

export default BookList;
