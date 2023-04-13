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

function AuthorModal({ author, bio, authorImg }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
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
          <img src={authorImg} alt={author} style={imgStyleModal} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h3 style={inlineHeadingStyle}>{author.toUpperCase()}</h3>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            {bio}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default AuthorModal;
