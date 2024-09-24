import { ButtonContainer } from './styles';

const Button = ({label, onClick}) => {
  return (
    <ButtonContainer onClick={onClick}>
      <div>{label}</div>
    </ButtonContainer>
  );
};

export default Button;
