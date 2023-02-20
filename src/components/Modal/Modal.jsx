import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalOverlay, ModalStyled } from './Styled';

export const Modal = props => {
  useEffect(() => {
    window.addEventListener('keydown', clickOnEsc);

    return () => {
      window.removeEventListener('keydown', clickOnEsc);
    };
  });
  const clickOnEsc = event => {
    if (event.code === 'Escape') {
      props.closeModal();
    }
  };

  const clickOnBackDrop = event => {
    if (event.target === event.currentTarget) {
      props.closeModal();
    }
  };

  const { largeImageURL, tags } = props;

  return (
    <ModalOverlay onClick={clickOnBackDrop}>
      <ModalStyled>
        <img src={largeImageURL} alt={tags} />
      </ModalStyled>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
