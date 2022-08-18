import { SearchbarContext } from "../searchbar/Searchbar";
import styles from "../searchbar/searchbar.module.scss";
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
export default Button;
