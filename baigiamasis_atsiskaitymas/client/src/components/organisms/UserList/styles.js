import styled from 'styled-components';

export const StyledHeading = styled.h2`
  margin: 0;
  text-align: center;
`;

export const StyledListContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    max-width: 750px;
    margin-top: 10px;
  }
`;

export const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.palette.info.dark};
  border-radius: 10px;
  margin-top: 10px;

  div {
    padding: 10px;
    display: flex;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 15px;
    margin-top: 0;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
