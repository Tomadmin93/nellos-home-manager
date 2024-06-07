interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return <input {...rest} className="text-black"></input>;
}
