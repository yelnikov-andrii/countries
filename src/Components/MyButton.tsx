import React from 'react';
import Button from 'react-bootstrap/Button';

export const MyButton: React.FC <any> = ({clearAll}) => {
  return (
    <Button 
      className='form__btn'
      variant='danger'
      onClick={(e) => {
        e.preventDefault();
        clearAll();
      }}
    >
      Clear all
    </Button>
  );
};

