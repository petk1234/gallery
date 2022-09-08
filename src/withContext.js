import { UserContext } from "./components/app/App";
import { GalleryContext } from "./components/gallery/Gallery";
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
          <GalleryContext.Consumer>
            {(context) => (
              <WrappedComponent {...props} contextImage={context} />
            )}
          </GalleryContext.Consumer>
        )}
      </>
    );
  };
};
export default withContext;
