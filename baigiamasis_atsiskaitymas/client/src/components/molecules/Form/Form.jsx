import { useState } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import {
  StyledForm,
  StyledFormControl,
  StyledLabel,
  StyledErrorMessage,
} from './styles';

const Form = ({ inputs, handleSubmit }) => {
  const [notValid, setNotValid] = useState([]);

  const validateSubmit = (e) => {
    e.preventDefault();

    const NotValid = inputs.filter((input) =>
      !input.required ? false : input.value ? false : true
    );

    if (!NotValid.length) {
      setNotValid([]);
      handleSubmit();
    } else {
      setNotValid(NotValid);
    }
  };

  return (
    <StyledForm onSubmit={validateSubmit}>
      {inputs.map((input) => (
        <StyledFormControl key={input.label}>
          <StyledLabel>{input.label}</StyledLabel>
          <Input
            type={input.type}
            value={input.value}
            setValue={input.setValue}
            placeholder={input.placeholder}
            color='secondary'
          />
          {notValid.find((x) => x.label === input.label) && (
            <StyledErrorMessage>{input.fromErrorMessage}</StyledErrorMessage>
          )}
        </StyledFormControl>
      ))}
      <StyledFormControl>
        <Button
          color='info'
          action={() => {}}
          text='Sign up'
          type='submit'
          fullWidth
        />
      </StyledFormControl>
    </StyledForm>
  );
};

export default Form;
