import React from 'react';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

interface Props {
  country: string;
  selectedCountries: string[];
  addCountry: (country: string) => void;
  removeCountry: (country: string) => void;
}

export const MyItem: React.FC <Props> = ({country, selectedCountries, addCountry, removeCountry}) => {
  return (
    <ListGroup.Item className='form__item' key={country}>
    <Form.Check 
      type="checkbox"
      onChange={(e) => {
        if (e.target.checked) {
          addCountry(country)
        } else {
          removeCountry(country);
        }
      }}
      checked={true ? selectedCountries.includes(country) : false}
    />
    {country}
  </ListGroup.Item>
  );
};

