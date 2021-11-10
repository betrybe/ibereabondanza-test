import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInputContainer = styled.div`
display: flex;
margin: 5px;
`;

export default function Input({ label, type, id, value, onChange }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e.currentTarget.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <StyledInputContainer>
      <label htmlFor={ id }>
        { label }
        <input
          data-testid={ id }
          type={ type }
          id={ id }
          onChange={ handleChange }
          value={ inputValue }
        />
      </label>
    </StyledInputContainer>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
