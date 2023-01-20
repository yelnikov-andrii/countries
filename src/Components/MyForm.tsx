/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MyButton } from './MyButton';
import { MyList } from './MyList';
import { MySwitch } from './MySwitch';

export const MyForm: React.FC <any> = ({countries}) => {
  const [query, setQuery] = React.useState<string>('');
  const [selectedCountries, setSelectedCountries] = React.useState<string[]>([]);
  const [show, setShow] = React.useState(false);

  const filterCountries = React.useCallback(() => {
    const filteredCountries = countries.filter((country: any) => country.toUpperCase().includes(query.toUpperCase()) || country.toLowerCase().includes(query.toLowerCase()));
    return filteredCountries;
  }, [query])

  const filteredCountries = React.useMemo(() => {
    return filterCountries()
  }, [query]);

  const addCountry = React.useCallback((country: string) => {
      setSelectedCountries(countries => [...countries, country]);
  }, [selectedCountries]);

  const removeCountry = React.useCallback((country: string) => {
    setSelectedCountries(countries => [...countries].filter(count => count !== country));
  }, [selectedCountries]);

  const saveCountries = React.useCallback(() => {
    if (selectedCountries.length > 0) {
      localStorage.setItem('selectedCountries', JSON.stringify(selectedCountries))
    }
  }, [selectedCountries]);

  const clearAll = () => {
    if (query) {
      setQuery('');
    }

    if (selectedCountries.length > 0) {
      setSelectedCountries([]);
    }

    if (show === true) {
      setShow(false);
    }

    localStorage.clear();
  }

  React.useEffect(() => {
    const countriesFromStorage = localStorage.getItem('selectedCountries') ? JSON.parse(localStorage.getItem('selectedCountries') || '{}') : null;
  
    if (countriesFromStorage) {
      console.log(countriesFromStorage)
      setSelectedCountries(countriesFromStorage);
    }
  }, []);

  return (
      <Form className='form'>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 form__search"
          aria-label="Search"
          onChange={(e) => {
            setQuery(e.target.value)
          }}
          value={query}
        />
        <Form.Group className='form__controls'>
          <MySwitch show={show} setShow={setShow}/>
          <MyButton clearAll={clearAll} />
        </Form.Group>
        <MyList 
          show={show} 
          selectedCountries={selectedCountries} 
          addCountry={addCountry} 
          removeCountry={removeCountry} 
          filteredCountries={filteredCountries} 
        />
          <Form.Group className='form__footer'>
            <Button 
              variant="success" 
              className='form__btn--footer'
              onClick={(e) => {
                e.preventDefault();
                saveCountries();
              }}
            >
              Save
            </Button>
          </Form.Group>
        </Form>
  );
};

