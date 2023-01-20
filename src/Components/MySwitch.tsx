import React from 'react';
import Form from 'react-bootstrap/Form';

export const MySwitch: React.FC <any> = ({show, setShow}) => {
  return (
    <Form.Check 
      type="switch"
      id="custom-switch"
      label="Show selected only"
      checked={show}
      onChange={() => {
        setShow(!show);
      }}
    />
  );
};

