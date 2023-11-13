import React, { Fragment,useState, useEffect} from 'react'
import { Typography, CardContent, Box, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Book1 from '../Images/book1.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

const CardComp = ({ book }) => {

  const author = book.volumeInfo.authors && book.volumeInfo.authors.length > 0 ? book.volumeInfo.authors[0] : 'Unknown Author';
  const imgtest = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : Book1;

  const buttonStyle = {
    textTransform: 'none',
    fontWeight: 'normal'
  };

  const content = {
    display: 'flex',
    padding: '16px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '14px'
  };
  const TitleStyle = {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  }
  const ImageFixedSizeCard = {
    width: '260.25px',
    height: '420.38px'

  };
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
    setIsFavorite(storedFavorites[book.id]);
  }, [book.id]);

  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
        if (prevIsFavorite) {
        delete storedFavorites[book.id];
      } else {
        storedFavorites[book.id] = true;
      }
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
        return !prevIsFavorite;
       
    });
  };

  return (
    <Box>
      <div sx={{ border: 'none' }}>
        <CardContent sx={content}>
          <img style={ImageFixedSizeCard} src={imgtest} alt='book' />

          <Typography variant='h3' style={TitleStyle}>{book.volumeInfo.title || 'not found'}</Typography>
          <Typography variant='subtitle1' >{author}</Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h6'>$20.46</Typography>
            <IconButton onClick={handleFavoriteClick}>
            {isFavorite ? (
              <FavoriteIcon sx={{ color: 'purple' }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: 'purple' }}  />
            )}
          </IconButton>
          

            
          </Box>
          <Button style={buttonStyle} variant="contained" startIcon={<ShoppingCartIcon />}>
            Add to cart
          </Button>
        </CardContent>
      </div>
    </Box>
  )
}

export default CardComp
