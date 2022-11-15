interface ButtonProps {
   label: string;
   buttonClassName: string;
}

export const Button = ({ buttonClassName, label }: ButtonProps) => {
   return <button className={`${buttonClassName}`}>{label}</button>;
};
