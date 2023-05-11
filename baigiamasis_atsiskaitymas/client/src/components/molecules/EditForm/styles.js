import styled from 'styled-components';

export const StyledForm = styled.form`
  border: 1px solid ${(props) => props.theme.palette.info.dark};
  padding: 15px;
  border-radius: 10px;
  height: min-content;
  max-width: 400px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.palette.dark.main};

  @media screen and (min-width: 1024px) {
  }
`;

export const StyledFormControl = styled.div`
  margin-bottom: 0.75rem;

  input {
    width: 100%;
    padding: 5px;
  }
`;

export const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  display: block;
  color: ${(props) => props.theme.palette.dark.main};
  font-size: 1rem;
  font-weight: 700;
`;

export const StyledErrorMessage = styled.p`
  margin-top: 0.1rem;
  margin-bottom: 0.5rem;
  display: block;
  color: ${(props) => props.theme.palette.danger.main};
  font-size: 0.7rem;
  font-weight: 400;
`;
