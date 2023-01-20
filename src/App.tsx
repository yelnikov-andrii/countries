import React from 'react';
import { Container } from 'react-bootstrap';
import { MyForm } from './Components/MyForm';
import { countries } from './countries';

function App() {
  return (
    <div className="App">
      <Container className='container'>
        <h5 className='App__title'>
          Search tab with ability to see “only selected” countries or “Clear all” results
        </h5>
        <MyForm countries={countries} />
      </Container>
    </div>
  );
}

export default App;
