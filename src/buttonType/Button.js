import { SearchbarContext } from "../searchbar/Searchbar";
import styles from "../searchbar/searchbar.module.scss";
import PropTypes, { array } from "prop-types";
function Button(props) {
  const { buttonValue } = props;
  return (
    <SearchbarContext.Consumer>
      {({ handleType }) => (
        <li className={styles.form__buttonContainer} key={buttonValue}>
          <button
            className={styles.form__button}
            value={buttonValue}
            onClick={(e) => {
              e.preventDefault();
              handleType(e);
            }}
          >
            {buttonValue}
          </button>
        </li>
      )}
    </SearchbarContext.Consumer>
  );
}
Button.propTypes = {
  buttonValue: PropTypes.string,
};
export default Button;
