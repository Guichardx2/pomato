import styles from "./styles.module.css";

type InputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

const Input = ({ type, id, labelText, ...props }: InputProps) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input type={type} id={id} {...props} className={styles.input} />
    </>
  );
};

export default Input;
