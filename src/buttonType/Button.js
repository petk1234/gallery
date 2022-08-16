import { SearchbarContext } from "../searchbar/Searchbar";
import styles from "../searchbar/searchbar.module.scss";
function RadioButton(props) {
  const { buttonValue } = props;
  console.log(buttonValue);
  return (
    <SearchbarContext.Consumer>
      {({ djj }) => (
        <li className={styles.form__buttonContainer} key={buttonValue}>
          <button
            className={styles.form__button}
            // type="radio"
            // id={radioValue}
            // name="types"
            value={buttonValue}
            onClick={(e) => {
              e.preventDefault();
              djj(e);
            }}
          >
            {buttonValue}
          </button>
          {/* <label htmlFor={radioValue}>{radioValue}</label> */}
          {/* <input
            className={styles.form__radioButton}
            type="radio"
            id={radioValue}
            name="types"
            value={radioValue}
            onChange={(e) => djj(e)}
          ></input>
          <label htmlFor={radioValue}>{radioValue}</label> */}
        </li>
      )}
    </SearchbarContext.Consumer>
  );
}
export default RadioButton;
