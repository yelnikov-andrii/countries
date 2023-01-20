import React from 'react';
import Button from 'react-bootstrap/Button';

export const MyButton: React.FC <any> = ({setQuery, setSelectedCountries, setShow}) => {
  return (
    <Button 
      className='form__btn'
      variant='danger'
      onClick={(e) => {
        e.preventDefault();
        setQuery('');
        setSelectedCountries([]);
        setShow(false);
        localStorage.clear();
      }}
    >
      Clear all
    </Button>
  );
};

