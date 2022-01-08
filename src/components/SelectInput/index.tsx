import React from 'react';
import { Container } from './styles';

interface ISeletctInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[],
}

const SelectInput: React.FC<ISeletctInputProps> = ({ options }) => {
  return (
    <Container>
      <select>
        {
          options.map(option => (
            <option
              key={option.value}
              value={option.value}>{option.label}
            </option>
          ))
        }
      </select>
    </Container>
  );
}

export default SelectInput;
