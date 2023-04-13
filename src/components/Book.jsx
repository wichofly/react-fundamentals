import { useState } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';

const inlineHeadingStyle = {
  color: '#617d98',
  fontSize: '0.75rem',
  marginTop: '0.5rem',
  letterSpacing: '2px',
};

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #333',
  borderRadius: '2rem',
  boxShadow: 24,
  p: 4,
};

const imgStyleModal = {
  width: '50%',
  objectFit: 'cover',
  position: 'relative',
  top: '50%',
  left: '25%',
};

function Book({ img, title, author, children, number, bio, authorImg }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const getSingleBook = () => {
  //   getBook(id);
  // };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      {/* <button onClick={() => getBook(id)}>Display Id</button> */}
      <Button onClick={handleOpen}>
        <h3 style={inlineHeadingStyle}>{author.toUpperCase()}</h3>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <img src={authorImg} alt={title} style={imgStyleModal} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h3 style={inlineHeadingStyle}>{author.toUpperCase()}</h3>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            {bio}
          </Typography>
        </Box>
      </Modal>
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
*/
