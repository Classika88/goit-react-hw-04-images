import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryStyled } from './Styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryStyled>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </ImageGalleryStyled>
  );
};
ImageGallery.propTypes = {
  image: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};
