import { UserContext } from "./App";
import { ImageContext } from "./imagegallery/ImageGallery";
const withContext = (WrappedComponent, typeConsumer) => {
  return function withContext(props) {
    return (
      <>
        {typeConsumer === "user" && (
          <UserContext.Consumer>
            {(context) => <WrappedComponent {...props} contextUser={context} />}
          </UserContext.Consumer>
        )}
        {typeConsumer === "data" && (
          <ImageContext.Consumer>
            {(context) => (
              <WrappedComponent {...props} contextImage={context} />
            )}
          </ImageContext.Consumer>
        )}
      </>
    );
  };
};
export default withContext;
