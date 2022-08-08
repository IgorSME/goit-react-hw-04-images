import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonLabel, Form, Header, Input } from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');

  const hahdleSearchChange = e => {
    setSearchName(e.currentTarget.value.toLowerCase());
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    if (searchName.trim() === '') {
      toast.error('Введіть запит!!!');
      return;
    }
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <Header>
      <Form onSubmit={handleSearchSubmit}>
        <Button type="submit">
          <FcSearch />
          <ButtonLabel>Search</ButtonLabel>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={hahdleSearchChange}
        />
      </Form>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
