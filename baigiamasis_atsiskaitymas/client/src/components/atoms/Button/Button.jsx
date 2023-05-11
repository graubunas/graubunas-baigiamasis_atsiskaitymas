import { StyledButton } from './styles';

const Button = ({ action, text, fullWidth, outline, color }) => {
  return (
    <StyledButton
      fullWidth={fullWidth}
      outline={outline}
      color={color}
      onClick={action}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
