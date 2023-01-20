import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { MyItem } from './MyItem';
import { memo } from 'react';

const MyList: React.FC <any> = ({show, selectedCountries, addCountry, removeCountry, filteredCountries}) => {
  return (
    <ListGroup className='form__list'>
      {show === true && selectedCountries.length > 0 ? selectedCountries.map((country: string) => (
        <React.Fragment key={country}>
          <MyItem 
            country={country} 
            addCountry={addCountry} 
            removeCountry={removeCountry} 
            selectedCountries={selectedCountries} 
          />
        </React.Fragment>
      )) : filteredCountries.length > 0 && show === false ? filteredCountries.map((country: string) => (
        <React.Fragment key={country}>
          <MyItem 
            country={country} 
            addCountry={addCountry} 
            removeCountry={removeCountry} 
            selectedCountries={selectedCountries} 
          />
        </React.Fragment>

      )) : show === false ? (
        <ListGroup.Item className='form__item'>
          No countries found for your request
        </ListGroup.Item>
      ) : (
        <ListGroup.Item className='form__item'>
          No selected countries
        </ListGroup.Item>
      )}
      
    </ListGroup>
  );
};

export default memo(MyList);
