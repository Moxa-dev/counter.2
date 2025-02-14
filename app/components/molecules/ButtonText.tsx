import Button from '../atoms/Button';
import Text from '../atoms/Text';

interface ButtonTextProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const ButtonText = ({ value, onIncrement, onDecrement }: ButtonTextProps): JSX.Element => {
  return (
    <div className="flex gap-2 items-center">
      <Button onClick={onDecrement}>-</Button>
      <Text value={value} />
      <Button onClick={onIncrement}>+</Button>
    </div>
  );
};

export default ButtonText;