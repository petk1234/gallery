import Button from "../buttonType/Button";
import styles from "../searchbar/searchbar.module.scss";
import React from "react";
import PropTypes, { array } from "prop-types";
function Buttons(props) {
  const buttonValues = ["Images", "Videos"];
  console.log("Radio Buttons");
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
Buttons.propTypes = {
  isActive: PropTypes.bool,
};
export default React.memo(Buttons);
