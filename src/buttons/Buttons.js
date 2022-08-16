import Button from "../buttonType/Button";
import styles from "../searchbar/searchbar.module.scss";
function Buttons(props) {
  const buttonValues = ["Images", "Videos"];
  return (
    <ul
      className={
        props.isActive === false
          ? styles.form__radioButtons
          : `${styles.form__radioButtons} ${styles.form__visible}`
      }
    >
      {buttonValues.map((buttonValue) => (
        <Button key={buttonValue} buttonValue={buttonValue} />
      ))}
    </ul>
  );
}
export default Buttons;
