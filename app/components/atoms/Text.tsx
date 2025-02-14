import { FC } from "react";

interface TextProps {
  value: number;
}

const Text: FC<TextProps> = ({ value }) => {
  return <span className="counter-value">{value}</span>;
};

export default Text;
