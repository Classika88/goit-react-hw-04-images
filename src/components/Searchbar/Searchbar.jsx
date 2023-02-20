import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarHeader,
  SearchbarForm,
  SearchbarButton,
  SearchButtonLabel,
  SearchbarInput,
} from './Styled';

export const Searchbar = props => {
  const [name, setName] = useState('');

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    props.onSubmit(name.trim().toLowerCase());
    resetForm();
  };
  const resetForm = () => {
    setName('');
  };

  return (
    <SearchbarHeader>
      <SearchbarForm onSubmit={handleFormSubmit}>
        <SearchbarButton type="submit">
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchbarButton>

        <SearchbarInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="name"
          Value={name}
          onChange={handleChange}
        />
      </SearchbarForm>
    </SearchbarHeader>
  );
};

Searchbar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};
