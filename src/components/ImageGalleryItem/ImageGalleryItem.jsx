import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItemStyled, ImageGalleryItemImg } from './Styled';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const { webformatURL, tags, id, largeImageURL } = image;
  return (
    <ImageGalleryItemStyled>
      <ImageGalleryItemImg
        onClick={toggleModal}
        src={webformatURL}
        alt={tags}
        id={id}
      />

      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          closeModal={toggleModal}
          tags={tags}
        />
      )}
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.protoTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
