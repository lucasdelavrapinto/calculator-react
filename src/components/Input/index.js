import { InputContainer } from './styles';

const Input = ({value}) => {
  return (
    <InputContainer type="text" disabled value={value} />
  );
};

export default Input;
